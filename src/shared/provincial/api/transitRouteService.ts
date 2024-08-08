import { fetchCoordinates } from './fetchCoordinates'
import { fetchPublicTransitRoute } from './fetchTransitRouteApi'

export async function getTransitRoute(provincialArea: string , urbanArea: string) {
  const startCoordinates = await fetchCoordinates(provincialArea)
  const endCoordinates = await fetchCoordinates(urbanArea)

  if (!startCoordinates || !endCoordinates) {
    throw new Error("A-4. 좌표를 가져오지 못했습니다.")
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
