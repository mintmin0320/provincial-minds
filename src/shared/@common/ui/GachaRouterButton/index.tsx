"use client"

import { useRouter } from "next/navigation"

import Button from "@/shared/@common/ui/Button"

import ROUTE_PATH from "@/shared/@common/constants/path"
import useSetGachaMessage from "@/shared/provincial/api/mutations/useSetGachaMessage"
import { useGetUserData } from "@/shared/urban/api/queries/useGetUserData"
import { useGachaStore } from "../../hooks/useGachaStore"

interface IGachaRouterButtonProps {
  isCreateGacha: boolean
}

const themes = ["orange", "mint", "yellow"] as const

const GachaRouterButton = ({ isCreateGacha }: IGachaRouterButtonProps) => {
  const router = useRouter()

  const gachaMessage = useGachaStore((state) => state.gachaMessage)
  const setGachaMessage = useGachaStore((state) => state.setGachaMessage)

  const { userData } = useGetUserData()

  const { mutateAsync: saveGachaMessage } = useSetGachaMessage()

  const handleCreateGacha = async () => {
    if (isCreateGacha) {
      if (!gachaMessage) return

      const result = await saveGachaMessage({
        gachaMessage: gachaMessage,
      })

      if (result) {
        router.push(ROUTE_PATH.GACHA_CREATE_WAIT)
      }
    } else {
      // yellow, mint, orange 중 랜덤으로 테마 선택
      const randomTheme = themes[Math.floor(Math.random() * themes.length)]

      if (userData?.userMessage) {
        setGachaMessage(userData?.userMessage)
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
