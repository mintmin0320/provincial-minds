import { NextResponse } from 'next/server';

export async function POST(request:Request) {
  try {
    const { sx, sy, ex, ey } = await request.json();

    const url = `https://api.odsay.com/v1/api/searchPubTransPathT?SX=${sx}&SY=${sy}&EX=${ex}&EY=${ey}&apiKey=${process.env.NEXT_PUBLIC_ODSAY_API_KEY}`;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.send();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            try {
              const data = JSON.parse(xhr.responseText);
              resolve(NextResponse.json(data));
            } catch (error) {
              console.error('Failed to parse response JSON:', xhr.responseText);
              reject(NextResponse.json({ error: 'Failed to parse response JSON' }, { status: 500 }));
            }
          } else {
            console.error('API request failed with status:', xhr.status);
            reject(NextResponse.json({ error: 'Failed to fetch public transit route' }, { status: xhr.status }));
          }
        }
      };
    });

  } catch (error) {
    console.error('Server-side error:', error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
