"use client"

import Image from "next/image"

import { useModals } from "@/shared/hooks/useModals"
import { truncateText } from "@/shared/utils/truncateText"
import { useGachaStore } from "../../../../features/gacha-create/hooks/useGachaStore"

import CreateGachaModal from "../../../../features/gacha-create/ui/CreateGachaModal"

const CreateGachaButton = () => {
  const { open } = useModals()
  const gachaMessage = useGachaStore((state) => state.gachaMessage)

  const openModal = () => {
    open(CreateGachaModal)
  }

  return (
    <button
      type="button"
      className="absolute left-[51%] top-[40%] -translate-x-[50%] -translate-y-[20px] transform"
      onClick={openModal}
    >
      {gachaMessage ? (
        <div className="h-[42px] w-[114px] rotate-[6.1deg] content-center bg-white text-center text-sm font-bold tracking-[-0.28px] text-mint01">
          {truncateText(gachaMessage, 8)}
        </div>
      ) : (
        <Image
          src="/icons/capsule-label.svg"
          width={130}
          height={46}
          alt="capsule-mint-label"
        />
      )}
    </button>
  )
}

export default CreateGachaButton
