
import { updateGachaMessage } from '@/actions/user'

export async function createGachaMessage(userId: number, gachaMessage: string): Promise<boolean> {
  const result = await updateGachaMessage({ id: userId, gachaMessage })

  if (!result) {
    throw new Error('가챠 메시지 생성에 실패했습니다.')
  }

  return result
}
