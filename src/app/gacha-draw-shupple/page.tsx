import GachaWait from "@/shared/@common/ui/GachaWait"
import GachaWaitRouteWrapper from "@/shared/@common/ui/GachaWaitRouteWrapper"
import Layout from "@/shared/@common/ui/Layout"

import ROUTE_PATH from "@/shared/@common/constants/path"

interface GachaDrawLandingPageProps {
  searchParams: Record<string, string>
}

const GachaDrawLandingPage = ({ searchParams }: GachaDrawLandingPageProps) => {
  return (
    <Layout className="flex h-dvh flex-col items-center">
      <GachaWaitRouteWrapper
        path={`${ROUTE_PATH.GACHA_DRAW}?theme=${searchParams.theme}`}
      >
        <GachaWait text="감사 가챠를 뽑는 중이에요!" />
      </GachaWaitRouteWrapper>
    </Layout>
  )
}

export default GachaDrawLandingPage
