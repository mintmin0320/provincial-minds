import TimeCostAnalogy from "@/features/gacha-create/ui/TimeCostAnalogy"
import GachaDrawWrapper from "@/features/gacha-draw/ui/GachaDrawWrapper"
import GachaRouterButton from "@/shared/@common/ui/GachaRouterButton"
import GachaVisual from "@/shared/@common/ui/GachaVisual"
import { Suspense } from "react"

const GachaDrawPage = async () => {
  return (
    <Suspense>
      <GachaDrawWrapper>
        <main className="h-full bg-white pt-[28px]">
          <TimeCostAnalogy />

          <GachaVisual isCreateGacha={false} />

          <div className="px-[16px]">
            <GachaRouterButton isCreateGacha={false} />
          </div>
        </main>
      </GachaDrawWrapper>
    </Suspense>
  )
}

export default GachaDrawPage
