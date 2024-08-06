"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

import AreaSearchFieldGroup from "@/shared/@common/ui/AreaSearchFieldGroup"
import Button from "@/shared/@common/ui/Button"

import { createUserWithTransitData } from "@/actions/user-actions"
import ROUTE_PATH from "@/shared/@common/constants/path"
import { IAreaProps } from "@/shared/@common/types/Area.type"
import { getTransitRoute } from "@/shared/provincial/api/transitRouteService"

const AreaSearchFieldForm = () => {
  const router = useRouter()

  const [areaState, setAreaState] = useState<IAreaProps>({
    provincialArea: null,
    urbanArea: null,
  })

  const handleSaveArea = async () => {
    try {
      const transitRoute = await getTransitRoute(
        areaState.provincialArea,
        areaState.urbanArea,
      )

      const user = {
        startArea: areaState.provincialArea,
        endArea: areaState.urbanArea,
      }

      const userId = await createUserWithTransitData(transitRoute, user)

      if (userId) {
        localStorage.setItem("userId", String(userId))

        router.push(`${ROUTE_PATH.TRANSIT_ROTE}?step=1`)
      }
    } catch (error) {
      console.error(error)
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
