import { Suspense } from "react"

import TimeCostAnalogy from "@/features/gacha-create/ui/TimeCostAnalogy"
import GachaDrawWrapper from "@/features/gacha-draw/ui/GachaDrawWrapper"
import GachaRouterButton from "@/shared/@common/ui/GachaRouterButton"
import GachaVisual from "@/shared/@common/ui/GachaVisual"

import { CapsuleTheme } from "@/shared/@common/types/capsuleTheme.types"

interface SearchParamsType {
  searchParams: {
    userId: string
    theme: CapsuleTheme
  }
}

const GachaDrawPage = async ({ searchParams }: SearchParamsType) => {
  const userId = searchParams.userId
  const theme = searchParams.theme

  return (
    <Suspense>
      <GachaDrawWrapper userId={userId} theme={theme}>
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
