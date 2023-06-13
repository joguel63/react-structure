import { Route, Routes } from "react-router-dom";
import { ForgotPasswordPage, ResetPassword, SingInPage, SingUpPage } from "modules/auth/pages";
export const RoutesProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<SingInPage />} />
      <Route path="/sing-up" element={<SingUpPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
};
