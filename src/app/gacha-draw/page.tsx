import TimeCostAnalogy from "@/features/gacha-create/ui/TimeCostAnalogy"
import GachaDrawWrapper from "@/features/gacha-draw/ui/GachaDrawWrapper"
import GachaRouterButton from "@/shared/@common/ui/GachaRouterButton"
import GachaVisual from "@/shared/@common/ui/GachaVisual"

import { getUserData } from "@/actions/user"
import { CapsuleTheme } from "@/shared/@common/types/capsuleTheme.types"

interface ISearchParamsProps {
  searchParams: {
    userId: string
    theme: CapsuleTheme
  }
}

const GachaDrawPage = async ({ searchParams }: ISearchParamsProps) => {
  const userId = searchParams.userId
  const theme = searchParams.theme

  const userData = await getUserData(Number(userId))

  return (
    <GachaDrawWrapper userId={userId} theme={theme}>
      <main className="h-full bg-white pt-[28px]">
        <TimeCostAnalogy />
        <GachaVisual isCreateGacha={false} userData={userData} />
        <div className="px-[16px]">
          <GachaRouterButton isCreateGacha={false} />
        </div>
      </main>
    </GachaDrawWrapper>
  )
}

export default GachaDrawPage
