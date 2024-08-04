"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

import Button from "@/shared/@common/ui/Button"
import SearchAreaFieldGroup from "@/shared/@common/ui/SearchAreaFieldGroup"
import ROUTE_PATH from "@/shared/constants/path"

interface IAreaProps {
  urbanArea: string | null
  provincialArea: string | null
}

const SearchAreaFieldForm = () => {
  const router = useRouter()

  const [areaState, setAreaState] = useState<IAreaProps>({
    urbanArea: null,
    provincialArea: null,
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log("Form submitted")
    router.push(`${ROUTE_PATH.TRANSIT_ROTE}?step=1`)
  }

  const checkFormValidity = !areaState.urbanArea || !areaState.provincialArea

  return (
    <form onSubmit={handleSubmit}>
      <SearchAreaFieldGroup
        areaState={areaState}
        setAreaState={setAreaState}
        type="change"
      />
      <Button
        type="submit"
        className="fixed bottom-0 left-1/2 mb-[10px] max-w-[calc(100%-32px)] -translate-x-1/2 transform"
        theme="blue"
        disabled={checkFormValidity}
      >
        최적 경로 알아보기
      </Button>
    </form>
  )
}

export default SearchAreaFieldForm
