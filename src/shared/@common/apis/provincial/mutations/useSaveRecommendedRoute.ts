import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { createUserWithTransitData } from '@/actions/transit'
import { ILocationValidatedProps } from '@/shared/@common/types/location.types'
import { useCookies } from 'next-client-cookies'
import { fetchTransitRoute } from '../fetchTransitRoute'

async function saveUserAndTransitData(locationState: ILocationValidatedProps): Promise<number> {
  const transitRoute = await fetchTransitRoute(locationState)
  const userId = await createUserWithTransitData(transitRoute, locationState)

  if (!userId) {
    throw new Error("A-7. 유저 정보를 가져오지 못했습니다.")
  }

  return userId
}

export default function useSaveRecommendedRoute() {
  const cookies = useCookies()

  return useMutation<number, Error, ILocationValidatedProps>({
    mutationFn: saveUserAndTransitData,
    onSuccess: (userId) => {
      cookies.set("userId", String(userId))
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })
}
