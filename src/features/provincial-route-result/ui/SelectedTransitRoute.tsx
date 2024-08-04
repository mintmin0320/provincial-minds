import Image from "next/image"

import { ExtendedTransitRouteProps } from "@/shared/types/transitRoute.type"
import { getTransportationStyle } from "@/shared/utils/transportationThemes"
import { cn } from "@/shared/utils/twMerge"
import { getTransportIcon } from "../utils/getTransportIcon"

const SelectedTransitRoute = ({
  transitRoute,
  destination,
}: ExtendedTransitRouteProps) => {
  const { transportationList, travelCost, travelHours, travelMinutes } =
    transitRoute
  return (
    <>
      <p>
        선택하신 교통수단은 <br />
        <>
          {transportationList.map((item, index) => (
            <span key={item} className={cn(getTransportationStyle(item))}>
              {item}
              {index < transportationList.length - 1 && (
                <span className="text-[#202020]">, </span>
              )}
            </span>
          ))}
          이에요
        </>
      </p>
      <Image
        src={getTransportIcon(transportationList[0])}
        width={214}
        height={214}
        alt={transportationList[0]}
      />
      <Image
        src="/icons/slider-button.svg"
        width={24}
        height={0}
        alt="디자인 언더바"
        className="mb-[20px] mt-[48px]"
      />
      <p>
        <span className="text-blue01">{destination}</span>에 도착하기까지 <br />
        편도{" "}
        <span className="text-blue01">
          {travelHours}시간 {travelMinutes}분
        </span>
        <br />
        교통비{" "}
        <span className="text-blue01">{travelCost.toLocaleString()}</span>이
        소비돼요!
      </p>
    </>
  )
}

export default SelectedTransitRoute
