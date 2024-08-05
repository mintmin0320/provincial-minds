export const getThemeStyles = (theme: string | undefined) => {
  let textColorClass = "text-blue01"
  let backgroundColorClass = ""
  let text = "기본 메시지입니다."

  switch (theme) {
    case "yellow":
      textColorClass = "text-[#F8D169]"
      backgroundColorClass = "bg-[#FDF2D5]"
      text = "카페 음료 사주기"
      break
    case "orange":
      textColorClass = "text-[#FC9A7B]"
      backgroundColorClass = "bg-[#FDE6E1]"
      text = "영화 티켓 반띵"
      break
    case "mint":
      textColorClass = "text-[#5EC7B9]"
      backgroundColorClass = "bg-[#DFF4F2]"
      text = "민트 테마의 메시지입니다."
      break
    default:
      textColorClass = "text-blue01"
      backgroundColorClass = "bg-[#E5EBFF]"
      text = "기본 메시지입니다."
  }

  return { textColorClass, backgroundColorClass, text }
}
