import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";

const LazyGetStartedPage = lazy(() => import("../pages/home"));

export const getStartedRoutes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading…</div>}>
        <LazyGetStartedPage />
      </Suspense>
    ),
  }
];
