import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { updateUserMessage } from '@/actions/user';
import { useCookies } from 'next-client-cookies';


async function postUserMessage( userId: number,userMessage : string ): Promise<boolean> {
  const result = await updateUserMessage({ id: userId, userMessage });

  if (!result) {
    throw new Error('한마디 메시지 업데이트에 실패했습니다.');
  }

  return result;
}

export default function useSetUserMessage() {
  const cookies = useCookies()
  const userId = cookies.get("userId")

  return useMutation<boolean, Error, { userMessage: string}>({
    mutationFn: ({userMessage}) => postUserMessage(Number(userId),userMessage),
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
