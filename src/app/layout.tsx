import type { Metadata } from "next"

import { Toaster } from "react-hot-toast"

import { LocalMindsBodyFont } from "@/shared/@common/assets/fonts"
import "@/shared/@common/styles/globals.css"

import ModalContainer from "@/shared/@common/ui/ModalContainer"
import RQProvider from "@/shared/@common/ui/RQProvider"
import siteMetadata from "@/shared/siteMetadata"
import { CookiesProvider } from "next-client-cookies/server"
import Head from "next/head"

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: siteMetadata.title,
  description: siteMetadata.description,
  icons: {
    icon: siteMetadata.siteLogo,
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: siteMetadata.socialBanner,
        alt: "뽑기 이미지",
      },
    ],
  },
  twitter: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: siteMetadata.socialBanner,
        alt: "뽑기 이미지",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const handleLoad = (e: React.SyntheticEvent<HTMLLinkElement, Event>) => {
    const target = e.target as HTMLLinkElement
    target.media = "all"
  }

  return (
    <html lang={siteMetadata.language} className={LocalMindsBodyFont.className}>
      <Head>
        {/* CSS 파일 미리 로드 */}
        <link
          rel="preload"
          href="/_next/static/css/bd28c9cf57fafd45.css"
          as="style"
        />
        <link
          rel="preload"
          href="/_next/static/css/2c3723fa6751881f.css"
          as="style"
        />
        <link
          rel="preload"
          href="/_next/static/css/d8b74ee1af12be30.css"
          as="style"
        />

        {/* 비동기 CSS 로드 */}
        <link
          rel="stylesheet"
          href="/_next/static/css/bd28c9cf57fafd45.css"
          media="print"
          onLoad={handleLoad} // 문자열 대신 함수로 변경
        />
        <link
          rel="stylesheet"
          href="/_next/static/css/2c3723fa6751881f.css"
          media="print"
          onLoad={handleLoad} // 문자열 대신 함수로 변경
        />
        <link
          rel="stylesheet"
          href="/_next/static/css/d8b74ee1af12be30.css"
          media="print"
          onLoad={handleLoad} // 문자열 대신 함수로 변경
        />
      </Head>
      <body className="mx-auto h-full max-w-[767px] bg-white">
        <CookiesProvider>
          <RQProvider>{children}</RQProvider>
        </CookiesProvider>
        <ModalContainer />
        <Toaster />
      </body>
    </html>
  )
}
