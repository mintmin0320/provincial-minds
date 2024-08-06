"use client"

import Button from "@/shared/@common/ui/Button"
import Modal from "@/shared/@common/ui/Modal"

import { LocalMindsTitleFont } from "@/shared/@common/assets/fonts"
import { useModals } from "@/shared/@common/hooks/useModals"
import { getThemeStyles } from "@/shared/@common/utils/getThemeStyles"
import { cn } from "@/shared/@common/utils/twMerge"
import { useEffect, useState } from "react"

interface IGachaModalProps {
  theme?: string | undefined
  isSendMessage: boolean
  customMessage?: string
  gachaMessage?: string
}

const GachaModal = ({
  theme,
  isSendMessage,
  customMessage,
  gachaMessage,
}: IGachaModalProps) => {
  const { close } = useModals()
  const { textColorClass, backgroundColorClass, text } = getThemeStyles(theme)

  const [displayText, setDisplayText] = useState<string | null>(null)

  useEffect(() => {
    if (!displayText) {
      const message = isSendMessage
        ? customMessage
        : theme === "mint"
          ? gachaMessage
          : text

      setDisplayText(message ?? "Loading...")
    }
  }, [isSendMessage, customMessage, gachaMessage, theme, text, displayText])

  if (!displayText) return null
  console.log("1. " + customMessage, gachaMessage)
  console.log("2. " + displayText)

  return (
    <Modal
      backgroundClassNames="bg-[#202020] bg-opacity-90"
      innerClassNames={cn(
        "bg-transparent rounded-[20px] flex flex-col items-center w-[343px] h-[214px] gap-[16px] py-[24px] px-[48px]",
        backgroundColorClass,
      )}
    >
      <p className={cn("font-bold tracking-[-0.32px]", textColorClass)}>
        {isSendMessage ? "지방러 친구가 남긴 한마디 ✍🏻" : "🎊 가챠 결과 🎊"}
      </p>
      <div className="flex flex-1 items-center justify-center">
        <p
          className={cn(
            "text-center text-2xl font-bold leading-xl tracking-[-0.48px] text-[#202020]",
            LocalMindsTitleFont.className,
          )}
        >
          {displayText}
        </p>
      </div>
      <Button
        type="button"
        className="fixed bottom-0 left-1/2 mb-[10px] max-w-[calc(100%-32px)] -translate-x-1/2 transform"
        theme="blue"
        onClick={close}
      >
        확인
      </Button>
    </Modal>
  )
}

export default GachaModal
