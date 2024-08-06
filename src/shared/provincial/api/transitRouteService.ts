import { fetchCoordinates } from './fetchCoordinates';
import { fetchPublicTransitRoute } from './fetchTransitRouteApi';

export async function getTransitRoute(provincialArea: string | null, urbanArea: string | null) {
  if (!provincialArea || !urbanArea) {
    throw new Error("Both provincialArea and urbanArea must be provided");
  }

  const startCoordinates = await fetchCoordinates(provincialArea);
  const endCoordinates = await fetchCoordinates(urbanArea);

  if (!startCoordinates || !endCoordinates) {
    throw new Error("Failed to fetch coordinates.");
  }

  const { latitude: startLatitude, longitude: startLongitude } = startCoordinates;
  const { latitude: endLatitude, longitude: endLongitude } = endCoordinates;

  if (
    startLatitude === null ||
    startLongitude === null ||
    endLatitude === null ||
    endLongitude === null
  ) {
    throw new Error("Coordinates contain null values.");
  }

  const transitRoute = await fetchPublicTransitRoute(
    startLongitude,
    startLatitude,
    endLongitude,
    endLatitude
  );

  return transitRoute;
}
