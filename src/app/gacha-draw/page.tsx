import TimeCostAnalogy from "@/features/gacha-create/ui/TimeCostAnalogy"
import GachaDrawWrapper from "@/features/gacha-draw/ui/GachaDrawWrapper"
import GachaRouterButton from "@/shared/@common/ui/GachaRouterButton"
import GachaVisual from "@/shared/@common/ui/GachaVisual"

const GachaDrawPage = () => {
  return (
    <GachaDrawWrapper>
      <main className="h-full bg-white pt-[28px]">
        <TimeCostAnalogy />
        <GachaVisual isCreateGacha={false} capsuleText={"이거슨 뽑기 텍스트"} />
        <div className="px-[16px]">
          <GachaRouterButton
            text={"이거슨 한마디 텍스트"}
            isCreateGacha={false}
          />
        </div>
      </main>
    </GachaDrawWrapper>
  )
}

export default GachaDrawPage
