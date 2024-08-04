"use client"

import { useRouter } from "next/navigation"

import Button from "@/shared/ui/Button"

import ROUTE_PATH from "@/shared/constants/path"

const NavigationButton = () => {
  const router = useRouter()

  return (
    <Button
      type="button"
      theme="blue"
      onClick={() => router.push(`${ROUTE_PATH.GACHA_CREATE}?step=3`)}
    >
      감사 가챠 만들기
    </Button>
  )
}

export default NavigationButton
