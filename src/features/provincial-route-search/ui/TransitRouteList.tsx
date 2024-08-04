"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

import Button from "@/shared/@common/ui/Button"
import TransitRouteCard from "./TransitRouteCard"

import ROUTE_PATH from "@/shared/constants/path"
import { ITransitRouteCardProps } from "@/shared/types/transitRoute.type"

/** 더미 데이터 */
const transitRoute: ITransitRouteCardProps["transitRoute"] = {
  isBest: true,
  transportationList: ["지하철", "시외버스", "시내버스"],
  transferCount: 3,
  travelCost: 53200,
  travelHours: "3",
  travelMinutes: "40",
}

const data = [
  transitRoute,
  transitRoute,
  transitRoute,
  transitRoute,
  transitRoute,
]

const TransitRouteList = () => {
  const router = useRouter()

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  return (
    <>
      <ul className="mt-[37px] flex flex-col gap-[8px] pb-[96px]">
        {data.map((item, index) => (
          <div onClick={() => setSelectedIndex(index)} key={index}>
            <TransitRouteCard
              isSelected={selectedIndex === index}
              transitRoute={item}
            />
          </div>
        ))}
      </ul>
      <Button
        type="button"
        className="fixed bottom-0 left-1/2 mb-[10px] max-w-[calc(100%-32px)] -translate-x-1/2 transform"
        theme="blue"
        disabled={selectedIndex === null}
        onClick={() => router.push(`${ROUTE_PATH.TRANSIT_ROTE_RESULT}?step=2`)}
      >
        여정 계산하기
      </Button>
    </>
  )
}

export default TransitRouteList
