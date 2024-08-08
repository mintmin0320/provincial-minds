// 먼저 themes 객체를 정의합니다.
export const themes = {
  지하철: "blue",
  열차: "blue",
  시외버스: "mint",
  고속버스: "mint",
  기타: "mint",
  시내버스: "yellow",
  항공: "yellow",
} as const;

// 그런 다음 타입을 정의합니다.
export type TransportationType = keyof typeof themes;
export type TransportationThemeType = typeof themes[TransportationType];

// text only 스타일 정의
export const textThemeStyle: Record<TransportationThemeType, string> = {
  blue: "text-[#6687FC]",
  mint: "text-[#54D8C7]",
  yellow: "text-[#F3C64F]",
};

// text & background 스타일 정의
export const themeStyle: Record<TransportationThemeType, string> = {
  blue: "bg-[#E5EBFF] text-[#6687FC]",
  mint: "bg-[#DFF4F2] text-[#54D8C7]",
  yellow: "bg-[#FDF2D5] text-[#F3C64F]",
};

// getTransportationStyle 함수 정의
export const getTransportationStyle = (
  transportation: TransportationType,
  useBackground = false,
): string => {
  const theme = themes[transportation];
  return useBackground ? themeStyle[theme] : textThemeStyle[theme];
};
