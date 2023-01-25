import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import {
  AUTH_LOCAL_STORAGE_USER_DATA,
  AUTH_LOCAL_STORAGE_USER_DOCUMENTS,
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
  const [documents, setDocs] = useState({});
  useEffect(() => {
    setDocs(
      JSON.parse(localStorage.getItem(AUTH_LOCAL_STORAGE_USER_DOCUMENTS))
    );
  }, [user]);

  const updateUserData = async () => {};

  const deleteResume = async () => {
    try {
      const data = await deleteDocument(userId, "resume");
      toast.success(data.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const setResumeData = async (files) => {
    try {
      const data = await updateUserDocument(userId, "resume", files[0]);
      toast.success(data.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

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

  return (
    <>
      <ToastContainer draggablePercent={60} />
      <div className="dashboard-main-cont">
        <div className="profile-section-cont">
          <div className="profile-section-card">
            <ProfileInfo
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
                user={user}
                documents={documents}
                deleteResume={deleteResume}
                setResumeData={setResumeData}
                deleteCover={deleteCover}
                setCoverData={setCoverData}
              />
            )}
            {tab === "documents" && <DocumentDetails documents={documents} />}
            {tab === "settings" && (
              <SettingsDetails updateUserData={updateUserData} />
            )}
          </div>

          <ProfileUpdate
            user={user}
            closeModal={() => setIsOpen(false)}
            isOpen={modalIsOpen}
            updateUserData={updateUserData}
          />
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
