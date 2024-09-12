"use client"

import Image from "next/image"
import { useRef } from "react"
import toast from "react-hot-toast"

import Button from "@/shared/@common/ui/Button"
import Modal from "@/shared/@common/ui/Modal"
import PortalWrapper from "@/shared/@common/ui/Potal"

import { useGachaStore } from "@/shared/@common/hooks/useGachaStore"
import { useModals } from "@/shared/@common/hooks/useModals"

const CreateGachaModal = () => {
  const { close } = useModals()
  const inputRef = useRef<HTMLInputElement>(null)
  const setGachaMessage = useGachaStore((state) => state.setGachaMessage)

  const handleRegister = () => {
    const inputValue = inputRef.current?.value

    if (!inputValue || inputValue?.trim() === "") {
      toast.error("메시지를 생성해 주세요!")
    } else {
      setGachaMessage(inputValue)
      close()
    }
  }

  return (
    <PortalWrapper title="create-gacha">
      <Modal
        backgroundClassNames="bg-[#202020] bg-opacity-90"
        innerClassNames="bg-transparent flex flex-col items-center"
      >
        <div className="w-[735px] text-end">
          <button onClick={close}>
            <Image
              src="/icons/close-modal.svg"
              width={30}
              height={30}
              alt="close-modal"
              priority
            />
          </button>
        </div>
        <p className="mb-[42px] text-center text-xl font-[700] tracking-[-0.04px] text-white">
          받고 싶은 가챠를 추가해 주세요.
        </p>
        <div
          className="relative h-[360px] w-[360px]"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src="/icons/capsule-modal.svg"
            width={375}
            height={812}
            alt="capsule-label"
            className="cursor-pointer"
            priority
          />
          <input
            type="text"
            ref={inputRef}
            maxLength={30}
            className="absolute left-1/2 top-[37.1%] h-[83px] w-[226px] -translate-x-1/2 -translate-y-1/2 transform rounded-[18px] border p-[20px] text-center text-[27px] font-bold tracking-[-0.54px] text-mint01 outline-none"
          />
        </div>
        <Button
          type="button"
          className="fixed bottom-0 left-1/2 mb-[10px] max-w-[calc(100%-32px)] -translate-x-1/2 transform"
          theme="mint"
          onClick={handleRegister}
        >
          가챠 추가하기
        </Button>
      </Modal>
    </PortalWrapper>
  )
}

export default CreateGachaModal
