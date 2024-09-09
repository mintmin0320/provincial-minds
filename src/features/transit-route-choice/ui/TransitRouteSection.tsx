import Image from "next/image"

import LocationInputGroup from "@/shared/@common/ui/LocationInputGroup"
import TransitList from "./TransitList"

import { fetchTransitList } from "@/shared/provincial/api/fetchTransitList"

const TransitRouteSection = async () => {
  const transitList = await fetchTransitList()

  const routeAddresses = {
    origin: transitList.origin,
    destination: transitList.destination,
  }

  return (
    <section>
      <LocationInputGroup routeAddresses={routeAddresses} type="view" />
      <div className="mt-[16px] flex items-center gap-[4px]">
        <Image
          src="/icons/capsule-modal.svg"
          width={14}
          height={14}
          alt="capsule-icon"
        />
        <p className="text-[14px]">
          <span className="font-bold underline">
            열차, 항공, 고속버스, 시외버스
          </span>
          는 가격이 책정되지 않습니다.
        </p>
      </div>
      <TransitList transits={transitList.transits ?? []} />
    </section>
  )
}

export default TransitRouteSection
