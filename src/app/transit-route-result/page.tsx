import NavigationButton from "@/features/provincial-route-result/ui/NavigationButton"
import SelectedTransitRoute from "@/features/provincial-route-result/ui/SelectedTransitRoute"
import FlowTitle from "@/shared/@common/ui/FlowTitle"

const TransitRouteResult = () => {
  return (
    <main className="h-full w-full bg-white px-[16px] pb-[42px] pt-[28px]">
      <FlowTitle>{`지방러님의\n여정을 계산해 보았어요!`}</FlowTitle>
      <section className="mb-[42px] mt-[58px] flex flex-col items-center text-center text-xl font-bold leading-xl tracking-[-0.4px] text-[#202020]">
        <SelectedTransitRoute />
      </section>
      <NavigationButton />
    </main>
  )
}

export default TransitRouteResult
