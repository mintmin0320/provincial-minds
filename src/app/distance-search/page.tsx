import AreaSearchFieldSection from "@/features/provincial-distance-search/ui/AreaSearchFieldSection"
import FlowTitle from "@/shared/@common/ui/FlowTitle"

const DistanceSearchPage = () => {
  return (
    <main className="h-dvh w-full bg-white px-[16px] pt-[28px]">
      <FlowTitle>{`이번 만남 장소는\n어디인가요?`}</FlowTitle>
      <AreaSearchFieldSection />
    </main>
  )
}

export default DistanceSearchPage
