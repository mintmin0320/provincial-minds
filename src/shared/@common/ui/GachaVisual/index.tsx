import Image from "next/image"

import { IUserProps } from "../../types/user.types"
import Capsule from "../Capsule"
import OpenCustomMessageButton from "../OpenCustomMessageButton"

const GachaVisual = ({
  isCreateGacha,
  userData,
}: {
  isCreateGacha: boolean
  userData?: IUserProps
}) => {
  return (
    <section className="relative mt-[12px] h-[650px] w-full">
      <Image
        src="/icons/gacha.svg"
        width={375}
        height={620}
        alt="뽑기 틀"
        className="absolute left-0 right-0 top-0 mx-auto"
        priority
      />
      <Capsule
        iconsWidth={270}
        iconsHeight={282}
        color="yellow"
        positionStyle="absolute left-[21.5%] top-[6%] mo:left-[-5.5%] mo:top-[6%]"
      />
      <Capsule
        iconsWidth={211}
        iconsHeight={254}
        color="orange"
        positionStyle="absolute left-[46.5%] top-[11.5%] mo:left-[44%] mo:top-[12%]"
      />
      <Capsule
        iconsWidth={265}
        iconsHeight={265}
        color="mint"
        positionStyle="absolute left-[31%] top-[34.5%] mo:left-[12%] mo:top-[34.5%]"
        isCreateGacha={isCreateGacha}
        capsuleText={userData?.gachaMessage ?? ""}
      />
      {!isCreateGacha && (
        <OpenCustomMessageButton
          isSendMessage
          customMessage={userData?.userMessage ?? ""}
        />
      )}
    </section>
  )
}

export default GachaVisual
