import { useMutation } from '@tanstack/react-query'
import { setCookie } from 'cookies-next'
import toast from 'react-hot-toast'

import { createUserWithTransitData } from '@/actions/user-actions'
import { getTransitRoute } from '../transitRouteService'

async function saveUserAndTransitData({
  provincialArea,
  urbanArea,
}: {
  provincialArea: string
  urbanArea: string
}): Promise<number> {
  const transitRoute = await getTransitRoute(provincialArea, urbanArea)

  const user = {
    startArea: provincialArea,
    endArea: urbanArea,
  }

  const userId = await createUserWithTransitData(transitRoute, user)

  if (!userId) {
    throw new Error("A-7. 유저 정보를 가져오지 못했습니다.")
  }

  return userId
}

export default function useSaveRoute() {
  return useMutation<number, Error, { provincialArea: string, urbanArea: string }>({
    mutationFn: saveUserAndTransitData,
    onSuccess: (userId) => {
      setCookie("userId", String(userId))
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })
}
