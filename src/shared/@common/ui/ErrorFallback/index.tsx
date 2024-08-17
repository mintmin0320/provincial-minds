"use client"

import { useCookies } from "next-client-cookies"
import { useRouter } from "next/navigation"

import ROUTE_PATH from "@/shared/@common/constants/path"

interface IErrorProps {
  error: Error | null
  resetErrorBoundary: () => void
}

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: IErrorProps) {
  const router = useRouter()
  const cookies = useCookies()

  const handleReStartClick = () => {
    cookies.remove("userId")

    router.push(ROUTE_PATH.DISTANCE_SEARCH)
  }

  return (
    <div className="flex h-dvh flex-col items-center gap-[50px] pt-[210px]">
      <p className="text-[22px] font-[700px]">문제가 발생했어요!</p>
      <div className="flex gap-[20px]">
        <button
          className="rounded-[4px] border bg-black p-[12px] text-white"
          onClick={handleReStartClick}
        >
          메인으로
        </button>
        <button
          className="rounded-[4px] border bg-[#EDEDED] p-[12px]"
          onClick={resetErrorBoundary}
        >
          새로고침
        </button>
      </div>
    </div>
  )
}
