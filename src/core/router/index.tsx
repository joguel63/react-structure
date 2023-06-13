import { Route, Routes } from "react-router-dom";
import { AuthModule } from "modules";
export const RoutesProvider = () => {
  return (
    <Routes>
      <Route path="/*" element={<AuthModule />} />
    </Routes>
  );
};
