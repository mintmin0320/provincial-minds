/** 주소 -> 좌표 변환 */

import { ICoordinates } from '@/shared/@common/types/saveRoute.types'

interface IAddressElementsProps {
  code: string
  longName: string
  shortName: string
  types: string[]
}

interface IAddressesProps {
  addressElements: IAddressElementsProps[]
  distance: number
  englishAddress: string
  jibunAddress: string
  roadAddress: string
  x: string
  y: string
}

interface ICoordinatesResponseProps {
  addresses: IAddressesProps[]
  errorMessage: string
  meta: {
    totalCount: number
    page: number
    count: number
  }
  status: string
}

export const fetchCoordinates = async (
  address: string
): Promise<ICoordinates | null> => {
  try {
    const response = await fetch("/api/geocode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ address }),
    })

    if (!response.ok) {
      throw new Error("A-1. 주소를 좌표로 변환 중 오류가 발생했습니다.")
    }

    const { addresses }: ICoordinatesResponseProps = await response.json()

    if (addresses[0].x === null || addresses[0].y === null) {
      throw new Error ("A-2. 좌표 값이 없습니다.(null)")
    }

    const longitude = Number(addresses[0].x)
    const latitude = Number(addresses[0].y)

    return { latitude, longitude }
  } catch (error) {
    console.error("A-3. Error:", error)

    return null;
  }
};
