import Image from "next/image"

import GachaShareButton from "@/features/gacha-landing-share/ui/GachaShareButton"
import { Metadata } from "next"

export const generateMetadata = (): Metadata => {
  return {
    openGraph: {
      title: "지방적 사고 🍀 - 지방 친구들의 이야기를 들어보세요!",
    },
    twitter: {
      title: "지방적 사고 🍀 - 지방 친구들의 이야기를 들어보세요!",
    },
  }
}

const GachaSharePage = () => {
  return (
    <main className="flex h-dvh flex-col items-center gap-[8px] bg-white pt-[152px]">
      <Image
        src="/icons/mini-gacha-landing.svg"
        width={208}
        height={208}
        alt="gacha-share"
        priority
      />
      <p className="text-center text-xl font-bold leading-xl tracking-[-0.04px] text-[#202020]">
        가챠를 공유할 준비가
        <br /> 모두 끝났어요!
      </p>
      <GachaShareButton />
    </main>
  )
}

export default GachaSharePage
