import { useState } from "react"

const messages = [
  "‘영화 티켓 반띵’으로 좀 더 행복하게 서울 갈지도?",
  "서울가는데, 디저트는 사주면 안 잡아 먹짘ㅋㅋ",
  "먼 길 올라가는데, 교통비 n빵 어떰?",
  "서울의 점심 값은 내가, 저녁 값은 네가!",
]

export const useMessageStore = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isInputCustom, setIsInputCustom] = useState<boolean>(false)
  const [customMessage, setCustomMessage] = useState<string>("")
  const [savedMessage, setSavedMessage] = useState<string | null>(null)
  const [finalMessage, setFinalMessage] = useState<string | null>(null)

  const handleSelect = (index: number | null, message?: string) => {
    if (index !== null && index >= messages.length) {
      setIsInputCustom(true)
      setCustomMessage(message || "")
    } else {
      setSelectedIndex(index)
      setFinalMessage(message || "")
      setIsInputCustom(false)
    }
  }

  const handleSaveMessage = () => {
    if (customMessage.trim() !== "") {
      setSavedMessage(customMessage)
      setFinalMessage(customMessage)
      setIsInputCustom(false)
      setSelectedIndex(messages.length)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSaveMessage()
    }
  }

  return {
    messages,
    selectedIndex,
    isInputCustom,
    customMessage,
    savedMessage,
    finalMessage,
    setSelectedIndex,
    setIsInputCustom,
    setCustomMessage,
    setSavedMessage,
    setFinalMessage,
    handleSelect,
    handleSaveMessage,
    handleKeyDown,
  }
}
