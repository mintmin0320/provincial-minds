"use client"

import useGetSearchParam from "@/shared/@common/hooks/useGetSearchParams"
import { getTransportationList } from "@/shared/@common/utils/getTransportationList"
import { getTransportationStyle } from "@/shared/@common/utils/transportationThemes"
import { cn } from "@/shared/@common/utils/twMerge"
import { useGetTransitList } from "@/shared/provincial/api/queries/useGetTransitList"
import Image from "next/image"
import { getTransportIcon } from "../utils/getTransportIcon"

const SelectedTransitRoute = () => {
  const userId = useGetSearchParam("id") || null
  const transitId = useGetSearchParam("transitId") || null

  const { transitList } = useGetTransitList(Number(userId))

  // 선택된 transit 데이터를 가져오기
  const selectedTransit = transitList?.transits?.[Number(transitId)]

  // 기본값 설정
  const pathType = selectedTransit?.pathType ?? 0
  const totalTime = selectedTransit?.totalTime ?? 0
  const payment = selectedTransit?.payment ?? 0

  // 교통수단 목록 가져오기
  const transportationList = getTransportationList(pathType)

  // 시간 계산
  const hour = Math.floor(totalTime / 60)
  const minute = totalTime % 60

  // 목적지 추출
  const endArea = transitList?.endArea ?? ""
  const destination = endArea.match(/\((.*?)\)/)?.[1] ?? ""

  // 시간 표시 형식
  const travelHours = hour !== 0 ? `${hour}시간` : ""
  const travelMinutes = `${minute}분`

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
          {travelHours} {travelMinutes}
        </span>
        <br />
        교통비 <span className="text-blue01">{payment.toLocaleString()}</span>이
        소비돼요!
      </p>
    </>
  )
}

export default SelectedTransitRoute
