import TimeCostAnalogy from "@/features/gacha-create/ui/TimeCostAnalogy"
import GachaRouterButton from "@/shared/@common/ui/GachaRouterButton"
import GachaVisual from "@/shared/@common/ui/GachaVisual"

const CreateGachaPage = () => {
  return (
    <main className="h-full w-full bg-white pt-[28px]">
      <TimeCostAnalogy />
      <GachaVisual isCreateGacha />
      {/** 감사 가챠 등록 버튼 */}
      <div className="px-[16px]">
        <GachaRouterButton isCreateGacha />
      </div>
    </main>
  )
}

export default CreateGachaPage
