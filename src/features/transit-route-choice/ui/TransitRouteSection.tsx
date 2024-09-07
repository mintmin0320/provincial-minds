import LocationInputGroup from "@/shared/@common/ui/LocationInputGroup"
import TransitList from "./TransitList"

import { fetchTransitList } from "@/shared/provincial/api/fetchTransitList"

const TransitRouteSection = async () => {
  const transitList = await fetchTransitList()

  const routeAddresses = {
    origin: transitList.origin,
    destination: transitList.destination,
  }

  return (
    <section>
      <LocationInputGroup routeAddresses={routeAddresses} type="view" />
      <TransitList transits={transitList.transits ?? []} />
    </section>
  )
}

export default TransitRouteSection
