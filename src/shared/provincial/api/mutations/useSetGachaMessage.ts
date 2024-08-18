import { useMutation } from '@tanstack/react-query'
import { useCookies } from 'next-client-cookies'
import toast from 'react-hot-toast'

import { updateGachaMessage } from '@/actions/user'

async function postGachaMessage(userId: number, gachaMessage: string): Promise<boolean> {
  const result = await updateGachaMessage({ id: userId, gachaMessage })

  if (!result) {
    throw new Error('Failed to update gacha message')
  }

  return result
}

export default function useSetGachaMessage() {
  const cookies = useCookies()
  const userId = cookies.get("userId")

  return useMutation<boolean, Error, { gachaMessage: string }>({
    mutationFn: ({ gachaMessage }) => postGachaMessage(Number(userId), gachaMessage),
    onError: (error) => {
      toast.error(error.message)
    },
  })
}
