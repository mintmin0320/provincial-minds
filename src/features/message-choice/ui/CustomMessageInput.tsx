"use client"

import { cn } from "@/shared/@common/utils/twMerge"
import { customStyle } from "../styles/custom.style"

interface ICustomMessageInputProps {
  customMessage: string
  setCustomMessage: (message: string) => void
}

const CustomMessageInput = ({
  customMessage,
  setCustomMessage,
}: ICustomMessageInputProps) => {
  return (
    <li className="rounded-[10px] border border-[#E8E8E8]">
      <div
        className={cn(
          "justify-between gap-[32px] border border-[#D0DAFE]",
          customStyle,
        )}
      >
        <input
          type="text"
          value={customMessage}
          onChange={(e) => setCustomMessage(e.target.value)}
          className="flex-grow font-semibold text-blue01 outline-none"
          placeholder="메시지를 입력하세요"
        />
      </div>
    </li>
  )
}

export default CustomMessageInput
