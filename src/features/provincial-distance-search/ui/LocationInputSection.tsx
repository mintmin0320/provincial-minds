"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

import Button from "@/shared/@common/ui/Button"
import Loading from "@/shared/@common/ui/Loading"
import LocationInputGroup from "@/shared/@common/ui/LocationInputGroup"

import ROUTE_PATH from "@/shared/@common/constants/path"
import { fixButtonStyle } from "@/shared/@common/styles/fixButton"
import {
  ILocationProps,
  ILocationValidatedProps,
} from "@/shared/@common/types/area.types"
import useSaveRecommendedRoute from "@/shared/provincial/api/mutations/useSaveRecommendedRoute"

const LocationInputSection = () => {
  const router = useRouter()

  const {
    mutateAsync: saveRoute,
    isPending,
    isError,
  } = useSaveRecommendedRoute()

  const [locationState, setLocationState] = useState<ILocationProps>({
    origin: null,
    destination: null,
  })

  const [isSaving, setIsSaving] = useState<boolean>(false)

  const handleSaveLocation = async () => {
    if (!locationState.origin || !locationState.destination) {
      return
    }

    setIsSaving(true)
    const userId = await saveRoute(locationState as ILocationValidatedProps)

    if (userId) {
      router.push(ROUTE_PATH.TRANSIT_ROTE)
    }
  }

  if (!isError && (isPending || isSaving)) {
    return <Loading />
  } else {
    return (
      <section>
        <LocationInputGroup
          areaState={locationState}
          setAreaState={setLocationState}
          type="change"
        />
        <Button
          theme="blue"
          className={fixButtonStyle}
          disabled={!locationState.origin || !locationState.destination}
          onClick={handleSaveLocation}
        >
          최적 경로 알아보기
        </Button>
      </section>
    )
  }
}
export default LocationInputSection
