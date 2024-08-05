import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { createUser } from '../../../../../actions/user-actions'

import { IAreaProps } from '@/shared/@common/types/Area.type'

async function postAreaSearch(areaState: IAreaProps): Promise<number> {
  const result = await createUser(areaState)

  if(!result) {
    throw new Error
  }

  return result
}

export default function useAreaSearch() {
  return useMutation<number, Error, IAreaProps>({
    mutationFn: postAreaSearch,
    onSuccess: (data) => {
      toast.success("저장에 성공했어요!")
      
      localStorage.setItem("id", String(data))
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })
}
