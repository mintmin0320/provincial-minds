import TimeCostAnalogy from "@/features/gacha-create/ui/TimeCostAnalogy"
import GachaRouterButton from "@/shared/@common/ui/GachaRouterButton"
import GachaVisual from "@/shared/@common/ui/GachaVisual"
import { Suspense } from "react"

const CreateGachaPage = () => {
  return (
    <main className="h-full w-full bg-white pt-[28px]">
      <TimeCostAnalogy />
      <Suspense>
        <GachaVisual isCreateGacha />
      </Suspense>
      {/** 감사 가챠 등록 버튼 */}
      <div className="px-[16px]">
        <Suspense>
          <GachaRouterButton isCreateGacha />
        </Suspense>
      </div>
    </main>
  )
}

export default CreateGachaPage
