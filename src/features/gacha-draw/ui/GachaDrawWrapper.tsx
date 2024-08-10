"use client"

import { ReactNode, useEffect, useRef } from "react"

import { useModals } from "@/shared/@common/hooks/useModals"

import useGetSearchParam from "@/shared/@common/hooks/useGetSearchParams"
import { useGetUserData } from "@/shared/urban/api/queries/useGetUserData"
import { setCookie } from "cookies-next"
import GachaModal from "../../../shared/@common/ui/GachaModal"

interface IGachaDrawWrapperProps {
  children: ReactNode
}

const GachaDrawWrapper = ({ children }: IGachaDrawWrapperProps) => {
  const hasOpened = useRef(false)

  const { open } = useModals()

  const themeParams = useGetSearchParam("theme") ?? ""
  const userId = useGetSearchParam("userId") ?? ""

  if (userId) setCookie("userId", userId)

  const { userData, isLoading } = useGetUserData()

  /** useRef를 사용하여 첫 번째 렌더링을 건너뛰기 */
  useEffect(() => {
    if (!hasOpened.current && !isLoading) {
      open(GachaModal, {
        theme: themeParams,
        isSendMessage: themeParams ? false : true,
        customMessage: userData?.userMessage ?? "",
        gachaMessage: userData?.gachaMessage ?? "",
      })
      hasOpened.current = true
    }
  }, [isLoading, userData, themeParams, open])

  return <>{children}</>
}

export default GachaDrawWrapper
