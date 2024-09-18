"use client"

import { fixButtonStyle } from "@/shared/@common/styles/fixButton"

import Button from "@/shared/@common/ui/Button"
import Loading from "@/shared/@common/ui/Loading"
import { useMessage } from "../hooks/useMessage"
import MessageList from "./MessageList"

const MessageChoiceSection = () => {
  const {
    messages,
    selectedIndex,
    isInputCustom,
    customMessage,
    setCustomMessage,
    finalMessage,
    handleSelect,
    handleCustomMessageButton,
    handleClick,
    isProcessing,
  } = useMessage()

  return isProcessing ? (
    <Loading />
  ) : (
    <>
      <MessageList
        messages={messages}
        selectedIndex={selectedIndex}
        isInputCustom={isInputCustom}
        customMessage={customMessage}
        setCustomMessage={setCustomMessage}
        handleSelect={handleSelect}
        handleCustomMessageButton={handleCustomMessageButton}
      />
      <Button
        className={fixButtonStyle}
        theme="blue"
        disabled={!finalMessage.trim()}
        onClick={handleClick}
      >
        메시지 선택
      </Button>
    </>
  )
}

export default MessageChoiceSection
