"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

import SearchAreaFieldGroup from "@/shared/@common/ui/AreaSearchFieldGroup"
import Button from "@/shared/@common/ui/Button"
import Loading from "@/shared/@common/ui/Loading"
import TransitRouteCard from "./TransitRouteCard"

import ROUTE_PATH from "@/shared/@common/constants/path"
import { fixButtonStyle } from "@/shared/@common/styles/fixButton"
import { useGetTransitList } from "@/shared/provincial/api/queries/useGetTransitList"

const TransitRouteSection = () => {
  const router = useRouter()

  const { transitList, isLoading, isError } = useGetTransitList()

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const areaState = {
    provincialArea: transitList?.startArea ?? "",
    urbanArea: transitList?.endArea ?? "",
  }

  if (isLoading) return <Loading />
  if (isError) return <div>에러가 발생했어요. 다시 시도해 주세요.</div>

  return (
    <section>
      {/** 출발, 도착지 정보 */}
      <SearchAreaFieldGroup areaState={areaState} type="view" />
      <ul className="mt-[37px] flex flex-col gap-[8px] pb-[96px]">
        {transitList?.transits.map((item, index) => (
          <div key={item.id} onClick={() => setSelectedIndex(index)}>
            <TransitRouteCard isSelected={selectedIndex === index} {...item} />
          </div>
        ))}
      </ul>
      <Button
        type="button"
        className={fixButtonStyle}
        theme="blue"
        disabled={selectedIndex === null}
        onClick={() =>
          router.push(
            `${ROUTE_PATH.TRANSIT_ROTE_RESULT}?transitId=${selectedIndex}`,
          )
        }
      >
        여정 계산하기
      </Button>
    </section>
  )
}

export default TransitRouteSection
