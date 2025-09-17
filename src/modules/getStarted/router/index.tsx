import { lazy, Suspense, useMemo } from "react";
import { Route, Routes } from "react-router-dom";

export const GetStartedRouter: React.FC = () => {
  const modules = useMemo(
    () => ({
      LazyHome: lazy(() => import("../pages/home")),
    }),
    []
  );

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Loading…</div>}>
            <modules.LazyHome />
          </Suspense>
        }
      />
    </Routes>
  );
};
