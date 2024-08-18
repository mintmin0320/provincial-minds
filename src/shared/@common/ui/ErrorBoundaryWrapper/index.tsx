"use client"

import { QueryErrorResetBoundary } from "@tanstack/react-query"
import { ReactNode } from "react"

import ErrorBoundary from "../ErrorBoundary"
import ErrorFallback from "../ErrorFallback"

interface IErrorBoundaryWrapper {
  children: ReactNode
}

const ErrorBoundaryWrapper = ({ children }: IErrorBoundaryWrapper) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}

export default ErrorBoundaryWrapper
