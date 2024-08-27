"use client"

import Image from "next/image"

import Button from "@/shared/@common/ui/Button"

import { useGachaAction } from "../../hooks/useGachaAction"
import { fixButtonStyle } from "../../styles/fixButton"

const GachaRouterButton = ({ isCreateGacha }: { isCreateGacha: boolean }) => {
  const { executeAction, gachaMessage, isCreating } = useGachaAction()

  return (
    <Button
      className={fixButtonStyle}
      theme={isCreateGacha ? "blue" : "gradient"}
      disabled={(isCreateGacha ? !gachaMessage : false) || isCreating}
      onClick={() => executeAction(isCreateGacha)}
    >
      {isCreateGacha && isCreating ? (
        <Image
          src="/gifts/spinner.gif"
          className="mx-auto"
          alt="loading-spinner"
          width={40}
          height={40}
          priority
          unoptimized
        />
      ) : isCreateGacha && !isCreating ? (
        "감사 가챠 등록하기"
      ) : (
        "RANDOM!"
      )}
    </Button>
  )
}

export default GachaRouterButton
