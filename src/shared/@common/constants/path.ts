/** 페이지 경로
 *
 *
 */

const ROUTE_PATH = {
  ROOT: "/",
  ADDRESS_SEARCH: "/address-search",
  TRANSIT_ROTE: "/transit-route-search",
  TRANSIT_ROTE_RESULT: "/transit-route-result",
  GACHA_CREATE: "/gacha-create",
  GACHA_CREATE_WAIT: "/gacha-create-wait",
  MESSAGE_CHOICE: "/message-choice",
  GACHA_SHARE: "/gacha-share",
  GACHA_DRAW: "/gacha-draw",
  GACHA_DRAW_LANDING: "/gacha-draw-shupple",
} as const

export default ROUTE_PATH
