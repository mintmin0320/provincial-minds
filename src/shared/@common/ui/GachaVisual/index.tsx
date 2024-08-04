import Image from "next/image"

import Capsule from "../Capsule"

interface IGachaVisualProps {
  isCreateGacha: boolean
  capsuleText?: string
}

const GachaVisual = ({ isCreateGacha, capsuleText }: IGachaVisualProps) => {
  return (
    <section className="relative mt-[12px] h-[650px] w-full">
      <Image
        src="/icons/gacha.svg"
        fill
        alt="뽑기 틀"
        className="absolute left-0 right-0 top-0"
        priority
      />
      <Capsule
        iconsSize={255}
        color="yellow"
        positionStyle="absolute left-[22%] top-[6.5%] mo:left-[-3%] mo:top-[6%]"
      />
      <Capsule
        iconsSize={214}
        color="orange"
        positionStyle="absolute left-[48.5%] top-[14%] mo:left-[44%] mo:top-[15%]"
      />
      <Capsule
        iconsSize={288}
        color="mint"
        positionStyle="absolute left-[28%] top-[33.5%] mo:left-[4%] mo:top-[33.3%]"
        isCreateGacha={isCreateGacha}
        capsuleText={capsuleText}
      />
    </section>
  )
}

export default GachaVisual
