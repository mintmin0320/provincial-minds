import { useEffect, useState } from 'react'

import { getLocalStorageItem } from '../utils/localStorage'

const useTimeCostAnalogyInfo = () => {
  const [timeCostAnalogyInfo, setTimeCostAnalogyInfo] = useState({
    payment: 0,
    hour: 0,
    minute: 0,
  })

  /** 로컬 스토리지에서 값을 가져오는 함수 */ 
  const loadTimeCostInfo = () => {
    const storedInfo = getLocalStorageItem("timeCostAnalogyInfo", {
      payment: 0,
      hour: 0,
      minute: 0,
    })
    setTimeCostAnalogyInfo(storedInfo)
  }

  useEffect(() => {
    loadTimeCostInfo() // 초기값 로드

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "timeCostAnalogyInfo") {
        loadTimeCostInfo() // 스토리지 값 변경 시 다시 로드
      }
    }
    window.addEventListener("storage", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [])

  return timeCostAnalogyInfo
}

export default useTimeCostAnalogyInfo