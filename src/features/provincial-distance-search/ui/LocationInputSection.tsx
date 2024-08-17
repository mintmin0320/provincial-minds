"use client"

import Button from "@/shared/@common/ui/Button"
import Loading from "@/shared/@common/ui/Loading"
import LocationInputGroup from "@/shared/@common/ui/LocationInputGroup"

import { fixButtonStyle } from "@/shared/@common/styles/fixButton"
import useLocations from "../hooks/useLocations"

const LocationInputSection = () => {
  const {
    locationState,
    setLocationState,
    isSaving,
    saveLocation,
    isPending,
    isError,
    canSave,
  } = useLocations()

  if (!isError && (isPending || isSaving)) {
    return <Loading />
  } else {
    return (
      <section>
        <LocationInputGroup
          locationState={locationState}
          setLocationState={setLocationState}
          type="change"
        />
        <Button
          theme="blue"
          className={fixButtonStyle}
          disabled={!canSave}
          onClick={saveLocation}
        >
          최적 경로 알아보기
        </Button>
      </section>
    )
  }
}
export default LocationInputSection
