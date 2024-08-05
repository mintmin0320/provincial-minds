import Image from "next/image"

import { cn } from "@/shared/@common/utils/twMerge"
import { customStyle } from "../styles/custom.style"

interface ICustomMessageInputProps {
  customMessage: string
  setCustomMessage: (message: string) => void
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
  handleSaveMessage: () => void
}

const CustomMessageInput = ({
  customMessage,
  setCustomMessage,
  handleKeyDown,
  handleSaveMessage,
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
          onKeyDown={handleKeyDown}
          className="flex-grow font-semibold text-blue01 outline-none"
        />
        <button type="button" onClick={handleSaveMessage}>
          <Image
            src="/icons/write_6687FC.svg"
            width={20}
            height={20}
            alt="edit message"
          />
        </button>
      </div>
    </li>
  )
}

export default CustomMessageInput
