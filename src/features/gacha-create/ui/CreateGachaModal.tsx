"use client"

import { useState } from "react"

import Image from "next/image"

import Button from "@/shared/@common/ui/Button"
import Modal from "@/shared/@common/ui/Modal"

import { useGachaStore } from "@/shared/hooks/useGachaStore"

const CreateGachaModal = () => {
  const [inputValue, setInputValue] = useState<string | null>(null)
  const setGachaMessage = useGachaStore((state) => state.setGachaMessage)

  const handleRegister = () => {
    if (inputValue) {
      setGachaMessage(inputValue)
    }
  }

  return (
    <Modal
      backgroundClassNames="bg-[#202020] bg-opacity-90"
      innerClassNames="bg-transparent flex flex-col items-center"
    >
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
          value={inputValue ?? ""}
          onChange={(e) => setInputValue(e.target.value)}
          maxLength={30}
          className="absolute left-1/2 top-[37.1%] h-[83px] w-[226px] -translate-x-1/2 -translate-y-1/2 transform rounded-[18px] border p-[20px] text-center text-[27px] font-bold tracking-[-0.54px] text-mint01 outline-none"
        />
      </div>
      <Button
        type="button"
        className="fixed bottom-0 left-1/2 mb-[10px] max-w-[calc(100%-32px)] -translate-x-1/2 transform"
        theme="mint"
        disabled={!inputValue}
        onClick={handleRegister}
      >
        가챠 추가하기
      </Button>
    </Modal>
  )
}

export default CreateGachaModal
