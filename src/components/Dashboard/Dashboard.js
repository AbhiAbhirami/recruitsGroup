import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getUserDataById } from "../../requests/Auth";
import BackgroundDesign from "../Shared/BackgroundDesign";
import Header from "../Shared/Header";
import NewJobs from "../Shared/NewJobs/NewJobs";
import Notification from "../Shared/Notification/Notification";
import Todo from "../Shared/Todo/Todo";
import UpcomingEvents from "../Shared/UpcomingEvents/UpcomingEvents";

function Dashboard() {
  return (
    <div className="dashboard-main-cont">
      <BackgroundDesign />

      <div className="dashboard-section-cont">
        <h4 className="dashboard-header">Dashboard</h4>
        <div className="dashboard-first-section">
          <NewJobs />
          <Notification />
        </div>
        <div className="dashboard-first-section">
          <UpcomingEvents />
          <Todo />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
