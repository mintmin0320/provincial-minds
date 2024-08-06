import { useQuery } from '@tanstack/react-query';

import { getUserData } from '@/actions/user-actions';

export const useGetUserData = (userId: number) => {
  const { data: userData, isLoading } = useQuery({
    queryKey: ["user", userId],
    queryFn: () =>  getUserData(userId),
    staleTime: 1000 * 60,
    enabled: !!userId, // userId가 있을 때만 쿼리 실행
  })

  return { userData, isLoading }
}
