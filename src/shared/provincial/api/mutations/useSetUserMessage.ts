import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { updateUserMessage } from '@/actions/user-actions';


async function postUserMessage( userMessage : string ): Promise<boolean> {
  const idString = localStorage.getItem("id")

  if (!idString) {
    throw new Error('ID가 존재하지 않거나 유효하지 않습니다.');
  }

  const id = parseInt(idString, 10);

  if (isNaN(id)) {
    throw new Error('ID 변환 중 오류가 발생했습니다.');
  }

  const result = await updateUserMessage({ id, userMessage });

  if (!result) {
    throw new Error('Failed to update user message');
  }

  return result;
}

export default function useSetUserMessage(userMessage: string) {
  return useMutation<boolean, Error, void>({
    mutationFn: () => postUserMessage(userMessage),
    onSuccess: (data) => {
      toast.success('한마디 메시지 등록에 성공했어요!');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
