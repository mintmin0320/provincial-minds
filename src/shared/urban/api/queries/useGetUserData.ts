import { useQuery } from '@tanstack/react-query';

import { getUserData } from '@/actions/user';
import { IUserProps } from '@/shared/@common/types/user.types';
import { useCookies } from 'next-client-cookies';

export const useGetUserData = () => {
  const cookies = useCookies()
  const userId = cookies.get("userId")
  
  const { data: userData, isLoading, isError } = useQuery<IUserProps, Error>({
    queryKey: ["user", userId],
    queryFn: () =>  getUserData(Number(userId)),
    staleTime: 1000 * 60,
    gcTime: 1000 * 70,
    enabled: !!userId, // userId가 있을 때만 쿼리 실행
  })

  return { userData, isLoading, isError }
}
