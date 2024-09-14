"use client"

import Image from "next/image"

import { useGachaStore } from "@/shared/@common/hooks/useGachaStore"
import { useModals } from "@/shared/@common/hooks/useModals"
import { truncateText } from "@/shared/@common/utils/truncateText"

import CreateGachaModal from "@/features/gacha-create/ui/CreateGachaModal"

const CreateGachaButton = () => {
  const { open } = useModals()
  const gachaMessage = useGachaStore((state) => state.gachaMessage)

  return (
    <button
      type="button"
      className="absolute left-[51%] top-[40%] -translate-x-[50%] -translate-y-[20px] transform"
      onClick={() => open(CreateGachaModal)}
    >
      {gachaMessage ? (
        <div className="h-[42px] w-[114px] rotate-[6.1deg] content-center bg-white text-center text-sm font-bold tracking-[-0.28px] text-mint01">
          {truncateText(gachaMessage, 8)}
        </div>
      ) : (
        <Image
          src="/icons/capsule-label.svg"
          width={118}
          height={53}
          alt="capsule-mint-label"
          priority
        />
      )}
    </button>
  )
}

export default CreateGachaButton
