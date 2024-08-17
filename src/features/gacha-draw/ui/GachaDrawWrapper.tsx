"use client"

import { setCookie } from "cookies-next"
import { ReactNode, useEffect, useRef } from "react"

import GachaModal from "@/shared/@common/ui/GachaModal"

import { useModals } from "@/shared/@common/hooks/useModals"
import { CapsuleTheme } from "@/shared/@common/types/capsuleTheme.types"
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

  if (userId) setCookie("userId", userId)

  const { userData, isLoading } = useGetUserData()

  useEffect(() => {
    if (!hasOpened.current && !isLoading && userData) {
      open(GachaModal, {
        theme,
        isSendMessage: theme ? false : true,
        customMessage: userData.userMessage ?? "",
        gachaMessage: userData.gachaMessage ?? "",
      })
      hasOpened.current = true
    }
  }, [isLoading, userData, theme, open])

  return <>{children}</>
}

export default GachaDrawWrapper
