"use client"

import { useRouter } from "next/navigation"

import Button from "@/shared/@common/ui/Button"

import ROUTE_PATH from "@/shared/@common/constants/path"

const NavigationButton = () => {
  const router = useRouter()

  return (
    <Button
      type="button"
      theme="blue"
      className="fixed bottom-0 left-1/2 mb-[10px] max-w-[calc(100%-32px)] -translate-x-1/2 transform"
      onClick={() => router.push(`${ROUTE_PATH.GACHA_CREATE}?step=3`)}
    >
      감사 가챠 만들기
    </Button>
  )
}

export default NavigationButton
