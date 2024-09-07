import AddressInputSection from "@/features/provincial-address-search/ui/AddressInputSection"
import FlowTitle from "@/shared/@common/ui/FlowTitle"
import Layout from "@/shared/@common/ui/Layout"

const AddressSearchPage = () => {
  return (
    <Layout className="h-dvh px-[16px] pt-[28px]">
      <FlowTitle>{`이번 만남 장소는\n어디인가요?`}</FlowTitle>
      <AddressInputSection />
    </Layout>
  )
}

export default AddressSearchPage
