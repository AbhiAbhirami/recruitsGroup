import React from "react";
import Header from "../Shared/Header";
import PersonalDetails from "./components/PersonalDetails";
import ProfileInfo from "./components/ProfileInfo";

function ProfilePage() {
  return (
    <div className="dashboard-main-cont">
      <Header />
      <div className="profile-section-cont">
        <div className="profile-section-card">
          <ProfileInfo />
        </div>
        <div className="profile-section-personal-details">
          <PersonalDetails />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
