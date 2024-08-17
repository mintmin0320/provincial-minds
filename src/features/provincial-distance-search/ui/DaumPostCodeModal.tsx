"use client"

import Image from "next/image"

import DaumPostcodeWrapper from "@/shared/@common/ui/DaumPostcode"
import Modal from "@/shared/@common/ui/Modal"
import PortalWrapper from "@/shared/@common/ui/Potal"

interface IDaumPostCodeProps {
  onAreaChange: (area: { address: string }) => void
}

const DaumPostCodeModal = ({ onAreaChange }: IDaumPostCodeProps) => {
  return (
    <PortalWrapper title="search-address">
      <Modal innerClassNames="mt-auto mb-0 rounded-t-xl animate-slide-up">
        <button
          type="button"
          className="flex h-[25px] w-full items-start justify-center"
        >
          <Image
            src="/icons/slider-button.svg"
            width={46}
            height={6}
            alt="slider-button"
          />
        </button>
        <DaumPostcodeWrapper onComplete={onAreaChange} />
      </Modal>
    </PortalWrapper>
  )
}

export default DaumPostCodeModal
