import { fetchCoordinates } from './fetchCoordinates'
import { fetchPublicTransitRoute } from './fetchTransitRouteApi'

import { ILocationValidatedProps } from '@/shared/@common/types/area.types'

export async function getTransitRoute({origin, destination}: ILocationValidatedProps) {
  const originCoordinates = await fetchCoordinates(origin)
  const destinationCoordinates = await fetchCoordinates(destination)

  if (!originCoordinates || !destinationCoordinates) {
    throw new Error("좌표 변경을 지원하지 않습니다. 다른 주소를 선택해 주세요.")
  }

  const { latitude: originLatitude, longitude: originLongitude } = originCoordinates
  const { latitude: destinationLatitude, longitude: destinationLongitude } = destinationCoordinates

  const transitRoute = await fetchPublicTransitRoute(
    originLatitude,
    originLongitude,
    destinationLatitude,
    destinationLongitude
  )

  return transitRoute
}
