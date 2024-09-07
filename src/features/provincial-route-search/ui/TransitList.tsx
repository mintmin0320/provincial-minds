"use client"

import TransitRouteCard from "./TransitRouteCard"

import { ITransitProps } from "@/shared/@common/types/transitRoute.types"
import { useCallback } from "react"
import { useTransitStore } from "../store/useTransitStore"

interface ITransitListProps {
  transits: ITransitProps[]
}

const TransitList = ({ transits }: ITransitListProps) => {
  const { selectedIndex, setSelectedIndex } = useTransitStore()

  const handleSelect = useCallback(
    (index: number) => {
      setSelectedIndex(index)
    },
    [setSelectedIndex],
  )

  return (
    <ul className="mt-[37px] flex flex-col gap-[8px] pb-[96px]">
      {transits.map((item, index) => (
        <li key={item.id} onClick={() => handleSelect(index)}>
          <TransitRouteCard isSelected={selectedIndex === index} {...item} />
        </li>
      ))}
    </ul>
  )
}

export default TransitList
