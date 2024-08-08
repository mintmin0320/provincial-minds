import { TransportationType } from '@/shared/@common/types/transitRoute.types';

export const getTransportationList = (pathType: number): TransportationType[] => {
  switch (pathType) {
    case 1:
      return ["지하철"];
    case 2:
      return ["시내버스"];
    case 3:
      return ["시내버스", "지하철"];
    case 11:
      return ["열차"];
    case 12:
      return ["고속버스", "시외버스"];
    case 13:
      return ["항공"];
    case 20:
      return ["열차", "고속버스"];
    default:
      return ["기타"];
  }
};
