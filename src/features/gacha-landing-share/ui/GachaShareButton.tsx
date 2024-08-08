"use client"

import Button from "@/shared/@common/ui/Button"

import { fixButtonStyle } from "@/shared/@common/styles/fixButton"
import useCopyLink from "../../../shared/@common/hooks/useCopyLink"

const GachaShareButton = () => {
  const { handleCopyButtonClick } = useCopyLink()

  return (
    <Button
      type="button"
      className={fixButtonStyle}
      theme="blue"
      onClick={handleCopyButtonClick}
    >
      가챠 공유하기
    </Button>
  )
}

export default GachaShareButton
