/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import SignIn from "../components/Auth/SignIn";
import SignUp from "../components/Auth/SignUp";

const AuthLayout = () => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path="login" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
      {/* <Route path='forgot-password' element={<ForgotPassword />} />
      <Route path='password-reset/:id' element={<PasswordReset />} /> */}
      <Route index element={<SignIn />} />
    </Route>
  </Routes>
);

export { AuthPage };
