"use client"

import Loading from "@/shared/@common/ui/Loading"
import TransitRouteItem from "./TransitRouteItem"

import { getTransportationList } from "@/shared/@common/utils/getTransportationList"
import { useGetTransitList } from "@/shared/provincial/api/queries/useGetTransitList"

interface ISelectedTransitRouteProps {
  transitId: string
}

const SelectedTransitRoute = ({ transitId }: ISelectedTransitRouteProps) => {
  const { transitList, isLoading, isError } = useGetTransitList()

  // 선택된 transit 데이터
  const selectedRouteData = transitList?.transits[Number(transitId)]

  // 기본값 할당
  const pathType = selectedRouteData?.pathType ?? 0
  const totalTime = selectedRouteData?.totalTime ?? 0
  const payment = selectedRouteData?.payment ?? 0
  const endArea = transitList?.endArea ?? ""

  // 목적지, 교통 타입(종류) 추출
  const transportationList = getTransportationList(pathType)
  const destination = endArea.match(/\((.*?)\)/)?.[1] ?? endArea

  if (isLoading) return <Loading />
  if (isError) return <div>에러가 발생했어요. 다시 시도해 주세요.</div>

  return (
    <TransitRouteItem
      transportationList={transportationList}
      destination={destination}
      totalTime={totalTime}
      payment={payment}
    />
  )
}

export default SelectedTransitRoute
