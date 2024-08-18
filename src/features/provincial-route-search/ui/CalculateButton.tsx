"use client"

import { useRouter } from "next/navigation"

import Button from "@/shared/@common/ui/Button"

import ROUTE_PATH from "@/shared/@common/constants/path"
import { fixButtonStyle } from "@/shared/@common/styles/fixButton"
import { useTransitStore } from "../store/useTransitStore"

const CalculateButton = () => {
  const router = useRouter()

  const selectedIndex = useTransitStore((state) => state.selectedIndex)

  return (
    <Button
      theme="blue"
      className={fixButtonStyle}
      disabled={selectedIndex === null}
      onClick={() =>
        router.push(
          `${ROUTE_PATH.TRANSIT_ROTE_RESULT}?transitId=${selectedIndex}`,
        )
      }
    >
      여정 계산하기
    </Button>
  )
}

export default CalculateButton
