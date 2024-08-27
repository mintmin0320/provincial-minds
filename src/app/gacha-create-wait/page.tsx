import GachaWait from "@/shared/@common/ui/GachaWait"
import GachaWaitRouteWrapper from "@/shared/@common/ui/GachaWaitRouteWrapper"

import ROUTE_PATH from "@/shared/@common/constants/path"

const GachaCreateLadingPage = () => {
  return (
    <main className="flex h-dvh w-full flex-col items-center bg-white">
      <GachaWaitRouteWrapper path={ROUTE_PATH.MESSAGE_CHOICE}>
        <GachaWait text="감사 가챠를 등록하는 중이에요!" />
      </GachaWaitRouteWrapper>
    </main>
  )
}

export default GachaCreateLadingPage
