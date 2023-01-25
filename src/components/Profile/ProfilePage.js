import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import {
  setDocuments,
  AUTH_LOCAL_STORAGE_USER_DATA,
  AUTH_LOCAL_STORAGE_USER_DOCUMENTS,
  getDocuments,
  setUser,
} from "../../core/AuthHelpers";
import { deleteDocument, updateUserDocument } from "../../requests/Auth";
import Header from "../Shared/Header";
import DocumentDetails from "./components/DocumentDetails";
import PersonalDetails from "./components/PersonalDetails";
import ProfileInfo from "./components/ProfileInfo";
import SettingsDetails from "./components/SettingsDetails";
import ProfileUpdate from "./Update/ProfileUpdate";

function ProfilePage({ user }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [tab, setTab] = React.useState("overview");
  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem(AUTH_LOCAL_STORAGE_USER_DATA))?.id
  );
  const [updated, setUpdated] = useState(false);
  const [documents, setDocs] = useState(getDocuments());

  const updateUserData = async () => {};

  const deleteCover = async () => {
    try {
      const data = await deleteDocument(userId, "cover_letter");
      toast.success(data.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const setCoverData = async (files) => {
    try {
      const data = await updateUserDocument(userId, "cover_letter", files[0]);
      toast.success(data.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const setIsUserUpdated = () => {
    setUpdated(!updated);
  };

  return (
    <>
      <ToastContainer draggablePercent={60} />
      <div className="dashboard-main-cont">
        <div className="profile-section-cont">
          <div className="profile-section-card">
            <ProfileInfo
              userUpdated={setIsUserUpdated}
              setTab={setTab}
              tab={tab}
              user={user}
              documents={documents}
            />
          </div>
          <div className="profile-section-personal-details">
            {tab === "overview" && (
              <PersonalDetails
                setIsOpen={setIsOpen}
                userData={user}
                userUpdated={setIsUserUpdated}
                docs={documents}
                deleteCover={deleteCover}
                setCoverData={setCoverData}
                setIsUserUpdated={setIsUserUpdated}
              />
            )}
            {tab === "documents" && <DocumentDetails documents={documents} />}
            {tab === "settings" && (
              <SettingsDetails
                updateUserData={updateUserData}
                user={user}
                setIsUserUpdated={setIsUserUpdated}
                userUpdated={setIsUserUpdated}
documents={documents}
              />
            )}
          </div>

          <ProfileUpdate
            user={user}
            closeModal={() => setIsOpen(false)}
            isOpen={modalIsOpen}
            updateUserData={updateUserData}
            setIsUserUpdated={setIsUserUpdated}
          />
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
