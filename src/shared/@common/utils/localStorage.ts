interface ITimeCostAnalogyInfo {
  payment: number
  hour: number
  minute: number
}


function setLocalStorageItem (key: string, value: any) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    throw new Error('로컬스토리지에 저장하는 과정에서 문제가 발생했습니다.')
  }
}

function getLocalStorageItem (key: string, defaultValue: ITimeCostAnalogyInfo)  {
  try {
    const item = localStorage.getItem(key)
  
    return item ? JSON.parse(item) : defaultValue
  } catch (error) {
    return defaultValue
  }
}

export { getLocalStorageItem, setLocalStorageItem }

