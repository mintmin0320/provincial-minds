import { ReactNode } from "react"

import { useModals } from "@/shared/hooks/useModals"
import { cn } from "@/shared/utils/twMerge"

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
        "fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50",
        backgroundClassNames,
      )}
      onClick={close}
    >
      <div className={cn("w-full bg-white p-[16px]", innerClassNames)}>
        {children}
      </div>
    </div>
  )
}

export default Modal
