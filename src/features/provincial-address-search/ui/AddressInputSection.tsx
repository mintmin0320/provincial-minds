"use client"

import Button from "@/shared/@common/ui/Button"
import Loading from "@/shared/@common/ui/Loading"
import LocationInputGroup from "@/shared/@common/ui/LocationInputGroup"

import { fixButtonStyle } from "@/shared/@common/styles/fixButton"
import useLocations from "../hooks/useLocations"

const AddressInputSection = () => {
  const {
    locationState,
    setLocationState,
    saveLocation,
    isProcessing,
    canSave,
  } = useLocations()

  return isProcessing ? (
    <Loading />
  ) : (
    <section>
      <LocationInputGroup
        address={locationState}
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

export default AddressInputSection
