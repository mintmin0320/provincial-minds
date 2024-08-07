import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { sx, sy, ex, ey } = await request.json();

    const url = `https://api.odsay.com/v1/api/searchPubTransPathT?SX=${sx}&SY=${sy}&EX=${ex}&EY=${ey}&apiKey=${process.env.NEXT_PUBLIC_ODSAY_API_KEY}`;

    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      console.error('API request failed with status:', response.status);
      return NextResponse.json(
        { error: 'Failed to fetch public transit route' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('Server-side error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
