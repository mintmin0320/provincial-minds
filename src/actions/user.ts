'use server'

import { createServerSupabaseClient } from '@/shared/@common/utils/supabase/server'
import { Database } from '../../types_db'

export type UserRow = Database["public"]["Tables"]["user"]["Row"]
export type UserRowInsert = Database["public"]["Tables"]["user"]["Insert"]
export type UserRowUpdate = Database["public"]["Tables"]["user"]["Update"]

function handleError(error: any) {
  throw new Error(error.message)
}

/** user 테이블 데이터 조회 */
export async function getUserData(userId: number): Promise<UserRow> {
  const supabase = await createServerSupabaseClient()

  const { data, error } = await supabase
    .from("user")
    .select("*")
    .eq('id', userId)
    .single()

  if (error) {
    handleError(error)
  }

  if (!data) {
    throw new Error("제공된 userId를 가진 사용자를 찾을 수 없습니다.")
  }

  return data
}

/** 가챠(뽑기) 메시지 업데이트 */
export async function updateGachaMessage(user: UserRowUpdate): Promise<boolean> {
  const supabase = await createServerSupabaseClient()

  if (user.id === undefined) {
    throw new Error('User ID is required for update.')
  }

  const { data, error } = await supabase
    .from('user')
    .update({
      gachaMessage: user.gachaMessage,
    })
    .eq('id', user.id)

  if (error) {
    handleError(error)
  }

  return true
}

/** 지방러 한마디 메시지 업데이트 */
export async function updateUserMessage(user: UserRowUpdate): Promise<boolean> {
  const supabase = await createServerSupabaseClient()

  if (user.id === undefined) {
    throw new Error('User ID is required for update.')
  }

  const { data, error } = await supabase
    .from('user')
    .update({
      userMessage: user.userMessage,
    })
    .eq('id', user.id)

  if (error) {
    handleError(error)
  }

  return true
}
