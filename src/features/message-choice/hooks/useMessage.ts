import { useRouter } from 'next/navigation';
import { useState } from "react";

import ROUTE_PATH from '@/shared/@common/constants/path';
import useSetUserMessage from '@/shared/provincial/api/mutations/useSetUserMessage';
import { predefinedMessages } from '../constants/messages';

export const useMessage = () => {
  const router = useRouter();

  const { mutateAsync: saveUserMessage, isPending, isError } = useSetUserMessage();

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isInputCustom, setIsInputCustom] = useState<boolean>(false);
  const [customMessage, setCustomMessage] = useState<string>('');
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const finalMessage =
    isInputCustom
      ? customMessage
      : selectedIndex !== null
      ? predefinedMessages[selectedIndex]
      : '';

  const handleSelect = (index: number | null) => {
    setSelectedIndex(index);
    setIsInputCustom(false);
    setCustomMessage('');
  };

  const handleCustomMessageButton = () => {
    setIsInputCustom(true);
    setSelectedIndex(null);
  };

  const handleClick = async () => {
    if (!finalMessage.trim()) return;

    setIsSaving(true);

    const result = await saveUserMessage({ userMessage: finalMessage });

    if (result) router.push(ROUTE_PATH.GACHA_SHARE);
  };

  const isProcessing = !isError && (isPending || isSaving);

  return {
    messages: predefinedMessages,
    selectedIndex,
    isInputCustom,
    customMessage,
    setCustomMessage,
    finalMessage,
    handleSelect,
    handleCustomMessageButton,
    handleClick,
    isProcessing,
  };
};