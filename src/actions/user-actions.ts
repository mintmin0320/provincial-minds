'use server'

import { ITransitProps } from '@/shared/@common/types/transitRoute.types'
import { createServerSupabaseClient } from '@/shared/@common/utils/supabase/server'
import { Database } from '../../types_db'

export type UserRow = Database["public"]["Tables"]["user"]["Row"]
export type UserRowInsert = Database["public"]["Tables"]["user"]["Insert"]
export type UserRowUpdate = Database["public"]["Tables"]["user"]["Update"]
export type TransitRow = Database["public"]["Tables"]["transit"]["Row"]
export type TransitRowInsert = Database["public"]["Tables"]["transit"]["Insert"]
export type TransitRowUpdate = Database["public"]["Tables"]["transit"]["Update"]

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
    .single()  // 단일 행 반환

  if (error) {
    handleError(error)
  }

  if (!data) {
    throw new Error("제공된 userId를 가진 사용자를 찾을 수 없습니다.")
  }

  return data
}

/** 교통 수단 조회 */
export async function getTransitData(userId: number): Promise<{ userId: number, startArea: string, endArea: string, transits: ITransitProps[] }> {
  const supabase = await createServerSupabaseClient()

  const { data, error } = await supabase
    .from("user")
    .select(`
      id,
      startArea,
      endArea,
      transits:transit(*)
    `)
    .eq('id', userId)

  if (error) {
    handleError(error)
  }

  if (!data) {
    throw new Error ("B-1. 교통 수단 목록을 가져오지 못했습니다.")
  }

  const result = {
    userId: data[0].id,
    startArea: data[0].startArea,
    endArea: data[0].endArea,
    transits: data[0].transits
  }

  return result
}

/** 출발, 도착 지역 검색 (교통 수단 검색) */
export async function createUserWithTransitData(transitRoute: any, user: UserRowInsert): Promise<number | null> {
  const supabase = await createServerSupabaseClient();

  const { data: userData, error: userInsertError } = await supabase
    .from("user")
    .insert({
      created_at: new Date().toISOString(),
      startArea: user.startArea,
      endArea: user.endArea,
    })
    .select("id")
    .single();  // 단일 행을 반환

  if (userInsertError || !userData?.id) {
    handleError(userInsertError || new Error("Failed to create user"));

    return null;
  }

  const userId = userData.id;

  // 10개의 경로 중에서 처음 5개의 경로만 선택
  const TRANSIT_ROUTE_COUNT = 5;
  const selectedPaths = transitRoute.path.slice(0, TRANSIT_ROUTE_COUNT);

  // 가장 적은 시간을 가진 경로 찾기
  const minTime = Math.min(...selectedPaths.map((path: any) => path.info.totalTime));

  const transitData = selectedPaths.map((path: any) => {
    return {
      bestRoute: path.info.totalTime === minTime,
      pathType: path.pathType,
      totalTime: path.info.totalTime,
      payment: path.info.payment,
      transitCount: path.info.transitCount,
      userId,
    };
  });

  const { data: transitInsertData, error: transitInsertError } = await supabase
  .from("transit")
  .insert(transitData as TransitRowInsert[])
  .select("id");

if (transitInsertError || !transitInsertData) {
  handleError(transitInsertError || new Error("Failed to insert transit data"));
  return null;
}

return userId;
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
