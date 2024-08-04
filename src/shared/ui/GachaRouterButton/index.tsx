"use client"

import { useRouter } from "next/navigation"

import Button from "@/shared/ui/Button"

import ROUTE_PATH from "@/shared/constants/path"
import { useGachaStore } from "../../hooks/useGachaStore"

interface IGachaRouterButtonProps {
  isCreateGacha: boolean
  text?: string
}

const themes = ["orange", "mint", "yellow"] as const

const GachaRouterButton = ({
  isCreateGacha,
  text,
}: IGachaRouterButtonProps) => {
  const router = useRouter()

  const gachaMessage = useGachaStore((state) => state.gachaMessage)
  const setGachaMessage = useGachaStore((state) => state.setGachaMessage)

  const handleCreateGacha = () => {
    if (isCreateGacha) {
      router.push(ROUTE_PATH.GACHA_CREATE_WAIT)
    } else {
      /** yellow, mint, orange 랜덤 */
      const randomTheme = themes[Math.floor(Math.random() * themes.length)]

      if (text) {
        setGachaMessage(text)
      }

      router.push(`${ROUTE_PATH.GACHA_DRAW_LANDING}?theme=${randomTheme}`)
    }
  }

  return (
    <Button
      type="button"
      className="fixed bottom-0 left-1/2 mb-[10px] max-w-[calc(100%-32px)] -translate-x-1/2 transform"
      theme={isCreateGacha ? "blue" : "gradient"}
      disabled={isCreateGacha ? !gachaMessage : false}
      onClick={handleCreateGacha}
    >
      {isCreateGacha ? "감사 가챠 등록하기" : "RANDOM!"}
    </Button>
  )
}

export default GachaRouterButton
