"use client"

import Image from "next/image"

import { useGetUserData } from "@/shared/urban/api/queries/useGetUserData"

import { useModals } from "../../hooks/useModals"
import { cn } from "../../utils/twMerge"

import Capsule from "../Capsule"
import GachaModal from "../GachaModal"

const GachaVisual = ({ isCreateGacha }: { isCreateGacha: boolean }) => {
  const { userData } = useGetUserData()
  const { open } = useModals()

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
        capsuleText={userData?.gachaMessage ?? ""}
      />
      {!isCreateGacha && (
        <button
          className={cn(
            "absolute right-[24%] top-[2%] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#F8D169]",
            "mo:right-[8%] mo:top-[2%]",
          )}
          onClick={() =>
            open(GachaModal, {
              isSendMessage: true,
              customMessage: userData?.userMessage ?? "",
            })
          }
        >
          <Image
            src="/icons/message.svg"
            alt="message-open-button"
            width={28}
            height={28}
          />
        </button>
      )}
    </section>
  )
}

export default GachaVisual
