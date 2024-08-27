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
    savedMessage,
    finalMessage,
    setSelectedIndex,
    setIsInputCustom,
    setCustomMessage,
    handleSelect,
    handleSaveMessage,
    handleKeyDown,
    handleClick,
    isSaving,
    isError,
    isPending,
  } = useMessages()

  if (!isError && (isPending || isSaving)) {
    return <Loading />
  } else {
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
}

export default MessageChoiceSection
