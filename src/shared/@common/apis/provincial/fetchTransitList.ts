import { cookies } from 'next/headers'

import { ITransitRouteResponseProps } from '@/shared/@common/types/transitRoute.types'

export async function fetchTransitList(): Promise<ITransitRouteResponseProps> {
  const userId = cookies().get("userId")?.value
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/transit?userId=${userId}`)
  
  const data = await res.json()

  return data
}
