import GachaWait from "@/shared/@common/ui/GachaWait"
import GachaWaitRouteWrapper from "@/shared/@common/ui/GachaWaitRouteWrapper"

import ROUTE_PATH from "@/shared/@common/constants/path"

interface GachaCreateLadingPageProps {
  searchParams: Record<string, string>
}

const GachaCreateLadingPage = ({
  searchParams,
}: GachaCreateLadingPageProps) => {
  return (
    <GachaWaitRouteWrapper
      path={`${ROUTE_PATH.CHOICE_MESSAGE}?id=${searchParams.id}`}
    >
      <main className="relative flex h-dvh w-full flex-col items-center bg-white">
        <GachaWait text="감사 가챠를 등록하는 중이에요!" />
      </main>
    </GachaWaitRouteWrapper>
  )
}

export default GachaCreateLadingPage
