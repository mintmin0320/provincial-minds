import localFont from "next/font/local"

export const LocalMindsBodyFont = localFont({
  variable: "--font-localMinds",
  src: [
    {
      path: "./Pretendard-Bold.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Pretendard-Light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
})

export const LocalMindsTitleFont = localFont({
  variable: "--font-localMinds-title",
  src: [
    {
      path: "./rundr-Bold.woff",
      weight: "900",
      style: "normal",
    },
  ],
})
