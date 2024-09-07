"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useLayoutEffect } from "react"

import ROUTE_PATH from "@/shared/@common/constants/path"

const Splash = () => {
  const router = useRouter()

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      router.push(`${ROUTE_PATH.ADDRESS_SEARCH}`)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex h-dvh justify-center bg-[#6687FC]">
      <div className="h-[200px] pt-[250px]">
        <Image
          src="/gifts/splash.gif"
          width={200}
          height={200}
          alt="splash"
          priority
          unoptimized
        />
      </div>
    </div>
  )
}

export default Splash
