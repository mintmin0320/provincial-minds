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

const AreaSearchFieldSection = () => {
  const router = useRouter()

  const { mutateAsync: saveRoute, isPending, isError } = useSaveRoute()

  const [areaState, setAreaState] = useState<IAreaProps>({
    provincialArea: null,
    urbanArea: null,
  })

  const [isSaving, setIsSaving] = useState<boolean>(false)

  const handleSaveArea = async () => {
    if (!areaState.provincialArea || !areaState.urbanArea) {
      return
    }

    setIsSaving(true)
    const userId = await saveRoute({
      provincialArea: areaState.provincialArea,
      urbanArea: areaState.urbanArea,
    })

    if (userId) {
      router.push(ROUTE_PATH.TRANSIT_ROTE)
    }
  }

  if (!isError && (isPending || isSaving)) {
    return <Loading />
  } else {
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
          disabled={!areaState.urbanArea || !areaState.provincialArea}
          onClick={handleSaveArea}
        >
          최적 경로 알아보기
        </Button>
      </section>
    )
  }
}
export default AreaSearchFieldSection
