import Image from "next/image"

import CreateGachaButton from "@/shared/@common/ui/CreateGachaButton"

import { truncateText } from "@/shared/@common/utils/truncateText"

interface ICapsuleProps {
  color: "yellow" | "mint" | "orange"
  positionStyle: string
  iconWidth: number
  iconHeight: number
  isCreateGacha?: boolean
  capsuleText?: string
}

const Capsule = ({
  color,
  positionStyle,
  iconWidth,
  iconHeight,
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
        width={iconWidth}
        height={iconHeight}
        alt={`capsule-${color}`}
        priority
      />
      {color === "mint" && isCreateGacha && <CreateGachaButton />}
    </div>
  )
}

export default Capsule
