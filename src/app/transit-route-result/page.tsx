import NavigationButton from "@/features/provincial-route-result/ui/NavigationButton"
import SelectedTransitRoute from "@/features/provincial-route-result/ui/SelectedTransitRoute"
import ErrorBoundaryWrapper from "@/shared/@common/ui/ErrorBoundaryWrapper"
import FlowTitle from "@/shared/@common/ui/FlowTitle"
import Layout from "@/shared/@common/ui/Layout"

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
      <section className="mb-[42px] mt-[58px] flex flex-col items-center text-center text-xl font-bold leading-xl tracking-[-0.4px] text-[#202020]">
        <ErrorBoundaryWrapper>
          <SelectedTransitRoute transitId={transitId} />
        </ErrorBoundaryWrapper>
      </section>
      <NavigationButton />
    </Layout>
  )
}

export default TransitRouteResult
