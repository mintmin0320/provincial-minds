interface IAnalogyMessageTypes {
  isTimeAnalogyText: boolean
  hour: number
  minute: number
  payment: number
}

const getTimeAnalogyMessage = (hour: number, minute: number) => {
  if (hour >= 10) {
    return `${hour}시간이면 거의 비행기로 미국을 갈 수 있는`
  } else if (hour >= 5) {
    return `${hour}시간이면 1일 평균 근로`
  } else if (hour >= 2) {
    return `${hour}시간이면 어벤져스 엔드게임 한 편 볼 수 있는`
  } else if (hour >= 1) {
    return `${hour}시간이면 축구 한 경기를 볼 수 있는`
  } else if (hour === 0 && minute > 0) {
    return `${minute}분이면 간단한 유튜브 동영상을 볼 수 있는`
  } else if (hour === 0 && minute === 0) {
    return `0분이면 컵라면 + 삼각김밥 먹을 수 있는`
  } else if (minute > 0) {
    return `${minute}분이면 간단한 유튜브 쇼츠를 볼 수 있는`
  }
}


const getCostAnalogyMessage = (payment: number) => {
  if (payment >= 30000) {
    return `${payment.toLocaleString()}원이면 탕후루 30개`
  } else if (payment >= 23000) {
    return `${payment.toLocaleString()}원이면 황금올리브치킨 한 마리`
  } else if (payment >= 15000) {
    return `${payment.toLocaleString()}원이면 영화관 티켓 + 팝콘 + 콜라`
  } else if (payment >= 10000) {
    return `${payment.toLocaleString()}원이면 넷플릭스 결제 비용`
  } else if (payment <= 1000) {
    return `${payment.toLocaleString()}원이면 불량식품도 못 사는`
  } else if (payment <= 3000) {
    return `${payment.toLocaleString()}원이면 간단한 간식`
  } else if (payment <= 6000) {
    return `${payment.toLocaleString()}원이면 카페 음료 한 잔`
  } else if (payment === 0) {
    return `0원이면 그냥 서로 더치페이 해도 될`
  } else {
    return `${payment.toLocaleString()}원이면 최소 숙박비는 지원해 줘야 될`
  }
}


export const getAnalogyMessage = ({
  isTimeAnalogyText,
  hour,
  minute,
  payment,
}: IAnalogyMessageTypes) => {
  return isTimeAnalogyText
    ? getTimeAnalogyMessage(hour, minute)
    : getCostAnalogyMessage(payment)
}
