import NavigationButton from "@/features/provincial-route-result/ui/NavigationButton"
import SelectedTransitRoute from "@/features/provincial-route-result/ui/SelectedTransitRoute"
import FlowTitle from "@/shared/@common/ui/FlowTitle"

import { TransportationType } from "@/shared/types/transitRoute.type"

const data = {
  transitRoute: {
    transportationList: ["지하철", "시내버스"] as TransportationType[],
    transferCount: 3,
    travelCost: 53200,
    travelHours: "3",
    travelMinutes: "40",
  },
  destination: "홍대입구역",
}

const TransitRouteResult = () => {
  return (
    <main className="h-full w-full bg-white px-[16px] pb-[42px] pt-[28px]">
      <FlowTitle>{`지방러님의\n여정을 계산해 보았어요!`}</FlowTitle>
      <section className="mb-[42px] mt-[58px] flex flex-col items-center text-center text-xl font-bold leading-xl tracking-[-0.4px] text-[#202020]">
        <SelectedTransitRoute
          transitRoute={data.transitRoute}
          destination={data.destination}
        />
      </section>
      <NavigationButton />
    </main>
  )
}

export default TransitRouteResult
