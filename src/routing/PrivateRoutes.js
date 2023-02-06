import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Jobs from "../components/Jobs/Jobs";
import AppliedJobs from "../components/AppliedJobs/AppliedJobs";
import Header from "../components/Shared/Header";

import SavedJobs from "../components/SavedJobs/SavedJobs";
import ForgotPassword from "../components/ForgotPasword/ForgotPassword";

import { getJobsInfo, getUser } from "../core/AuthHelpers";
const PrivateRoutes = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(getUser());
  }, []);
  const ProfilePage = lazy(() => import("../components/Profile/ProfilePage"));

  return (
    <>
      <Header user={user} />
      <Routes>
        <Route path="auth/*" element={<Navigate to="/dashboard" />} />

        {/* Pages */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="jobs" element={<Jobs user={user} />} />
        <Route path="saved-jobs" element={<SavedJobs user={user} />} />
        <Route path="applied-jobs" element={<AppliedJobs user={user} />} />

        <Route
          path="/profile/*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ProfilePage user={user} />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/error/404" />} />
      </Routes>
    </>
  );
};

export { PrivateRoutes };
