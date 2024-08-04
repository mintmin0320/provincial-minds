export type TransportationType = "지하철" | "시내버스" | "시외버스"
export type TransportationTheme = "blue" | "mint" | "yellow"

export interface ITransitRouteCardProps {
  transitRoute: {
    isBest?: boolean
    transportationList: TransportationType[]
    transferCount: number
    travelCost: number
    travelHours: string
    travelMinutes: string
  }
}

export type ExtendedTransitRouteProps = ITransitRouteCardProps & {
  destination: string
}

export type ExtendedTransitRouteCardProps = ITransitRouteCardProps & {
  isSelected: boolean
}
