import { cookies } from "next/headers"

import TimeCostAnalogy from "@/features/gacha-create/ui/TimeCostAnalogy"
import GachaDrawWrapper from "@/features/gacha-draw/ui/GachaDrawWrapper"
import GachaRouterButton from "@/shared/@common/ui/GachaRouterButton"
import GachaVisual from "@/shared/@common/ui/GachaVisual"
import Layout from "@/shared/@common/ui/Layout"

import { getUserData } from "@/actions/user"
import { CapsuleTheme } from "@/shared/@common/types/capsuleTheme.types"

interface ISearchParamsProps {
  searchParams: {
    userId: string
    theme: CapsuleTheme
  }
}

const GachaDrawPage = async ({ searchParams }: ISearchParamsProps) => {
  const userId = searchParams.userId ?? cookies().get("userId")?.value
  const theme = searchParams.theme

  const userData = await getUserData(Number(userId))

  return (
    <Layout className="h-full pt-[28px]">
      <GachaDrawWrapper userId={userId} theme={theme}>
        <TimeCostAnalogy />
        <GachaVisual isCreateGacha={false} userData={userData} />
        <div className="px-[16px]">
          <GachaRouterButton isCreateGacha={false} />
        </div>
      </GachaDrawWrapper>
    </Layout>
  )
}

export default GachaDrawPage
