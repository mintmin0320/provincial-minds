import { fetchCoordinates } from './fetchCoordinates'
import { fetchPublicTransitRoute } from './fetchTransitRouteApi'

export async function getTransitRoute(provincialArea: string , urbanArea: string) {
  const startCoordinates = await fetchCoordinates(provincialArea)
  const endCoordinates = await fetchCoordinates(urbanArea)

  if (!startCoordinates || !endCoordinates) {
    throw new Error("좌표 변경을 지원하지 않습니다. 다른 주소를 선택해 주세요.")
  }

  const { latitude: startLatitude, longitude: startLongitude } = startCoordinates
  const { latitude: endLatitude, longitude: endLongitude } = endCoordinates

  const transitRoute = await fetchPublicTransitRoute(
    startLongitude,
    startLatitude,
    endLongitude,
    endLatitude
  )

  return transitRoute;
}
