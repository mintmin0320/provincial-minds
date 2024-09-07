import { Suspense } from "react"

import CalculateButton from "@/features/provincial-route-search/ui/CalculateButton"
import TransitRouteSection from "@/features/provincial-route-search/ui/TransitRouteSection"
import FlowTitle from "@/shared/@common/ui/FlowTitle"
import Layout from "@/shared/@common/ui/Layout"
import Loading from "@/shared/@common/ui/Loading"

const TransitRouteSearchPage = () => {
  return (
    <Layout className="h-full px-[16px] pt-[28px]">
      <FlowTitle>{`지방러님을 위한\n최적의 경로를 알아보았어요`}</FlowTitle>
      <Suspense fallback={<Loading />}>
        <TransitRouteSection />
      </Suspense>
      <CalculateButton />
    </Layout>
  )
}

export default TransitRouteSearchPage
