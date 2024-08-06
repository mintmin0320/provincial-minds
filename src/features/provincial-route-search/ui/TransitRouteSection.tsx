"use client"

import SearchAreaFieldGroup from "@/shared/@common/ui/AreaSearchFieldGroup"
import TransitRouteList from "./TransitRouteList"

import useGetSearchParam from "@/shared/@common/hooks/useGetSearchParams"
import { useGetTransitList } from "@/shared/provincial/api/queries/useGetTransitList"

const TransitRouteSection = () => {
  const userId = useGetSearchParam("id") || null

  const { transitList } = useGetTransitList(Number(userId))

  const areaState = {
    provincialArea: transitList?.startArea || "",
    urbanArea: transitList?.endArea || "",
  }

  return (
    <section>
      <SearchAreaFieldGroup areaState={areaState} type="view" />
      <TransitRouteList transits={transitList?.transits || []} />
    </section>
  )
}

export default TransitRouteSection
