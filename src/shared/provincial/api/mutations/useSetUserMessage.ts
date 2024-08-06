import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { updateUserMessage } from '@/actions/user-actions';


async function postUserMessage( userId: number,userMessage : string ): Promise<boolean> {
  const result = await updateUserMessage({ id: userId, userMessage });

  if (!result) {
    throw new Error('Failed to update user message');
  }

  return result;
}

export default function useSetUserMessage() {
  return useMutation<boolean, Error, { userId: number; userMessage: string}>({
    mutationFn: ({userId, userMessage}) => postUserMessage(userId,userMessage),
    onSuccess: (data) => {
      toast.success('한마디 메시지 등록에 성공했어요!');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
