import Image from "next/image"

import NavigationButton from "./NavigationButton"

import { getTransportationStyle } from "@/shared/@common/utils/transportationThemes"
import { cn } from "@/shared/@common/utils/twMerge"
import { fetchTransitList } from "@/shared/provincial/api/fetchTransitList"
import useTransitRouteResults from "../hooks/useTransitRouteResults"
import { getTransportIcon } from "../utils/getTransportIcon"

const TransitRouteResultSection = async ({
  transitId,
}: {
  transitId: string
}) => {
  const transitList = await fetchTransitList()

  const { hour, minute, destinationText, transportationList, payment } =
    useTransitRouteResults(transitList, Number(transitId))

  return (
    <section className="mt-[58px] flex flex-col items-center gap-[42px] text-center text-xl font-bold leading-xl tracking-[-0.4px] text-[#202020]">
      <p>
        선택하신 교통수단은 <br />
        {transportationList?.map((item, index) => (
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
        className="animate-pulse-grow"
        priority
      />
      <Image
        src="/icons/slider-button.svg"
        width={46}
        height={6}
        alt="디자인 언더바"
        className="mb-[20px] mt-[48px]"
        priority
      />
      <p>
        <span className="text-blue01">{destinationText}</span>에 도착하기까지{" "}
        <br />
        편도{" "}
        {hour !== 0 && (
          <>
            <span className="text-blue01">{hour}</span>
            시간
          </>
        )}{" "}
        <span className="text-blue01">{minute}</span>분
        <br />
        교통비 <span className="text-blue01">{payment.toLocaleString()}</span>
        원이 소비돼요!
      </p>
      <NavigationButton payment={payment} hour={hour} minute={minute} />
    </section>
  )
}

export default TransitRouteResultSection
