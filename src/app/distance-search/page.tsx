import LocationInputSection from "@/features/provincial-distance-search/ui/LocationInputSection"
import FlowTitle from "@/shared/@common/ui/FlowTitle"
import Layout from "@/shared/@common/ui/Layout"

const DistanceSearchPage = () => {
  return (
    <Layout className="h-dvh px-[16px] pt-[28px]">
      <FlowTitle>{`이번 만남 장소는\n어디인가요?`}</FlowTitle>
      <LocationInputSection />
    </Layout>
  )
}

export default DistanceSearchPage
