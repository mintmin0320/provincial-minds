import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { updateGachaMessage } from '@/actions/user-actions';

async function postGachaMessage(userId: number, gachaMessage: string): Promise<boolean> {
  const result = await updateGachaMessage({ id: userId, gachaMessage });

  if (!result) {
    throw new Error('Failed to update gacha message');
  }

  return result;
}

export default function useSetGachaMessage() {
  return useMutation<boolean, Error, { userId: number; gachaMessage: string }>({
    mutationFn: ({ userId, gachaMessage }) => postGachaMessage(userId, gachaMessage),
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
