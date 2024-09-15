import toast from "react-hot-toast"

import ROUTE_PATH from "@/shared/@common/constants/path"
import { copyURL } from "@/shared/@common/utils/copyURL"
import { useCookies } from 'next-client-cookies'
import { getLocalStorageItem } from '../utils/localStorage'

const useCopyLink = () => {
  const cookies = useCookies()
  const userId = cookies.get("userId")

  const timeCostAnalogyInfo = getLocalStorageItem("timeCostAnalogyInfo", {
    payment: 0,
    hour: 0,
    minute: 0,
  })

  const { payment, minute, hour } = timeCostAnalogyInfo

  const handleCopyButtonClick = () => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}${ROUTE_PATH.GACHA_DRAW}?userId=${userId}&payment=${payment}&minute=${minute}&hour=${hour}`

    copyURL({
      title: "가챠 공유하기",
      url,
      onCompleted: () => {
        toast.success("친구에게 링크를 공유해 보세요!", {
          duration: 8000,
        })
      },
      onError: () => {
        toast.error("링크 공유에 실패했어요.", {
          duration: 8000,
        })
      },
    })
  }

  return {
    handleCopyButtonClick,
  }
}

export default useCopyLink
