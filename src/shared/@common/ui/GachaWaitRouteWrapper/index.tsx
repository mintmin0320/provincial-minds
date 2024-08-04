"use client"

import { useRouter } from "next/navigation"
import { ReactNode, useEffect } from "react"

interface IGachaWaitRouteWrapperProps {
  path: string
  children: ReactNode
}

const GachaWaitRouteWrapper = ({
  path,
  children,
}: IGachaWaitRouteWrapperProps) => {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(path)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return <>{children}</>
}

export default GachaWaitRouteWrapper
