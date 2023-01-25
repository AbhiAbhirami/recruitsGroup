import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Jobs from "../components/Jobs/Jobs";
import AppliedJobs from "../components/AppliedJobs/AppliedJobs";
import Header from "../components/Shared/Header";
import { useEffect } from "react";
import { useState } from "react";
import {
  AUTH_LOCAL_STORAGE_KEY,
  AUTH_LOCAL_STORAGE_USER_DATA,
} from "../core/AuthHelpers";

const PrivateRoutes = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUser = () => {
      setUser(JSON.parse(localStorage.getItem(AUTH_LOCAL_STORAGE_USER_DATA)));
    };
    getUser();
  }, []);
  const ProfilePage = lazy(() => import("../components/Profile/ProfilePage"));

  return (
    <>
      <Header user={user} />
      <Routes>
        <Route path="auth/*" element={<Navigate to="/dashboard" />} />
        {/* Pages */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="applied-jobs" element={<AppliedJobs />} />

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
    </>
  );
};

export { PrivateRoutes };
