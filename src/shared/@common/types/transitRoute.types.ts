export type TransportationType = 
  | "지하철"
  | "시내버스"
  | "시외버스"
  | "열차"
  | "고속버스"
  | "항공"
  | "기타";

export type TransportationThemeType = "blue" | "mint" | "yellow";

export const themes: Record<TransportationType, TransportationThemeType> = {
  지하철: "blue",
  열차: "blue",
  시외버스: "mint",
  고속버스: "mint",
  기타: "mint",
  시내버스: "yellow",
  항공: "yellow",
};


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
