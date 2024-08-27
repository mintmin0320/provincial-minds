import Image from "next/image"

import GachaShareButton from "@/features/gacha-landing-share/ui/GachaShareButton"
import Layout from "@/shared/@common/ui/Layout"

const GachaSharePage = () => {
  return (
    <Layout className="flex h-dvh flex-col items-center gap-[8px] pt-[152px]">
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
    </Layout>
  )
}

export default GachaSharePage
