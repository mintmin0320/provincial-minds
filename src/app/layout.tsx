import type { Metadata } from "next"
import { CookiesProvider } from "next-client-cookies/server"
import { Toaster } from "react-hot-toast"

import ModalContainer from "@/shared/@common/ui/ModalContainer"
import RQProvider from "@/shared/@common/ui/RQProvider"

import { LocalMindsBodyFont } from "@/shared/@common/assets/fonts"
import "@/shared/@common/styles/globals.css"
import siteMetadata from "@/shared/siteMetadata"

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
  return (
    <html lang={siteMetadata.language} className={LocalMindsBodyFont.className}>
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
