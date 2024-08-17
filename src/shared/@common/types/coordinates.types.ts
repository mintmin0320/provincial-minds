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

export interface ICoordinatesResponseProps {
  addresses: IAddressesProps[]
  errorMessage: string
  meta: {
    totalCount: number
    page: number
    count: number
  }
  status: string
}

export interface ICoordinatesProps {
  latitude: number
  longitude: number
}