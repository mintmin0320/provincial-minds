"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

import ROUTE_PATH from "@/shared/@common/constants/path"
import AreaSearchFieldGroup from "@/shared/@common/ui/AreaSearchFieldGroup"
import Button from "@/shared/@common/ui/Button"

import { IAreaProps } from "@/shared/@common/types/Area.type"
import useAreaSearch from "@/shared/provincial/api/mutations/useAreaSearch"

const AreaSearchFieldForm = () => {
  const router = useRouter()

  const { mutateAsync: saveArea } = useAreaSearch()

  const [areaState, setAreaState] = useState<IAreaProps>({
    urbanArea: null,
    provincialArea: null,
  })

  const handleSaveArea = async () => {
    const result = await saveArea(areaState)

    if (result) {
      router.push(`${ROUTE_PATH.TRANSIT_ROTE}?step=1`)
    }
  }

  const checkFormValidity = !areaState.urbanArea || !areaState.provincialArea

  return (
    <section>
      <AreaSearchFieldGroup
        areaState={areaState}
        setAreaState={setAreaState}
        type="change"
      />
      <Button
        type="submit"
        className="fixed bottom-0 left-1/2 mb-[10px] max-w-[calc(100%-32px)] -translate-x-1/2 transform"
        theme="blue"
        disabled={checkFormValidity}
        onClick={handleSaveArea}
      >
        최적 경로 알아보기
      </Button>
    </section>
  )
}

export default AreaSearchFieldForm
