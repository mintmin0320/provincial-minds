"use client"

import { ReactNode, useEffect, useRef } from "react"

import { useModals } from "@/shared/@common/hooks/useModals"

import useGetSearchParam from "@/shared/@common/hooks/useGetSearchParams"
import GachaModal from "../../../shared/@common/ui/GachaModal"

interface IGachaDrawWrapperProps {
  children: ReactNode
}

const GachaDrawWrapper = ({ children }: IGachaDrawWrapperProps) => {
  const hasOpened = useRef(false)

  const { open } = useModals()

  const themeParams = useGetSearchParam("theme") ?? undefined

  /** useRef를 사용하여 첫 번째 렌더링을 건너뛰기 */
  useEffect(() => {
    if (!hasOpened.current) {
      open(GachaModal, {
        theme: themeParams,
        isSendMessage: themeParams ? false : true,
        customMessage:
          "교통비 n빵교통비 n빵교통비 n빵교통비 n빵교통비 n빵교통비 n빵",
        gachaMessage: "이건 가챠메시지",
      })
      hasOpened.current = true
    }
  }, [])

  return <>{children}</>
}

export default GachaDrawWrapper
