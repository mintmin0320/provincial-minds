"use client"

import Loading from "@/shared/@common/ui/Loading"
import LocationInputGroup from "@/shared/@common/ui/LocationInputGroup"
import TransitList from "./TransitList"

import TransitRoutes from "../hooks/TransitRoutes"

const TransitRouteSection = () => {
  const { transitList, locationState, isLoading } = TransitRoutes()

  if (isLoading) return <Loading />

  return (
    <section>
      <LocationInputGroup locationState={locationState} type="view" />
      <TransitList transits={transitList?.transits ?? []} />
    </section>
  )
}

export default TransitRouteSection
