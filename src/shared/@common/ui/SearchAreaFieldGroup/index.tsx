import { cn } from "@/shared/@common/utils/twMerge"

import { IAreaProps } from "@/shared/types/area.type"
import SearchAreaField from "../SearchAreaField"

interface ISearchAreaFieldGroupProps {
  areaState: IAreaProps
  setAreaState?: React.Dispatch<React.SetStateAction<IAreaProps>>
  type: "view" | "change"
}

const SearchAreaFieldGroup = ({
  areaState,
  setAreaState,
  type,
}: ISearchAreaFieldGroupProps) => {
  const handleAreaChange = (key: keyof IAreaProps) => (newValue: string) => {
    if (type === "change" && setAreaState) {
      setAreaState((prevState) => ({ ...prevState, [key]: newValue }))
    }
  }

  return (
    <div
      className={cn("flex flex-col gap-[36px]", {
        "mt-[152px]": type === "change",
        "mt-[24px]": type === "view",
      })}
    >
      <SearchAreaField
        area={areaState.urbanArea}
        onAreaChange={handleAreaChange("urbanArea")}
        type={type}
      >
        <span className="text-blue01">지방러</span>는 여기서 출발해요
      </SearchAreaField>
      <SearchAreaField
        area={areaState.provincialArea}
        onAreaChange={handleAreaChange("provincialArea")}
        type={type}
      >
        <span className="text-blue01">서울러</span>를 만나는 곳은 여기예요
      </SearchAreaField>
    </div>
  )
}

export default SearchAreaFieldGroup
