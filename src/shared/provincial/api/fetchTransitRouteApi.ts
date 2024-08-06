/** 좌표 -> 교통 수단 정보 (ODSAY API) */

/** https://lab.odsay.com/guide/releaseReference#searchPubTransPathT */

export async function fetchPublicTransitRoute(sx: number, sy: number, ex: number, ey: number): Promise<any> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
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

    xhr.open("GET", url, true);
    xhr.send();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const { result } = JSON.parse(xhr.responseText);
          resolve(result);
        } else {
          reject(new Error('Failed to fetch public transit route'));
        }
      }
    };
  });
}
