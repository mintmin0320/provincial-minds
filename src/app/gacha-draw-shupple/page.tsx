import GachaWait from "@/shared/@common/ui/GachaWait"
import GachaWaitRouteWrapper from "@/shared/@common/ui/GachaWaitRouteWrapper"

import ROUTE_PATH from "@/shared/@common/constants/path"

interface GachaDrawLandingPageProps {
  searchParams: Record<string, string>
}

const GachaDrawLandingPage = ({ searchParams }: GachaDrawLandingPageProps) => {
  return (
    <main className="flex h-dvh w-full flex-col items-center bg-white">
      <GachaWaitRouteWrapper
        path={`${ROUTE_PATH.GACHA_DRAW}?theme=${searchParams.theme}`}
      >
        <GachaWait text="감사 가챠를 뽑는 중이에요!" />
      </GachaWaitRouteWrapper>
    </main>
  )
}

export default GachaDrawLandingPage
