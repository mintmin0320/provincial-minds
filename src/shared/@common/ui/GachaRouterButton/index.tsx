"use client"

import Button from "@/shared/@common/ui/Button"

import { useGachaAction } from "../../hooks/useGachaAction"
import { fixButtonStyle } from "../../styles/fixButton"

const GachaRouterButton = ({ isCreateGacha }: { isCreateGacha: boolean }) => {
  const { executeAction, gachaMessage } = useGachaAction()

  return (
    <Button
      className={fixButtonStyle}
      theme={isCreateGacha ? "blue" : "gradient"}
      disabled={isCreateGacha ? !gachaMessage : false}
      onClick={() => executeAction(isCreateGacha)}
    >
      {isCreateGacha ? "감사 가챠 등록하기" : "RANDOM!"}
    </Button>
  )
}

export default GachaRouterButton
