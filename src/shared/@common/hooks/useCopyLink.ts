import toast from "react-hot-toast"

import ROUTE_PATH from "@/shared/@common/constants/path"
import { copyURL } from "@/shared/@common/utils/copyURL"

const useCopyLink = () => {
  const handleCopyButtonClick = () => {
    copyURL({
      title: "가챠 공유하기",
      url: `${ROUTE_PATH.DEV_URL}${ROUTE_PATH.GACHA_DRAW}`,
      onCompleted: () => {
        toast.success("친구에게 링크를 공해 보세요!", {
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
