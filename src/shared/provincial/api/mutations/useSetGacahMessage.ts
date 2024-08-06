import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { updateGachaMessage } from '@/actions/user-actions';


async function postGachaMessage( gachaMessage : string ): Promise<boolean> {
  const idString = localStorage.getItem("id")

  if (!idString) {
    throw new Error('ID가 존재하지 않거나 유효하지 않습니다.');
  }

  const id = parseInt(idString, 10);

  if (isNaN(id)) {
    throw new Error('ID 변환 중 오류가 발생했습니다.');
  }

  const result = await updateGachaMessage({ id, gachaMessage });

  if (!result) {
    throw new Error('Failed to update gacha message');
  }

  return result;
}

export default function useSetGacahMessage(gachaMessage: string) {
  return useMutation<boolean, Error, void>({
    mutationFn: () => postGachaMessage(gachaMessage),
    onSuccess: (data) => {
      toast.success('가챠 메시지 등록에 성공했어요!');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
