import React, { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import("../components/Profile/ProfilePage"));

  return (
    <Routes>
      <Route path="auth/*" element={<Navigate to="/dashboard" />} />
      {/* Pages */}
      {/* <Route path='dashboard' element={<Dashboard />} />
        <Route path='jobs' element={<Jobs />} />
        <Route path='applied-jobs' element={<Applied />} /> */}

      <Route path="/profile/*" element={<ProfilePage />} />
      <Route path="*" element={<Navigate to="/error/404" />} />
    </Routes>
  );
};

export { PrivateRoutes };
