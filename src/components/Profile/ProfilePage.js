import React from "react";
import Header from "../Shared/Header";
import DocumentDetails from "./components/DocumentDetails";
import PersonalDetails from "./components/PersonalDetails";
import ProfileInfo from "./components/ProfileInfo";
import SettingsDetails from "./components/SettingsDetails";
import ProfileUpdate from "./Update/ProfileUpdate";

function ProfilePage() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [tab, setTab] = React.useState("overview");

  return (
    <div className="dashboard-main-cont">
      <Header />
      <div className="profile-section-cont">
        <div className="profile-section-card">
          <ProfileInfo setTab={setTab} tab={tab} />
        </div>
        <div className="profile-section-personal-details">
          {tab === "overview" && <PersonalDetails setIsOpen={setIsOpen} />}
          {tab === "documents" && <DocumentDetails />}
          {tab === "settings" && <SettingsDetails />}
        </div>

        <ProfileUpdate
          closeModal={() => setIsOpen(false)}
          isOpen={modalIsOpen}
        />
      </div>
    </div>
  );
}

export default ProfilePage;
