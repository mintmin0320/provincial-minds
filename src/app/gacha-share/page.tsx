import Image from "next/image"

import GachaShareButton from "@/features/gacha-landing-share/ui/GachaShareButton"
import { Suspense } from "react"

const GachaSharePage = () => {
  return (
    <main className="flex h-dvh flex-col items-center gap-[8px] bg-white pt-[152px]">
      <Image
        src="/icons/mini-gacha-landing.svg"
        width={208}
        height={208}
        alt="mini gacha"
      />
      <p className="text-center text-xl font-bold leading-xl tracking-[-0.04px] text-[#202020]">
        가챠를 공유할 준비가
        <br /> 모두 끝났어요!
      </p>
      <Suspense>
        <GachaShareButton />
      </Suspense>
    </main>
  )
}

export default GachaSharePage
