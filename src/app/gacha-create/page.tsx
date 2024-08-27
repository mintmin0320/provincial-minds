import TimeCostAnalogy from "@/features/gacha-create/ui/TimeCostAnalogy"
import GachaRouterButton from "@/shared/@common/ui/GachaRouterButton"
import GachaVisual from "@/shared/@common/ui/GachaVisual"
import Layout from "@/shared/@common/ui/Layout"

const CreateGachaPage = () => {
  return (
    <Layout className="h-full pt-[28px]">
      <TimeCostAnalogy />
      <GachaVisual isCreateGacha />
      {/** 감사 가챠 등록 버튼 */}
      <GachaRouterButton isCreateGacha />
    </Layout>
  )
}

export default CreateGachaPage
