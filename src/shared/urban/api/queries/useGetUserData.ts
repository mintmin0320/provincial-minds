import { useQuery } from '@tanstack/react-query';
import { getCookie } from 'cookies-next';

import { getUserData } from '@/actions/user-actions';
import { IUserProps } from '@/shared/@common/types/user.types';

export const useGetUserData = () => {
  const userId = getCookie("userId")
  
  const { data: userData, isLoading, isError } = useQuery<IUserProps, Error>({
    queryKey: ["user", userId],
    queryFn: () =>  getUserData(Number(userId)),
    staleTime: 1000 * 60,
    gcTime: 1000 * 70,
    enabled: !!userId, // userId가 있을 때만 쿼리 실행
  })

  return { userData, isLoading, isError }
}
