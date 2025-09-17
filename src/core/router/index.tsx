import { lazy, Suspense, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'

export const RoutesProvider = () => {
  const modules = useMemo(
    () => ({
      LazyGetStarted: lazy(() => import('modules/getStarted')),
    }),
    [],
  )

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Loading…</div>}>
            <modules.LazyGetStarted />
          </Suspense>
        }
      />
    </Routes>
  )
}
