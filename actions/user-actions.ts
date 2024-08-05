'use server'

import { createServerSupabaseClient } from '@/shared/@common/utils/supabase/server';
import { Database } from '../types_db';

/** 각 순서대로 조회/삽입/업데이트 */
export type UserRow = Database["public"]["Tables"]["user"]["Row"];
export type UserRowInsert = Database["public"]["Tables"]["user"]["Insert"];
export type USerRowUpdate = Database["public"]["Tables"]["user"]["Update"];

function handleError(error: any) {
  console.log(error)
  throw new Error(error.message)
}

/** supabase는 data와 error를 반환 */
export async function getUsers(): Promise<UserRow[]> {
  const supabase = await createServerSupabaseClient()
  const {data, error} = await supabase.from('user').select('*')

  if(error){
    handleError(error)
  }

  return data ?? [] 
}

export async function createUser(user: UserRowInsert) {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase.from("user").insert({
    ...user,
    created_at: new Date().toISOString(),
  });

  if (error) {
    handleError(error);
  }

  return true;
}