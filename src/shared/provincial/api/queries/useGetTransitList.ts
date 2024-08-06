import { useQuery } from '@tanstack/react-query';

import { getTransitData } from '@/actions/user-actions';

export const useGetTransitList = (userId: number) => {
  const { data: transitList, isFetching } = useQuery({
    queryKey: ["transitList", userId],
    queryFn: () =>  getTransitData(userId),
    staleTime: 1000 * 60,
    enabled: !!userId, // userId가 있을 때만 쿼리 실행
  })

  return { transitList, isFetching }
}
