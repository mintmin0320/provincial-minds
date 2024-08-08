export type TransportationType = "지하철" | "시내버스" | "시외버스" | "열차" | "고속버스" | "항공" | "기타"
export type TransportationTheme = "blue" | "mint" | "yellow"


export interface ITransitProps {
  id: number;
  bestRoute: boolean;
  pathType: number;
  totalTime: number;
  transitCount: number;
  payment: number | null;
}

export interface ITransitRouteResponseProps {
  transits: ITransitProps[];
  startArea: string;
  endArea: string;
  userId: number;
}

export type ExtendedTransitRouteProps = Pick<ITransitProps, 'totalTime' | 'payment'> & {
  destination: string;
  transportationList: TransportationType[];
}

export type ExtendedTransitRouteCardProps = ITransitProps & {
  isSelected: boolean;
}
