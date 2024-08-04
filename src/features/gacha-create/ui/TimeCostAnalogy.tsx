"use client"

import { useState } from "react"

import FlowTitle from "@/shared/ui/FlowTitle"

const TimeCostAnalogy = () => {
  const [timeAnalogyText, setTimeAnalogy] = useState<boolean>(false)

  return (
    <div className="px-[16px]">
      <FlowTitle>
        지방러님의 여정
        {timeAnalogyText ? "시간" : "비용"}은
        <br />
        <span className="text-blue01">
          {timeAnalogyText
            ? "어벤져스: 엔드게임을 한 편 볼 수 있는"
            : "탕후루 13개"}
        </span>{" "}
        {timeAnalogyText ? "시간" : "값"}이에요!
      </FlowTitle>
      <button
        type="button"
        className="tracking-l text-sm font-medium text-[#A8A8A8] underline"
        onClick={() => setTimeAnalogy((prevState) => !prevState)}
      >
        {timeAnalogyText ? "시간" : "비용"} 기준으로도 궁금해요!
      </button>
    </div>
  )
}

export default TimeCostAnalogy
