import type { Metadata } from "next"

import { Toaster } from "react-hot-toast"

import { LocalMindsBodyFont } from "@/shared/@common/fonts"
import "@/shared/styles/globals.css"

import ModalContainer from "@/shared/@common/ui/ModalContainer"
import RQProvider from "@/shared/@common/ui/RQProvider"

export const metadata: Metadata = {
  title: "지방적 사고",
  description: "서울 친구들은 모르는 지방 친구들의 고충",
  icons: {
    icon: "/icons/capsule-modal.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={LocalMindsBodyFont.className}>
      <body className="mx-auto h-full max-w-[767px] bg-white">
        <RQProvider>{children}</RQProvider>
        <ModalContainer />
        <Toaster />
      </body>
    </html>
  )
}
