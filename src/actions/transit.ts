'use server'

import { ITransitProps } from '@/shared/@common/types/transitRoute.types'
import { createServerSupabaseClient } from '@/shared/@common/utils/supabase/server'
import { Database } from '../../types_db'
import { UserRowInsert } from './user'

export type TransitRow = Database["public"]["Tables"]["transit"]["Row"]
export type TransitRowInsert = Database["public"]["Tables"]["transit"]["Insert"]

function handleError(error: any) {
  throw new Error(error.message)
}

/** 교통 수단 조회 */
export async function getTransitData(userId: number): Promise<{ userId: number, origin: string, destination: string, transits: ITransitProps[] }> {
  const supabase = await createServerSupabaseClient()

  const { data, error } = await supabase
    .from("user")
    .select(`
      id,
      origin,
      destination,
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
    origin: data[0].origin,
    destination: data[0].destination,
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
      origin: user.origin,
      destination: user.destination,
    })
    .select("id")
    .single();

  if (userInsertError || !userData?.id) {
    handleError(userInsertError || new Error("Failed to create user"));
    return null;
  }

  const userId = userData.id;
  const TRANSIT_ROUTE_COUNT = 5;
  const selectedPaths = transitRoute.path.slice(0, TRANSIT_ROUTE_COUNT);
  const minTime = Math.min(...selectedPaths.map((path: any) => path.info.totalTime));

  const transitData = selectedPaths.map((path: any) => ({
    bestRoute: path.info.totalTime === minTime,
    pathType: path.pathType,
    totalTime: path.info.totalTime,
    payment: path.info.payment,
    transitCount: path.info.transitCount || 0 + (path.info.busTransitCount + path.info.subwayTransitCount),
    userId,
  }));

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
