import ROUTE_PATH from '@/shared/@common/constants/path'
import { ILocationProps, ILocationValidatedProps } from '@/shared/@common/types/location'
import useSaveRecommendedRoute from '@/shared/provincial/api/mutations/useSaveRecommendedRoute'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

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

  const canSave = locationState.origin && locationState.destination

  const handleSaveLocation = async () => {
    if (canSave) {
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
  
  return {
    locationState,
    setLocationState,
    isSaving,
    saveLocation: handleSaveLocation,
    isPending,
    isError,
    canSave
  }
  
}


export default useLocations