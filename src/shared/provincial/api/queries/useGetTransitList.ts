import { useQuery } from '@tanstack/react-query'
import { getCookie } from 'cookies-next'

import { getTransitData } from '@/actions/user-actions'
import { ITransitRouteResponseProps } from '@/shared/@common/types/transitRoute.types'

export const useGetTransitList = () => {
  const userId = getCookie("userId")

  const { data: transitList, isLoading, isError } = useQuery<ITransitRouteResponseProps, Error>({
    queryKey: ["transitList", userId],
    queryFn: () =>  getTransitData(Number(userId)),
    enabled: !!userId, // userId가 있을 때만 쿼리 실행
    staleTime: 1000 * 60,
    gcTime: 1000 * 70
  })

  return { transitList, isLoading, isError }
}
