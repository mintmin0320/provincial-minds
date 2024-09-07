export const getTransportIcon = (transportation: string) => {
  switch (transportation) {
    case "지하철":
      return "/icons/subway.svg"
    case "시외버스":
      return "/icons/intercity-bus.svg"
    case "시내버스":
      return "/icons/city-bus.svg"
    default:
      return "/icons/city-bus.svg"
  }
}
