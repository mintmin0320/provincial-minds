import GachaWait from "@/shared/@common/ui/GachaWait"
import GachaWaitRouteWrapper from "@/shared/@common/ui/GachaWaitRouteWrapper"

import ROUTE_PATH from "@/shared/constants/path"

const GachaCreateLadingPage = () => {
  return (
    <GachaWaitRouteWrapper path={`${ROUTE_PATH.CHOICE_MESSAGE}?step=4`}>
      <main className="relative flex h-dvh w-full flex-col items-center bg-white">
        <GachaWait text="감사 가챠를 등록하는 중이에요!" />
      </main>
    </GachaWaitRouteWrapper>
  )
}

export default GachaCreateLadingPage
