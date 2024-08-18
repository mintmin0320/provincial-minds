import { useGetTransitList } from '@/shared/provincial/api/queries/useGetTransitList'

const TransitRoutes = () => {
  const { transitList, isLoading } = useGetTransitList()

  const locationState = {
    origin: transitList?.origin ?? "",
    destination: transitList?.destination ?? "",
  }

  return {
    transitList,
    locationState,
    isLoading
  }
}
export default TransitRoutes