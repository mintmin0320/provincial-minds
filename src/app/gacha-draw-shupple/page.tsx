import GachaWait from "@/shared/@common/ui/GachaWait"
import GachaWaitRouteWrapper from "@/shared/@common/ui/GachaWaitRouteWrapper"

import ROUTE_PATH from "@/shared/constants/path"

interface GachaDrawLandingPageProps {
  searchParams: Record<string, string>
}

const GachaDrawLandingPage = ({ searchParams }: GachaDrawLandingPageProps) => {
  return (
    <GachaWaitRouteWrapper
      path={`${ROUTE_PATH.GACHA_DRAW}?theme=${searchParams.theme}`}
    >
      <main className="relative flex h-dvh w-full flex-col items-center bg-white">
        <GachaWait text="감사 가챠를 뽑는 중이에요!" />
      </main>
    </GachaWaitRouteWrapper>
  )
}

export default GachaDrawLandingPage
