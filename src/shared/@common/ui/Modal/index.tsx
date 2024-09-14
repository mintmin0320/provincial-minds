import { ReactNode } from "react"

import { useModals } from "@/shared/@common/hooks/useModals"
import { cn } from "@/shared/@common/utils/twMerge"

interface ModalProps {
  children: ReactNode
  innerClassNames?: string
  backgroundClassNames?: string
}

const Modal = ({
  innerClassNames,
  backgroundClassNames,
  children,
}: ModalProps) => {
  const { close } = useModals()

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center",
        backgroundClassNames ? backgroundClassNames : "bg-black bg-opacity-50",
      )}
      onClick={close}
    >
      <div
        className={cn("relative w-full bg-white p-[16px]", innerClassNames)}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
