"use client"

import ROUTE_PATH from "@/shared/@common/constants/path"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const Splash = () => {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(`${ROUTE_PATH.DISTANCE_SEARCH}`)
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
          unoptimized
        />
      </div>
    </div>
  )
}

export default Splash
