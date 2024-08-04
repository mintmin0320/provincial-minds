import type { Metadata } from "next"

import ModalContainer from "@/shared/@common/ui/ModalContainer"
import { LocalMindsBodyFont } from "@/shared/assets/fonts"
import "@/shared/styles/globals.css"
import { Toaster } from "react-hot-toast"

export const metadata: Metadata = {
  title: "지방적 사고",
  description: "서울 친구들은 모르는 지방 친구들의 고충",
  icons: {
    icon: "/icons/capsule-modal.svg"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={LocalMindsBodyFont.className}>
      <body className="mx-auto h-full max-w-[767px] bg-white">
        {children}
        <ModalContainer />
        <Toaster />
      </body>
    </html>
  )
}
