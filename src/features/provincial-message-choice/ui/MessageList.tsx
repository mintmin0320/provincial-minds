import Image from "next/image"

import { cn } from "@/shared/@common/utils/twMerge"
import { customStyle } from "../styles/custom.style"

import CustomMessageInput from "./CustomMessageInput"
import MessageItem from "./MessageItem"

interface MessageListProps {
  messages: string[]
  selectedIndex: number | null
  isInputCustom: boolean
  savedMessage: string | null
  customMessage: string
  handleSelect: (index: number | null, message?: string) => void
  setSelectedIndex: (index: number | null) => void
  setIsInputCustom: (isCustom: boolean) => void
  setCustomMessage: (message: string) => void
  handleSaveMessage: () => void
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const MessageList = ({
  messages,
  selectedIndex,
  isInputCustom,
  savedMessage,
  customMessage,
  handleSelect,
  setSelectedIndex,
  setIsInputCustom,
  setCustomMessage,
  handleSaveMessage,
  handleKeyDown,
}: MessageListProps) => {
  return (
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
              "border-[#D0DAFE] font-bold text-blue01": selectedIndex === null,
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
              priority
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
  )
}

export default MessageList
