"use client"

import { useRouter } from "next/navigation"

import Button from "@/shared/@common/ui/Button"

import ROUTE_PATH from "@/shared/@common/constants/path"
import { fixButtonStyle } from "@/shared/@common/styles/fixButton"
import { cn } from "@/shared/@common/utils/twMerge"

const NavigationButton = () => {
  const router = useRouter()

  return (
    <Button
      type="button"
      theme="blue"
      className={cn(fixButtonStyle, "mo:static mo:mb-0 mo:left-auto mo:transform-none mo:max-w-full")}
      onClick={() => router.push(ROUTE_PATH.GACHA_CREATE)}
    >
      감사 가챠 만들기
    </Button>
  )
}

export default NavigationButton
