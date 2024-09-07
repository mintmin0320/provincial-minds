"use client"

import Image from "next/image"

import { LocalMindsTitleFont } from "../../assets/fonts"
import { cn } from "../../utils/twMerge"

const Loading = () => {
  const images = ["city-bus", "intercity-bus", "subway"]
  const randomImage = images[Math.floor(Math.random() * images.length)]

  return (
    <div className="flex h-dvh flex-col items-center pt-[140px]">
      <Image
        src={`/icons/${randomImage}.svg`}
        width={168}
        height={168}
        alt="city-bus"
        className="animate-pulse-grow"
        priority
      />
      <span
        className={cn(LocalMindsTitleFont.className, "text-[22px] font-bold")}
      >
        최적의 경로를 찾고있어요 🔍
      </span>
    </div>
  )
}

export default Loading
