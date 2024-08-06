"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

import Button from "@/shared/@common/ui/Button"
import TransitRouteCard from "./TransitRouteCard"

import ROUTE_PATH from "@/shared/@common/constants/path"
import useGetSearchParam from "@/shared/@common/hooks/useGetSearchParams"
import { ITransitRouteCardProps } from "@/shared/@common/types/transitRoute.type"

const TransitRouteList = ({ transits }: ITransitRouteCardProps) => {
  const router = useRouter()

  const userId = useGetSearchParam("id") || null

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  return (
    <>
      <ul className="mt-[37px] flex flex-col gap-[8px] pb-[96px]">
        {transits.map((item, index) => (
          <div onClick={() => setSelectedIndex(index)} key={item.id}>
            <TransitRouteCard isSelected={selectedIndex === index} {...item} />
          </div>
        ))}
      </ul>
      <Button
        type="button"
        className="fixed bottom-0 left-1/2 mb-[10px] max-w-[calc(100%-32px)] -translate-x-1/2 transform"
        theme="blue"
        disabled={selectedIndex === null}
        onClick={() =>
          router.push(
            `${ROUTE_PATH.TRANSIT_ROTE_RESULT}?id=${userId}&transitId=${selectedIndex}`,
          )
        }
      >
        여정 계산하기
      </Button>
    </>
  )
}

export default TransitRouteList
