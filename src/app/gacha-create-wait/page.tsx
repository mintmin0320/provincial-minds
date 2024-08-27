import GachaWait from "@/shared/@common/ui/GachaWait"
import GachaWaitRouteWrapper from "@/shared/@common/ui/GachaWaitRouteWrapper"
import Layout from "@/shared/@common/ui/Layout"

import ROUTE_PATH from "@/shared/@common/constants/path"

const GachaCreateLadingPage = () => {
  return (
    <Layout className="flex h-dvh flex-col items-center">
      <GachaWaitRouteWrapper path={ROUTE_PATH.MESSAGE_CHOICE}>
        <GachaWait text="감사 가챠를 등록하는 중이에요!" />
      </GachaWaitRouteWrapper>
    </Layout>
  )
}

export default GachaCreateLadingPage
