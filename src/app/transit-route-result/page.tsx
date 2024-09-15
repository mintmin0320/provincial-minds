import { Suspense } from "react"

import TransitRouteResultSection from "@/features/transit-route-result/ui/TransitRouteResultSection"
import ErrorBoundaryWrapper from "@/shared/@common/ui/ErrorBoundaryWrapper"
import FlowTitle from "@/shared/@common/ui/FlowTitle"
import Layout from "@/shared/@common/ui/Layout"
import Loading from "@/shared/@common/ui/Loading"

interface ISearchParamsProps {
  searchParams: {
    transitId: string
  }
}

const TransitRouteResult = ({ searchParams }: ISearchParamsProps) => {
  const transitId = searchParams.transitId

  return (
    <Layout className="h-full px-[16px] pb-[42px] pt-[28px]">
      <FlowTitle>{`지방러님의\n여정을 계산해 보았어요!`}</FlowTitle>
      <ErrorBoundaryWrapper>
        <Suspense fallback={<Loading />}>
          <TransitRouteResultSection transitId={transitId} />
        </Suspense>
      </ErrorBoundaryWrapper>
    </Layout>
  )
}

export default TransitRouteResult
