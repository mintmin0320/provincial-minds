"use client"

import Loading from "@/shared/@common/ui/Loading"
import LocationInputGroup from "@/shared/@common/ui/LocationInputGroup"
import CalculateButton from "./CalculateButton"
import TransitList from "./TransitList"

import TransitRoutes from "../hooks/TransitRoutes"

const TransitRouteSection = () => {
  const { transitList, locationState, isLoading, isError } = TransitRoutes()

  if (isLoading) return <Loading />
  if (isError) return <div>에러가 발생했어요. 다시 시도해 주세요.</div>

  return (
    <section>
      <LocationInputGroup locationState={locationState} type="view" />
      <TransitList transits={transitList?.transits ?? []} />
      <CalculateButton />
    </section>
  )
}

export default TransitRouteSection
