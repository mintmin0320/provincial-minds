import CalculateButton from "@/features/provincial-route-search/ui/CalculateButton"
import TransitRouteSection from "@/features/provincial-route-search/ui/TransitRouteSection"
import ErrorBoundaryWrapper from "@/shared/@common/ui/ErrorBoundaryWrapper"
import FlowTitle from "@/shared/@common/ui/FlowTitle"

const TransitRouteSearchPage = () => {
  return (
    <main className="h-full w-full bg-white px-[16px] pt-[28px]">
      <FlowTitle>{`지방러님을 위한\n최적의 경로를 알아보았어요`}</FlowTitle>
      <ErrorBoundaryWrapper>
        <TransitRouteSection />
      </ErrorBoundaryWrapper>
      <CalculateButton />
    </main>
  )
}

export default TransitRouteSearchPage
