import Image from "next/image"

import { cn } from "@/shared/@common/utils/twMerge"
import { customStyle } from "../styles/custom.style"

import CustomMessageInput from "./CustomMessageInput"
import MessageItem from "./MessageItem"

interface IMessageListProps {
  messages: string[]
  selectedIndex: number | null
  isInputCustom: boolean
  customMessage: string
  setCustomMessage: (message: string) => void
  handleSelect: (index: number | null) => void
  handleCustomMessageButton: () => void
}

const MessageList = ({
  messages,
  selectedIndex,
  isInputCustom,
  customMessage,
  setCustomMessage,
  handleSelect,
  handleCustomMessageButton,
}: IMessageListProps) => {
  return (
    <ul className="mt-[28px] flex flex-col gap-[8px]">
      {messages.map((message, index) => (
        <MessageItem
          key={index}
          message={message}
          isSelected={selectedIndex === index}
          onClick={() => handleSelect(index)}
        />
      ))}
      <li className="rounded-[10px] border border-[#E8E8E8]">
        <button
          type="button"
          onClick={handleCustomMessageButton}
          className={cn("cursor-pointer gap-[8px]", customStyle, {
            "border-[#D0DAFE] font-bold text-blue01": isInputCustom,
            "border-[#E8E8E8] text-[#A8A8A8]": !isInputCustom,
          })}
        >
          <Image
            src={`/icons/plus_${isInputCustom ? "6687FC" : "A8A8A8"}.svg`}
            width={20}
            height={20}
            alt="plus icon"
            priority
          />
          메시지 직접 작성하기
        </button>
      </li>
      {isInputCustom && (
        <CustomMessageInput
          customMessage={customMessage}
          setCustomMessage={setCustomMessage}
        />
      )}
    </ul>
  )
}

export default MessageList
