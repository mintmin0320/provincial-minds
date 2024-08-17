"use client"

import { QueryErrorResetBoundary } from "@tanstack/react-query"

import ErrorBoundary from "@/shared/@common/ui/ErrorBoundary"
import Loading from "@/shared/@common/ui/Loading"
import LocationInputGroup from "@/shared/@common/ui/LocationInputGroup"
import ErrorFallback from "../../../shared/@common/ui/ErrorFallback"
import CalculateButton from "./CalculateButton"
import TransitList from "./TransitList"

import TransitRoutes from "../hooks/TransitRoutes"

const TransitRouteSection = () => {
  const { transitList, locationState, isLoading } = TransitRoutes()

  if (isLoading) return <Loading />

  return (
    <section>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
            <LocationInputGroup locationState={locationState} type="view" />
            <TransitList transits={transitList?.transits ?? []} />
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
      <CalculateButton />
    </section>
  )
}

export default TransitRouteSection
