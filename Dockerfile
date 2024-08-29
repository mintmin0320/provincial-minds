FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies
COPY package.json ./
COPY yarn.lock ./
COPY .pnp.cjs ./
COPY .pnp.loader.mjs ./
COPY .yarnrc.yml ./
COPY .yarn ./.yarn
RUN yarn install --immutable

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/.yarn ./.yarn
COPY --from=deps /app/.pnp.cjs ./
COPY . .

RUN yarn build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.pnp.cjs ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

RUN rm -rf ./.yarn/cache
COPY --from=builder --chown=nextjs:nodejs /app/.yarn ./.yarn/

USER nextjs

EXPOSE 80

ENV PORT 80

CMD ["node", "-r", "./.pnp.cjs", "server.js"]
