import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import {
  AUTH_LOCAL_STORAGE_USER_DATA,
  getDocuments,
} from "../../core/AuthHelpers";
import { deleteDocument, updateUserDocument } from "../../requests/Auth";
import DocumentDetails from "./components/DocumentDetails";
import PersonalDetails from "./components/PersonalDetails";
import ProfileInfo from "./components/ProfileInfo";
import SettingsDetails from "./components/SettingsDetails";
import ProfileUpdate from "./Update/ProfileUpdate";

function ProfilePage({ user, isChanged }) {
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
      const data = await deleteDocument(userId, "cover");
      toast.success(data.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const setCoverData = async (files) => {
    try {
      const data = await updateUserDocument(userId, "cover", files[0]);
      toast.success(data.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const setIsUserUpdated = () => {
    setUpdated(!updated);
    isChanged();
  };

  return (
    <>
      <ToastContainer draggablePercent={60} />
      <div className="dashboard-main-cont">
        <div className="profile-section-cont">
          <div className="profile-section-card">
            <ProfileInfo
              userUpdated={updated}
              setIsUserUpdated={setIsUserUpdated}
              setTab={setTab}
              tab={tab}
              userData={user}
              documents={documents}
            />
          </div>
          <div className="profile-section-personal-details">
            {tab === "overview" && (
              <PersonalDetails
                setIsOpen={setIsOpen}
                userData={user}
                docs={documents}
                deleteCover={deleteCover}
                setCoverData={setCoverData}
                userUpdated={updated}
                setIsUserUpdated={setIsUserUpdated}
              />
            )}
            {tab === "documents" && (
              <DocumentDetails
                docs={documents}
                user={user}
                userUpdated={updated}
                setIsUserUpdated={setIsUserUpdated}
              />
            )}
            {tab === "settings" && (
              <SettingsDetails
                updateUserData={updateUserData}
                userData={user}
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
