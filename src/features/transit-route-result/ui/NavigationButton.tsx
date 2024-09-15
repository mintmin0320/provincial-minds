"use client"

import { useRouter } from "next/navigation"

import Button from "@/shared/@common/ui/Button"

import ROUTE_PATH from "@/shared/@common/constants/path"
import { fixButtonStyle } from "@/shared/@common/styles/fixButton"
import { setLocalStorageItem } from "@/shared/@common/utils/localStorage"
import { cn } from "@/shared/@common/utils/twMerge"

const NavigationButton = ({
  payment,
  hour,
  minute,
}: {
  payment: number
  hour: number
  minute: number
}) => {
  const router = useRouter()

  const handleCreateGacha = () => {
    const timeCostAnalogyInfo = { payment, hour, minute }

    setLocalStorageItem("timeCostAnalogyInfo", timeCostAnalogyInfo)

    router.push(ROUTE_PATH.GACHA_CREATE)
  }

  return (
    <Button
      type="button"
      theme="blue"
      className={cn(
        fixButtonStyle,
        "mo:static mo:left-auto mo:mb-0 mo:max-w-full mo:transform-none",
      )}
      onClick={handleCreateGacha}
    >
      감사 가챠 만들기
    </Button>
  )
}

export default NavigationButton
