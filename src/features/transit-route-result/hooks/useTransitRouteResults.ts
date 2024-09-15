import { ITransitRouteResponseProps } from '@/shared/@common/types/transitRoute.types'
import { getTransportationList } from '@/shared/@common/utils/getTransportationList'

const useTransitRouteResults = (transitList: ITransitRouteResponseProps, transitId: number) => {
  const transitPathResult = transitList?.transits[transitId]

  const hour = Math.floor(transitPathResult.totalTime / 60)
  const minute = transitPathResult.totalTime % 60
  const destination = transitList.destination ?? ""
  const destinationText = destination.match(/\((.*?)\)/)?.[1] ?? destination
  const transportationList = getTransportationList(transitPathResult?.pathType ?? "지하철")
  const payment = transitPathResult.payment || 0

  return {
    hour,
    minute,
    destinationText,
    transportationList,
    payment
  }
}

export default useTransitRouteResults
