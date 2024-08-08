"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

import AreaSearchFieldGroup from "@/shared/@common/ui/AreaSearchFieldGroup"
import Button from "@/shared/@common/ui/Button"
import Loading from "@/shared/@common/ui/Loading"

import ROUTE_PATH from "@/shared/@common/constants/path"
import { fixButtonStyle } from "@/shared/@common/styles/fixButton"
import { IAreaProps } from "@/shared/@common/types/area.types"
import useSaveRoute from "@/shared/provincial/api/mutations/useSaveRoute"

const AreaSearchFieldForm = () => {
  const router = useRouter()

  const { mutateAsync: saveRoute, isPending } = useSaveRoute()

  const [areaState, setAreaState] = useState<IAreaProps>({
    provincialArea: null,
    urbanArea: null,
  })

  const handleSaveArea = async () => {
    if (!areaState.provincialArea || !areaState.urbanArea) {
      return
    }

    const userId = await saveRoute({
      provincialArea: areaState.provincialArea,
      urbanArea: areaState.urbanArea,
    })

    if (userId) {
      router.push(ROUTE_PATH.TRANSIT_ROTE)
    }
  }

  const checkFormValidity = !areaState.urbanArea || !areaState.provincialArea

  if (isPending) {
    return <Loading />
  }

  return (
    <section>
      <AreaSearchFieldGroup
        areaState={areaState}
        setAreaState={setAreaState}
        type="change"
      />
      <Button
        className={fixButtonStyle}
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
