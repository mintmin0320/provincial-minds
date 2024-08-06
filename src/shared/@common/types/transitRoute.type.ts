export type TransportationType = "지하철" | "시내버스" | "시외버스" | "열차" | "고속버스" | "항공" | "기타"
export type TransportationTheme = "blue" | "mint" | "yellow"

export interface ITransitProps {
  id: number | null
  bestRoute: boolean | null
  pathType: number | null
  totalTime: number | null
  subwayBusTransitCount: number | null
  transitCount: number | null
  payment: number | null
}

export interface ITransitRouteCardProps {
  transits: ITransitProps[]
}


export type ExtendedTransitRouteProps = ITransitRouteCardProps & {
  destination: string
}

export type ExtendedTransitRouteCardProps = ITransitProps & {
  isSelected: boolean
}
