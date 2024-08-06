"use client"

import useGetSearchParam from "@/shared/@common/hooks/useGetSearchParams"
import { getTransportationList } from "@/shared/@common/utils/getTransportationList"
import { useGetTransitList } from "@/shared/provincial/api/queries/useGetTransitList"
import TransitRouteItem from "./TransitRouteItem"

const SelectedTransitRoute = () => {
  const userId = useGetSearchParam("id") || null
  const transitId = useGetSearchParam("transitId") || null

  const { transitList } = useGetTransitList(Number(userId))

  // 선택된 transit 데이터
  const selectedTransit = transitList?.transits?.[Number(transitId)]

  // 기본값 설정
  const pathType = selectedTransit?.pathType ?? 0
  const totalTime = selectedTransit?.totalTime ?? 0
  const payment = selectedTransit?.payment ?? 0

  // 교통수단 목록
  const transportationList = getTransportationList(pathType)

  // 시간 계산
  const hour = Math.floor(totalTime / 60)
  const minute = totalTime % 60

  // 목적지 추출
  const endArea = transitList?.endArea ?? ""
  const destination = endArea.match(/\((.*?)\)/)?.[1] ?? ""

  // 시, 분
  const travelHours = hour !== 0 ? `${hour}` : ""
  const travelMinutes = `${minute}`

  return (
    <TransitRouteItem
      transportationList={transportationList}
      destination={destination}
      travelHours={travelHours}
      travelMinutes={travelMinutes}
      payment={payment}
    />
  )
}

export default SelectedTransitRoute
