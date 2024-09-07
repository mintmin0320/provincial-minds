import { getTransportationList } from '@/shared/@common/utils/getTransportationList'
import { useGetTransitList } from '@/shared/provincial/api/queries/useGetTransitList'

const transitRoutes = (transitId: string) => {
  const { transitList, isLoading } = useGetTransitList()

  // 선택된 교통 수단
  const selectedRouteData = transitList?.transits[Number(transitId)] ?? {
    totalTime: 0,
    payment: 0,
    pathType: 0,
  }

  const { totalTime, payment, pathType } = selectedRouteData

  
  const hour = Math.floor(totalTime / 60)
  const minute = totalTime % 60
  const destination = transitList?.destination ?? ""
  const destinationText = destination.match(/\((.*?)\)/)?.[1] ?? destination
  const transportationList = getTransportationList(pathType)

  return {
    hour,
    minute,
    payment,
    destinationText,
    transportationList,
    isLoading
  }
}

export default transitRoutes
