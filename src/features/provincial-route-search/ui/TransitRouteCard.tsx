"use client"

import { ExtendedTransitRouteCardProps } from "@/shared/types/transitRoute.type"
import { themes, themeStyle } from "@/shared/utils/transportationThemes"
import { cn } from "@/shared/utils/twMerge"

const TransitRouteCard = ({
  isSelected,
  transitRoute,
}: ExtendedTransitRouteCardProps) => {
  const {
    isBest = false,
    transportationList,
    transferCount,
    travelCost,
    travelHours,
    travelMinutes,
  } = transitRoute

  return (
    <li
      className={cn("rounded-[10px] border px-[20px] py-[24px]", {
        "border-[#D0DaFE] bg-[#F5F7FF]": isSelected,
        "border-[#E8E8E8] bg-white": !isSelected,
      })}
    >
      {isBest && (
        <span className="leading-l tracking-[-0.07px] text-blue01">최적👍</span>
      )}
      <div className="mt-[12px] flex justify-between text-lg font-bold leading-l tracking-[-0.13px] text-black">
        <div className="flex gap-[3px]">
          <span className="text-[26px]">{travelHours}</span>시간
          <span className="text-[26px]">{travelMinutes}</span>분
        </div>
        <div>
          <span className="text-2xl">{travelCost.toLocaleString()}</span>원
        </div>
      </div>
      <div className="mt-[16px] flex justify-between leading-l tracking-[-0.07px]">
        <div className="flex gap-[8px]">
          {transportationList.map((transportation, index) => (
            <span
              key={index}
              className={cn(
                themeStyle[themes[transportation]],
                "rounded-lg px-[8px] py-[4px] text-sm font-bold",
              )}
            >
              {transportation}
            </span>
          ))}
        </div>
        <div className="text-sm font-medium text-[#A8A8A8]">
          <span className="text-base">환승</span>
          {transferCount}회
        </div>
      </div>
    </li>
  )
}

export default TransitRouteCard
