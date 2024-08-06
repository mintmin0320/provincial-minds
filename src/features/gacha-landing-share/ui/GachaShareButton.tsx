"use client"

import Button from "@/shared/@common/ui/Button"

import useGetSearchParam from "@/shared/@common/hooks/useGetSearchParams"
import useCopyLink from "../../../shared/@common/hooks/useCopyLink"

const GachaShareButton = () => {
  const userId = useGetSearchParam("id") || ""

  const { handleCopyButtonClick } = useCopyLink(userId)

  return (
    <Button
      type="button"
      className="fixed bottom-0 left-1/2 mb-[10px] max-w-[calc(100%-32px)] -translate-x-1/2 transform"
      theme="blue"
      onClick={handleCopyButtonClick}
    >
      가챠 공유하기
    </Button>
  )
}

export default GachaShareButton
