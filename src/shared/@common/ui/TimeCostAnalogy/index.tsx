"use client"

import { useEffect, useState } from "react"

import FlowTitle from "../FlowTitle"

import { getAnalogyMessage } from "../../utils/getAnalogyMessage"
import { getLocalStorageItem } from "../../utils/localStorage"

const TimeCostAnalogy = () => {
  const [isTimeAnalogyText, setIsTimeAnalogyText] = useState<boolean>(false)

  const [timeCostAnalogyInfo, setTimeCostAnalogyInfo] = useState({
    payment: 0,
    hour: 0,
    minute: 0,
  })

  useEffect(() => {
    const storedInfo = getLocalStorageItem("timeCostAnalogyInfo", {
      payment: 0,
      hour: 0,
      minute: 0,
    })
    setTimeCostAnalogyInfo(storedInfo)
  }, [])

  const { payment, hour, minute } = timeCostAnalogyInfo

  return (
    <div className="px-[16px]">
      <FlowTitle>
        지방러님의 여정 {isTimeAnalogyText ? "시간" : "비용"}은
        <br />
        <span className="text-blue01">
          {getAnalogyMessage({ isTimeAnalogyText, payment, hour, minute })}
        </span>
        {isTimeAnalogyText ? "시간" : "값"}이에요!
      </FlowTitle>
      <button
        type="button"
        className="tracking-l text-sm font-medium text-[#A8A8A8] underline"
        onClick={() => setIsTimeAnalogyText((prevState) => !prevState)}
      >
        {isTimeAnalogyText ? "비용" : "시간"} 기준으로도 궁금해요!
      </button>
    </div>
  )
}

export default TimeCostAnalogy
