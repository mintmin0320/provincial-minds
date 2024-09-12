import { useCookies } from 'next-client-cookies'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'

import { postGachaMessage } from '@/shared/provincial/api/mutations/useSetGachaMessage'
import { useGetUserData } from '@/shared/urban/api/queries/useGetUserData'
import ROUTE_PATH from '../constants/path'
import { useGachaStore } from './useGachaStore'


const themes = ["orange", "mint", "yellow"] as const

export const useGachaAction = () => {
  const router = useRouter()
  const cookies = useCookies()
  const userId = Number(cookies.get("userId"))

  const [isCreating, setIsCreating] = useState<boolean>(false)

  const { userData } = useGetUserData()

  const gachaMessage = useGachaStore((state) => state.gachaMessage)
  const setGachaMessage = useGachaStore((state) => state.setGachaMessage)

  /** 가챠 메시지 생성 */
  const createGacha = async () => {
    if (!gachaMessage) return

    setIsCreating(true)

    try {
      const result = await postGachaMessage(userId,gachaMessage)

      if (result) router.push(ROUTE_PATH.GACHA_CREATE_WAIT)
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    }
  }

  const drawGacha = () => {
    const randomTheme = themes[Math.floor(Math.random() * themes.length)]

    if (userData?.userMessage) {
      setGachaMessage(userData?.userMessage)
    }

    router.push(`${ROUTE_PATH.GACHA_DRAW_LANDING}?theme=${randomTheme}`)
  }

  const executeAction = (isCreateGacha: boolean) => {
    if (isCreateGacha) {
      createGacha()
    } else {
      drawGacha()
    }
  }

  return { executeAction, gachaMessage, isCreating }
}
