import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const modules = {
  LazyGetStartedPage: lazy(() => import('../pages/getStarted')),
}
export const GetStartedRouter: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Loading…</div>}>
            <modules.LazyGetStartedPage />
          </Suspense>
        }
      />
    </Routes>
  )
}
