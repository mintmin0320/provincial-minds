import LocationInputSection from "@/features/provincial-distance-search/ui/LocationInputSection"
import FlowTitle from "@/shared/@common/ui/FlowTitle"

const DistanceSearchPage = () => {
  return (
    <main className="h-dvh w-full bg-white px-[16px] pt-[28px]">
      <FlowTitle>{`이번 만남 장소는\n어디인가요?`}</FlowTitle>
      <LocationInputSection />
    </main>
  )
}

export default DistanceSearchPage
