import localFont from "next/font/local"

export const LocalMindsBodyFont = localFont({
  variable: "--font-localMinds",
  src: [
    {
      path: "./Pretendard-Bold.subset.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Pretendard-Regular.subset.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Pretendard-Light.subset.woff2",
      weight: "300",
      style: "normal",
    },
  ],
})

export const LocalMindsTitleFont = localFont({
  variable: "--font-localMinds-title",
  src: [
    {
      path: "./rundr-bold.woff2",
      weight: "900",
      style: "normal",
    },
  ],
})
