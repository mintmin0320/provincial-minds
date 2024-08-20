import { useRouter } from 'next/navigation'

import useSetGachaMessage from '@/shared/provincial/api/mutations/useSetGachaMessage'
import { useGetUserData } from '@/shared/urban/api/queries/useGetUserData'
import ROUTE_PATH from '../constants/path'
import { useGachaStore } from './useGachaStore'


const themes = ["orange", "mint", "yellow"] as const

export const useGachaAction = () => {
  const router = useRouter()

  const { mutateAsync: saveGachaMessage } = useSetGachaMessage()
  const { userData } = useGetUserData()

  const gachaMessage = useGachaStore((state) => state.gachaMessage)
  const setGachaMessage = useGachaStore((state) => state.setGachaMessage)

  const createGacha = async () => {
    if (!gachaMessage) return

    const result = await saveGachaMessage({ gachaMessage })

    if (result) {
      router.push(ROUTE_PATH.GACHA_CREATE_WAIT)
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

  return { executeAction, gachaMessage }
}
