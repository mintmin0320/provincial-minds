import DaumPostcode from "react-daum-postcode"

interface PropsType {
  onComplete: (data: any) => void
}

const DaumPostcodeWrapper = ({ onComplete }: PropsType) => {
  const handleComplete = (data: any) => {
    let fullAddress = data.address
    let extraAddress = ""

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : ""
    }

    onComplete({
      ...data,
      address: fullAddress,
    })
  }

  return <DaumPostcode onComplete={handleComplete} />
}

export default DaumPostcodeWrapper
