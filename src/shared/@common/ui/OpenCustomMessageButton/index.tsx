"use client"

import Image from "next/image"

import GachaModal from "../GachaModal"

import { useModals } from "../../hooks/useModals"
import { cn } from "../../utils/twMerge"

interface IOpenMessageButtonProps {
  isSendMessage: boolean
  customMessage: string
}

const OpenCustomMessageButton = ({
  isSendMessage,
  customMessage,
}: IOpenMessageButtonProps) => {
  const { open } = useModals()

  return (
    <button
      className={cn(
        "absolute right-[24%] top-[2%] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#F8D169]",
        "mo:right-[8%] mo:top-[2%]",
      )}
      onClick={() =>
        open(GachaModal, {
          isSendMessage,
          customMessage,
        })
      }
    >
      <Image
        src="/icons/message.svg"
        alt="message-open-button"
        width={28}
        height={28}
      />
    </button>
  )
}

export default OpenCustomMessageButton
