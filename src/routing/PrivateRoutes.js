import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NotificationTab from "../components/NotificationTab/NotificationTab";
import Header from "../components/Shared/Header";
import Loader from "../components/Shared/Loader";
import { getUser } from "../core/AuthHelpers";

const PrivateRoutes = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(getUser());
  }, []);

  const isChanged = () => {
    setUser(getUser());
  };
  const ProfilePage = lazy(() => import("../components/Profile/ProfilePage"));
  const Jobs = lazy(() => import("../components/Jobs/Jobs"));
  const Dashboard = lazy(() => import("../components/Dashboard/Dashboard"));

  return (
    <>
      <Header userData={user} />
      <Routes>
        <Route path="auth/*" element={<Navigate to="/dashboard" />} />

        {/* Pages */}
        <Route
          path="dashboard"
          element={
            <Suspense fallback={<Loader />}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="jobs"
          element={
            <Suspense fallback={<Loader />}>
              <Jobs user={user} />
            </Suspense>
          }
        />
        <Route
          path="saved-jobs"
          element={
            <Suspense fallback={<Loader />}>
              <Jobs user={user} />
            </Suspense>
          }
        />
        <Route
          path="applied-jobs"
          element={
            <Suspense fallback={<Loader />}>
              <Jobs user={user} />
            </Suspense>
          }
        />
        <Route
          path="notifications"
          element={
            <Suspense fallback={<Loader />}>
              <NotificationTab user={user} />
            </Suspense>
          }
        />
        <Route
          path="/profile/*"
          element={
            <Suspense fallback={<Loader />}>
              <ProfilePage user={user} isChanged={isChanged} />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/error/404" />} />
      </Routes>
    </>
  );
};

export { PrivateRoutes };
