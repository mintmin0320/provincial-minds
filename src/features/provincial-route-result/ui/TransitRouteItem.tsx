"use client"

import Image from "next/image"

import { ExtendedTransitRouteProps } from "@/shared/@common/types/transitRoute.types"
import { getTransportationStyle } from "@/shared/@common/utils/transportationThemes"
import { cn } from "@/shared/@common/utils/twMerge"
import { getTransportIcon } from "../utils/getTransportIcon"

const TransitRouteItem = ({
  transportationList,
  destination,
  totalTime,
  payment,
}: ExtendedTransitRouteProps) => {
  const hour = Math.floor(totalTime / 60)
  const minute = totalTime % 60
  const travelHours = hour !== 0 ? `${hour}` : ""
  const travelMinutes = `${minute}`
  const safePayment = payment || 0

  return (
    <>
      <p>
        선택하신 교통수단은 <br />
        {transportationList.map((item, index) => (
          <span key={item} className={cn(getTransportationStyle(item))}>
            {item}
            {index < transportationList.length - 1 && (
              <span className="text-[#202020]">, </span>
            )}
          </span>
        ))}{" "}
        이에요
      </p>
      <Image
        src={getTransportIcon(transportationList[0])}
        width={214}
        height={214}
        alt={transportationList[0]}
        priority
      />
      <Image
        src="/icons/slider-button.svg"
        width={24}
        height={0}
        alt="디자인 언더바"
        className="mb-[20px] mt-[48px]"
        priority
      />
      <p>
        <span className="text-blue01">{destination}</span>에 도착하기까지 <br />
        편도 <span className="text-blue01">{travelHours}</span>시간{" "}
        <span className="text-blue01">{travelMinutes}</span>분
        <br />
        교통비{" "}
        <span className="text-blue01">{safePayment.toLocaleString()}</span>
        원이 소비돼요!
      </p>
    </>
  )
}

export default TransitRouteItem
