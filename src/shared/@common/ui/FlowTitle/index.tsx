import { cn } from "@/shared/@common/utils/twMerge"

import { LocalMindsTitleFont } from "@/shared/@common/assets/fonts"
import { ReactNode } from "react"

interface ITitleTextProps {
  children: ReactNode
}

const FlowTitle = ({ children }: ITitleTextProps) => {
  return (
    <h1
      className={cn(
        LocalMindsTitleFont.className,
        "whitespace-pre-line text-[24px] font-bold leading-xl tracking-tighter048 text-black",
      )}
    >
      {children}
    </h1>
  )
}

export default FlowTitle
