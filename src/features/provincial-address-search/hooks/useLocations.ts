import { useRouter } from 'next/navigation'
import { useState } from 'react'

import ROUTE_PATH from '@/shared/@common/constants/path'
import { ILocationProps, ILocationValidatedProps } from '@/shared/@common/types/location.types'
import useSaveRecommendedRoute from '@/shared/provincial/api/mutations/useSaveRecommendedRoute'

const useLocations = () => {
  const router = useRouter()

  const {
    mutateAsync: saveRecommendedRoute,
    isPending,
    isError,
  } = useSaveRecommendedRoute()

  const [locationState, setLocationState] = useState<ILocationProps>({
    origin: null,
    destination: null,
  })

  const [isSaving, setIsSaving] = useState<boolean>(false)


  const handleSaveLocation = async () => {
    if (!canSave) {
      return
    }

    setIsSaving(true)
    const userId = await saveRecommendedRoute(
      locationState as ILocationValidatedProps,
    )

    if (userId) {
      router.push(ROUTE_PATH.TRANSIT_ROTE)
    }
  }

  const canSave = locationState.origin && locationState.destination
  const isProcessing = !isError && (isPending || isSaving)
  
  return {
    locationState,
    setLocationState,
    isSaving,
    saveLocation: handleSaveLocation,
    isProcessing,
    canSave
  }
  
}


export default useLocations