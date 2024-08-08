/** 좌표 -> 교통 수단 정보 (ODSAY API) */

/** https://lab.odsay.com/guide/releaseReference#searchPubTransPathT */

export async function fetchPublicTransitRoute(sx: number, sy: number, ex: number, ey: number): Promise<any> {
  const url =
    "https://api.odsay.com/v1/api/searchPubTransPathT?SX=" +
    sx +
    "&SY=" +
    sy +
    "&EX=" +
    ex +
    "&EY=" +
    ey +
    "&SearchType=0" +
    `&apiKey=${process.env.NEXT_PUBLIC_ODSAY_API_KEY}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch public transit route');
    }

    const { result } = await response.json();
    return result;
  } catch (error) {
    throw new Error(`Failed to fetch public transit route: ${error}`);
  }
}
