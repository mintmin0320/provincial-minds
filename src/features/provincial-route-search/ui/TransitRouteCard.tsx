"use client"

import { ExtendedTransitRouteCardProps } from "@/shared/@common/types/transitRoute.type"
import { themes, themeStyle } from "@/shared/@common/utils/transportationThemes"
import { cn } from "@/shared/@common/utils/twMerge"
import { getTransportationList } from "../../../shared/@common/utils/getTransportationList"

const TransitRouteCard = ({
  isSelected,
  bestRoute: isBest,
  pathType,
  totalTime,
  subwayBusTransitCount,
  transitCount,
  payment,
}: ExtendedTransitRouteCardProps) => {
  const safePathType = pathType ?? 0
  const safeTotalTime = totalTime ?? 0
  const safeSubwayBusTransitCount = subwayBusTransitCount ?? 0
  const safeTransitCount = transitCount ?? 0
  const safePayment = payment ?? 0

  const transportationList = getTransportationList(safePathType)

  const hour = Math.floor(safeTotalTime / 60)
  const minute = safeTotalTime % 60

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
          {hour !== 0 && (
            <>
              <span className="text-[26px]">{Math.floor(hour)}</span>
              <span>시간</span>
            </>
          )}
          <span className="text-[26px]">{minute}</span>분
        </div>
        <div>
          <span className="text-2xl">{safePayment.toLocaleString()}</span>원
        </div>
      </div>
      <div className="mt-[16px] flex justify-between leading-l tracking-[-0.07px]">
        <div className="flex gap-[8px]">
          {transportationList.map((transportation) => (
            <span
              key={transportation}
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
          {safeSubwayBusTransitCount + safeTransitCount}회
        </div>
      </div>
    </li>
  )
}

export default TransitRouteCard
