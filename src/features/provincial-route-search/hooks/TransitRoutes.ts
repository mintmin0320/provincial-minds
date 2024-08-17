import { useGetTransitList } from '@/shared/provincial/api/queries/useGetTransitList'

const TransitRoutes = () => {
  const { transitList, isLoading, isError } = useGetTransitList()

  const locationState = {
    origin: transitList?.startArea ?? "",
    destination: transitList?.endArea ?? "",
  }

  return {
    transitList,
    locationState,
    isLoading,
    isError
  }
}
export default TransitRoutes