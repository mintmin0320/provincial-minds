import { useRouter } from 'next/navigation'
import { useState } from "react"

import ROUTE_PATH from '@/shared/@common/constants/path'
import useSetUserMessage from '@/shared/provincial/api/mutations/useSetUserMessage'

const messages = [
  "‘영화 티켓 반띵’으로 좀 더 행복하게 서울 갈지도?",
  "서울가는데, 디저트는 사주면 안 잡아 먹짘ㅋㅋ",
  "먼 길 올라가는데, 교통비 n빵 어떰?",
  "서울의 점심 값은 내가, 저녁 값은 네가!",
]

export const useMessages = () => {
  const router = useRouter()

  const { mutateAsync: saveUserMessage, isPending, isError } = useSetUserMessage()

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isInputCustom, setIsInputCustom] = useState<boolean>(false)
  const [customMessage, setCustomMessage] = useState<string>("")
  const [savedMessage, setSavedMessage] = useState<string | null>(null)
  const [finalMessage, setFinalMessage] = useState<string | null>(null)

  const [isSaving, setIsSaving] = useState<boolean>(false)

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

  const handleClick = async () => {
    if (finalMessage) {
      setIsSaving(true)
      
      const result = await saveUserMessage({
        userMessage: finalMessage ?? "",
      })

      if (result) router.push(ROUTE_PATH.GACHA_SHARE)
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
    handleClick,
    isSaving,
    isError,
    isPending
  }
}
