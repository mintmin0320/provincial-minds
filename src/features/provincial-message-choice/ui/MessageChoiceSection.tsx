"use client"

import { fixButtonStyle } from "@/shared/@common/styles/fixButton"
import { useMessages } from "../hooks/useMessages"

import Button from "@/shared/@common/ui/Button"
import Loading from "@/shared/@common/ui/Loading"
import MessageList from "./MessageList"

const MessageChoiceSection = () => {
  const {
    messages,
    selectedIndex,
    isInputCustom,
    customMessage,
    finalMessage,
    handleSelect,
    handleCustomMessageChange,
    handleSaveCustomMessage,
    handleKeyDown,
    handleClick,
    isProcessing,
  } = useMessages()

  return isProcessing ? (
    <Loading />
  ) : (
    <>
      <MessageList
        messages={messages}
        selectedIndex={selectedIndex}
        isInputCustom={isInputCustom}
        customMessage={customMessage}
        handleSelect={handleSelect}
        handleCustomMessageChange={handleCustomMessageChange}
        handleSaveCustomMessage={handleSaveCustomMessage}
        handleKeyDown={handleKeyDown}
      />
      <Button
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
