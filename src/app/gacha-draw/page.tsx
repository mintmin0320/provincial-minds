import TimeCostAnalogy from "@/features/gacha-create/ui/TimeCostAnalogy"
import GachaDrawWrapper from "@/features/gacha-draw/ui/GachaDrawWrapper"
import GachaRouterButton from "@/shared/@common/ui/GachaRouterButton"
import GachaVisual from "@/shared/@common/ui/GachaVisual"

const GachaDrawPage = async () => {
  return (
    <GachaDrawWrapper>
      <main className="h-full bg-white pt-[28px]">
        <TimeCostAnalogy />
        <GachaVisual isCreateGacha={false} />
        <div className="px-[16px]">
          <GachaRouterButton isCreateGacha={false} />
        </div>
      </main>
    </GachaDrawWrapper>
  )
}

export default GachaDrawPage
