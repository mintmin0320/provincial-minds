import { TransportationTheme, TransportationType } from '../types/transitRoute.types'


export const themes: Record<TransportationType, TransportationTheme> = {
  지하철: "blue",
  열차: "blue",
  시외버스: "mint",
  고속버스: "mint",
  기타: "mint",
  시내버스: "yellow",
  항공: "yellow"
}

// text only
export const textThemeStyle: Record<TransportationTheme, string> = {
  blue: "text-[#6687FC]",
  mint: "text-[#54D8C7]",
  yellow: "text-[#F3C64F]",
}

// text & background
export const themeStyle: Record<TransportationTheme, string> = {
  blue: "bg-[#E5EBFF] text-[#6687FC]",
  mint: "bg-[#DFF4F2] text-[#54D8C7]",
  yellow: "bg-[#FDF2D5] text-[#F3C64F]",
}

export const getTransportationStyle = (
  transportation: TransportationType,
  useBackground = false,
) => {
  const theme = themes[transportation]

  return useBackground ? themeStyle[theme] : textThemeStyle[theme]
}