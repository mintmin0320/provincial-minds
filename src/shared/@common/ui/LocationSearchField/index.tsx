"use client"

import Image from "next/image"
import { ReactNode } from "react"

import DaumPostCodeModal from "@/features/address-search/ui/DaumPostCodeModal"
import { useModals } from "@/shared/@common/hooks/useModals"
import { cn } from "@/shared/@common/utils/twMerge"

interface ISearchFieldProps {
  address: string | null
  onLocationSearch?: (addressData: string) => void
  type: "view" | "change"
  children: ReactNode
}

const LocationSearchField = ({
  address,
  onLocationSearch,
  children,
  type,
}: ISearchFieldProps) => {
  const { open, close } = useModals()

  const handleAddressInput = ({ addressData }: { addressData: string }) => {
    if (onLocationSearch) {
      onLocationSearch(addressData)
      close()
    }
  }

  const openModal = () => {
    open(DaumPostCodeModal, { onAreaChange: handleAddressInput })
  }

  const isInputAddress = !address
    ? "bg-[#F4F4F4] disabled:bg-[#F4F4F4]"
    : "bg-[#F5F7FF] disabled:bg-[#F5F7FF]"

  const isChange = type === "change" ? "cursor-pointer" : "cursor-default"

  return (
    <div className="flex flex-col gap-[12px]">
      <label
        htmlFor={type}
        className="font-bold leading-[22.4px] tracking-[0.08px]"
      >
        {children}
      </label>
      <div
        className={cn(
          isInputAddress,
          isChange,
          "flex w-full gap-[16px] rounded-lg p-[16px] text-left",
        )}
        onClick={type === "change" ? openModal : undefined}
      >
        <input
          id={type}
          placeholder="출발지 입력하기"
          value={address ?? ""}
          className={cn(
            isInputAddress,
            isChange,
            "w-full font-normal text-black outline-none",
          )}
          readOnly
        />
        {type === "change" && (
          <Image
            src="/icons/search.svg"
            alt="검색 아이콘"
            width={24}
            height={24}
            priority
          />
        )}
      </div>
    </div>
  )
}

export default LocationSearchField
