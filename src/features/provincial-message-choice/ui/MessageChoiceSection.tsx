"use client"

import { useRouter } from "next/navigation"

import ROUTE_PATH from "@/shared/@common/constants/path"
import { fixButtonStyle } from "@/shared/@common/styles/fixButton"
import useSetUserMessage from "@/shared/provincial/api/mutations/useSetUserMessage"
import { useMessageStore } from "../hooks/useMessageStore"

import Button from "@/shared/@common/ui/Button"
import MessageList from "./MessageList"

const MessageChoiceSection = () => {
  const router = useRouter()

  const {
    messages,
    selectedIndex,
    isInputCustom,
    customMessage,
    savedMessage,
    finalMessage,
    setSelectedIndex,
    setIsInputCustom,
    setCustomMessage,
    handleSelect,
    handleSaveMessage,
    handleKeyDown,
  } = useMessageStore()

  const { mutateAsync: saveUserMessage } = useSetUserMessage()

  const handleClick = async () => {
    if (finalMessage) {
      const result = await saveUserMessage({
        userMessage: finalMessage ?? "",
      })

      if (result) router.push(ROUTE_PATH.GACHA_SHARE)
    }
  }

  return (
    <>
      <MessageList
        messages={messages}
        selectedIndex={selectedIndex}
        isInputCustom={isInputCustom}
        savedMessage={savedMessage}
        customMessage={customMessage}
        handleSelect={handleSelect}
        setSelectedIndex={setSelectedIndex}
        setIsInputCustom={setIsInputCustom}
        setCustomMessage={setCustomMessage}
        handleSaveMessage={handleSaveMessage}
        handleKeyDown={handleKeyDown}
      />
      <Button
        type="submit"
        className={fixButtonStyle}
        theme="blue"
        disabled={!finalMessage}
        onClick={handleClick}
      >
        메시지 선택
      </Button>
    </>
  )
}

export default MessageChoiceSection
