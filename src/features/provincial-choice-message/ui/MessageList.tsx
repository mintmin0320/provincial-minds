"use client"

import Image from "next/image"

import { cn } from "@/shared/@common/utils/twMerge"
import { useMessageStore } from "../hooks/useMessageStore"
import { customStyle } from "../styles/custom.style"

import ROUTE_PATH from "@/shared/@common/constants/path"
import Button from "@/shared/@common/ui/Button"
import useSetUserMessage from "@/shared/provincial/api/mutations/useSetUserMessage"
import { useRouter } from "next/navigation"
import CustomMessageInput from "./CustomMessageInput"
import MessageItem from "./MessageItem"

const MessageList = () => {
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

  const { mutateAsync: saveUserMessage } = useSetUserMessage(finalMessage ?? "")

  const handleClick = async () => {
    if (finalMessage) {
      const result = await saveUserMessage()

      if (result) {
        router.push(ROUTE_PATH.GACHA_SHARE)
      }
    }
  }

  return (
    <>
      <ul className="mt-[28px] flex flex-col gap-[8px]">
        {messages.map((message, index) => (
          <MessageItem
            key={index}
            message={message}
            isSelected={selectedIndex === index}
            onClick={() => handleSelect(index, message)}
          />
        ))}
        {savedMessage && !isInputCustom && (
          <MessageItem
            key={messages.length}
            message={savedMessage}
            isSelected={selectedIndex === messages.length}
            onClick={() => handleSelect(messages.length, savedMessage)}
          />
        )}
        {!savedMessage && !isInputCustom && (
          <li className="rounded-[10px] border border-[#E8E8E8]">
            <button
              type="button"
              onClick={() => {
                setSelectedIndex(null)
                setIsInputCustom(true)
              }}
              className={cn("cursor-pointer gap-[8px]", customStyle, {
                "border-[#D0DAFE] font-bold text-blue01":
                  selectedIndex === null,
                "border-[#E8E8E8] text-[#A8A8A8]": selectedIndex !== null,
              })}
            >
              <Image
                src={`/icons/plus_${
                  selectedIndex === null ? "6687FC" : "A8A8A8"
                }.svg`}
                width={20}
                height={20}
                alt="plus icon"
              />
              메시지 직접 작성하기
            </button>
          </li>
        )}
        {isInputCustom && (
          <CustomMessageInput
            customMessage={customMessage}
            setCustomMessage={setCustomMessage}
            handleKeyDown={handleKeyDown}
            handleSaveMessage={handleSaveMessage}
          />
        )}
      </ul>
      <Button
        type="submit"
        className="fixed bottom-0 left-1/2 mb-[10px] max-w-[calc(100%-32px)] -translate-x-1/2 transform"
        theme="blue"
        disabled={!finalMessage}
        onClick={handleClick}
      >
        메시지 선택
      </Button>
    </>
  )
}

export default MessageList
