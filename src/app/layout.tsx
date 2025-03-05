import { CookiesProvider } from "next-client-cookies/server"
import { Toaster } from "react-hot-toast"

import { LocalMindsBodyFont } from "@/shared/@common/assets/fonts"
import "@/shared/@common/styles/globals.css"
import ModalContainer from "@/shared/@common/ui/ModalContainer"
import RQProvider from "@/shared/@common/ui/RQProvider"
import siteMetadata from "@/shared/siteMetadata"
import { metadata } from "./metadata"

export { metadata }

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
