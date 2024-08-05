"use client"

import SearchAreaFieldGroup from "@/shared/@common/ui/AreaSearchFieldGroup"
import TransitRouteList from "./TransitRouteList"

const areaState = {
  urbanArea: "서울특별시 마포구 양화로 160 홍대입구역",
  provincialArea: "부산광역시 금정구 부산대학로 63번길 2",
}

const TransitRouteSection = () => {
  return (
    <section>
      <SearchAreaFieldGroup areaState={areaState} type="view" />
      <TransitRouteList />
    </section>
  )
}

export default TransitRouteSection
