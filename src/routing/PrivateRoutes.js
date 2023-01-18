import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Jobs from "../components/Jobs/Jobs";
import AppliedJobs from "../components/AppliedJobs/AppliedJobs";



const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import("../components/Profile/ProfilePage"));

  return (
    <Routes>
      <Route path="auth/*" element={<Navigate to="/dashboard" />} />
      {/* Pages */}
      <Route path="dashboard" element={<Dashboard />} />
      <Route path='jobs' element={<Jobs />} />
      <Route path='applied-jobs' element={<AppliedJobs />} />

      <Route
        path="/profile/*"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <ProfilePage />
          </Suspense>
        }
      />
      <Route path="*" element={<Navigate to="/error/404" />} />
    </Routes>
  );
};

export { PrivateRoutes };
