/** 주소 -> 좌표 변환 */

interface IAddressElementsProps {
  code: string;
  longName: string;
  shortName: string;
  types: string[];
}

interface IAddressesProps {
  addressElements: IAddressElementsProps[];
  distance: number;
  englishAddress: string;
  jibunAddress: string;
  roadAddress: string;
  x: string;
  y: string;
}

interface ICoordinatesResponseProps {
  addresses: IAddressesProps[];
  errorMessage: string;
  meta: {
    totalCount: number;
    page: number;
    count: number;
  };
  status: string;
}

interface ICoordinates {
  latitude: number | null;
  longitude: number | null;
}

export const fetchCoordinates = async (
  address: string | null
): Promise<ICoordinates | null> => {
  try {
    const response = await fetch("/api/geocode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ address }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch coordinates");
    }

    const { addresses }: ICoordinatesResponseProps = await response.json();

    if (addresses.length === 0) {
      return null;
    }

    const longitude = Number(addresses[0].x);
    const latitude = Number(addresses[0].y);

    return { latitude, longitude };
  } catch (error) {
    console.error("Error:", error);

    return null; 
  }
};
