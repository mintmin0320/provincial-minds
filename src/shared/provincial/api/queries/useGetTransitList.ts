import { useQuery } from '@tanstack/react-query'

import { getTransitData } from '@/actions/transit'
import { ITransitRouteResponseProps } from '@/shared/@common/types/transitRoute.types'
import { useCookies } from 'next-client-cookies'

export const useGetTransitList = () => {
  const cookies = useCookies()
  const userId = cookies.get("userId")

  const { data: transitList, isLoading } = useQuery<ITransitRouteResponseProps, Error>({
    queryKey: ["transitList", userId],
    queryFn: () =>  getTransitData(Number(userId)),
    enabled: !!userId,
    staleTime: 1000 * 600,
    gcTime: 1000 * 700,
    throwOnError: true
  })

  return { transitList, isLoading }
}
