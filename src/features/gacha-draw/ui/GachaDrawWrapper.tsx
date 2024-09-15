"use client"

import { setCookie } from "cookies-next"
import { ReactNode, useEffect, useRef } from "react"

import GachaModal from "@/shared/@common/ui/GachaModal"

import useGetSearchParam from "@/shared/@common/hooks/useGetSearchParams"
import { useModals } from "@/shared/@common/hooks/useModals"
import { CapsuleTheme } from "@/shared/@common/types/capsuleTheme.types"
import { setLocalStorageItem } from "@/shared/@common/utils/localStorage"
import { useGetUserData } from "@/shared/urban/api/queries/useGetUserData"

interface IGachaDrawWrapperProps {
  userId?: string
  theme?: CapsuleTheme
  children: ReactNode
}

const GachaDrawWrapper = ({
  userId,
  theme,
  children,
}: IGachaDrawWrapperProps) => {
  const hasOpened = useRef(false)

  const { open } = useModals()
  const payment = useGetSearchParam("payment")
  const minute = useGetSearchParam("minute")
  const hour = useGetSearchParam("hour")

  if (userId) setCookie("userId", userId)

  const { userData, isLoading } = useGetUserData()

  useEffect(() => {
    if (payment && minute && hour) {
      const timeCostAnalogyInfo = {
        payment: Number(payment),
        minute: Number(minute),
        hour: Number(hour),
      }

      setLocalStorageItem("timeCostAnalogyInfo", timeCostAnalogyInfo)
    }

    if (!hasOpened.current && !isLoading && userData) {
      open(GachaModal, {
        theme,
        isSendMessage: theme ? false : true,
        customMessage: userData.userMessage ?? "",
        gachaMessage: userData.gachaMessage ?? "",
      })
      hasOpened.current = true
    }
  }, [isLoading, userData, theme, open, payment, minute, hour])

  return <>{children}</>
}

export default GachaDrawWrapper
