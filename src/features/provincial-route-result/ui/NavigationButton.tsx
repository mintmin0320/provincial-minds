"use client"

import { useRouter } from "next/navigation"

import Button from "@/shared/@common/ui/Button"

import ROUTE_PATH from "@/shared/@common/constants/path"
import { fixButtonStyle } from "@/shared/@common/styles/fixButton"

const NavigationButton = () => {
  const router = useRouter()

  return (
    <Button
      type="button"
      theme="blue"
      className={fixButtonStyle}
      onClick={() => router.push(ROUTE_PATH.GACHA_CREATE)}
    >
      감사 가챠 만들기
    </Button>
  )
}

export default NavigationButton
