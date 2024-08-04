"use client"

import Image from "next/image"

import CreateGachaButton from "@/shared/ui/CreateGachaButton"

import { truncateText } from "@/shared/utils/truncateText"

interface ICapsuleProps {
  color: "yellow" | "orange" | "mint"
  positionStyle: string
  iconsSize: number
  isCreateGacha?: boolean
  capsuleText?: string
}

const Capsule = ({
  color,
  positionStyle,
  iconsSize,
  isCreateGacha = false,
  capsuleText = "",
}: ICapsuleProps) => {
  return (
    <div className={positionStyle}>
      {color === "mint" && !isCreateGacha && (
        <div className="absolute left-[51%] top-[40%] h-[42px] w-[114px] -translate-x-[50%] -translate-y-[20px] rotate-[6.1deg] transform content-center rounded-[10px] bg-white text-center text-sm font-bold tracking-[-0.28px] text-mint01">
          {truncateText(capsuleText, 8)}
        </div>
      )}
      <Image
        src={`/icons/capsule_${color}.svg`}
        width={iconsSize}
        height={iconsSize}
        alt={`capsule-${color}`}
        priority
      />
      {color === "mint" && isCreateGacha && <CreateGachaButton />}
    </div>
  )
}

export default Capsule
