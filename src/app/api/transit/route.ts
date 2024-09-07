import { NextResponse } from 'next/server'

import { getTransitData } from '@/actions/transit'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const userId = searchParams.get('userId')

  if (!userId) {
    return NextResponse.json({ message: '유저 아이디를 찾을 수 없습니다.' }, { status: 400 })
  }

  try {
    const transitList = await getTransitData(Number(userId))

    return NextResponse.json(transitList)
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching transit data' }, { status: 500 })
  }
}
