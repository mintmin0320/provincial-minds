import { useMutation } from '@tanstack/react-query'
import { setCookie } from 'cookies-next'
import toast from 'react-hot-toast'

import { createUserWithTransitData } from '@/actions/user-actions'
import { ILocationValidatedProps } from '@/shared/@common/types/location'
import { getTransitRoute } from '../transitRouteService'

async function saveUserAndTransitData(locationState: ILocationValidatedProps): Promise<number> {
  const transitRoute = await getTransitRoute(locationState)
  const userId = await createUserWithTransitData(transitRoute, locationState)

  if (!userId) {
    throw new Error("A-7. 유저 정보를 가져오지 못했습니다.")
  }

  return userId
}

export default function useSaveRecommendedRoute() {
  return useMutation<number, Error, ILocationValidatedProps>({
    mutationFn: saveUserAndTransitData,
    onSuccess: (userId) => {
      setCookie("userId", String(userId))
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })
}
