import { useQuery } from '@tanstack/react-query'

import { getTransitData } from '@/actions/user-actions'
import { ITransitRouteResponseProps } from '@/shared/@common/types/transitRoute.types'
import { useCookies } from 'next-client-cookies'

export const useGetTransitList = () => {
  const cookies = useCookies()
  const userId = cookies.get("userId")

  const { data: transitList, isLoading, isError } = useQuery<ITransitRouteResponseProps, Error>({
    queryKey: ["transitList", userId],
    queryFn: () =>  getTransitData(Number(userId)),
    enabled: !!userId,
    staleTime: 1000 * 60,
    gcTime: 1000 * 70,
    throwOnError: true
  })

  return { transitList, isLoading, isError }
}
