"use client"

import { useState } from "react"

import FlowTitle from "../FlowTitle"

import useTimeCostAnalogyInfo from "../../hooks/useTimeCostAnalogyInfo"
import { getAnalogyMessage } from "../../utils/getAnalogyMessage"

const TimeCostAnalogy = () => {
  const timeCostAnalogyInfo = useTimeCostAnalogyInfo()

  const [isTimeAnalogyText, setIsTimeAnalogyText] = useState(false)

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
