"use client"

import { cn } from "@/shared/@common/utils/twMerge"

import { ILocationProps } from "../../types/location.types"
import LocationSearchField from "../LocationSearchField"

interface IAreaSearchFieldGroupProps {
  address: ILocationProps
  setLocationState?: React.Dispatch<React.SetStateAction<ILocationProps>>
  type: "view" | "change"
}

const LocationInputGroup = ({
  address,
  setLocationState,
  type,
}: IAreaSearchFieldGroupProps) => {
  const handleLocationSearch =
    (key: keyof ILocationProps) => (newValue: string) => {
      if (type === "change" && setLocationState) {
        setLocationState((prevState) => ({ ...prevState, [key]: newValue }))
      }
    }

  return (
    <div
      className={cn("flex flex-col gap-[36px]", {
        "mt-[152px]": type === "change",
        "mt-[24px]": type === "view",
      })}
    >
      <LocationSearchField
        address={address.origin}
        onLocationSearch={handleLocationSearch("origin")}
        type={type}
      >
        <span className="text-blue01">지방러</span>는 여기서 출발해요
      </LocationSearchField>
      <LocationSearchField
        address={address.destination}
        onLocationSearch={handleLocationSearch("destination")}
        type={type}
      >
        <span className="text-blue01">서울러</span>를 만나는 곳은 여기예요
      </LocationSearchField>
    </div>
  )
}

export default LocationInputGroup
