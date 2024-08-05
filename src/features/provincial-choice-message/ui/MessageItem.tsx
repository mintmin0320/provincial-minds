import { cn } from "@/shared/@common/utils/twMerge"

interface IMessageItemProps {
  message: string
  isSelected: boolean
  onClick: () => void
}

const MessageItem = ({ message, isSelected, onClick }: IMessageItemProps) => {
  return (
    <li className="rounded-[10px] border border-[#E8E8E8]">
      <button
        type="button"
        onClick={onClick}
        className={cn(
          "w-full cursor-pointer rounded-[10px] px-[16px] py-[20px] text-left tracking-[-0.08px]",
          {
            "border-[2px] border-[#D0DAFE] bg-[#F5F7FF] font-bold text-blue01":
              isSelected,
            "text-[#202020]": !isSelected,
          },
        )}
      >
        {message}
      </button>
    </li>
  )
}

export default MessageItem
