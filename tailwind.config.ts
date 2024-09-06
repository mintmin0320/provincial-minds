import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        blue01: "#3d66f8",
        mint01: "#54D8C7",
        yellow01: "#FEEFC7",
        orange01: "#FC9366",
        orange02: "#FC6C3E",
        pink01: "#FB8484",
      },
      letterSpacing: {
        tighter048: "-0.48px",
      },
      backgroundColor: {
        white: "#fff",
        black: "#000",
        blue01: "#6687FC",
        mint01: "#54D8C7",
      },
      lineHeight: {
        xl: "160%", // 38.4px
        l: "140%", // 19.6px
      },
      screens: {
        mo: { max: "767px" },
        tablet: { min: "768px", max: "1024px" },
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        pulseGrow: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        "slide-up": "slideUp 0.3s ease-out",
        'pulse-grow': 'pulseGrow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
