import React, { useEffect, useState } from "react";
import backgroundImage from "../../../assets/images/background/bg2.png";
import profilImage from "../../../assets/images/icons/blank.png";
import flag from "../../../assets/images/icons/flag.png";
import { getDocuments, getUser, setUser } from "../../../core/AuthHelpers";
import { deleteUserImage, updateUserImage } from "../../../requests/Auth";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md"
import DeleteModal from "./DeleteModal";
import { useLocation } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import Loader from "../../Shared/Loader";

function ProfileInfo({
  setIsUserUpdated,
  userUpdated,
  tab,
  setTab,
  userData,
  documents,
}) {
  const location = useLocation()

  console.log(location);

  const [user, setUserData] = useState(userData);
  const [docs, setDocs] = useState(documents);
  useEffect(() => {
    setUserData(getUser());
    setDocs(getDocuments());
  }, [userUpdated]);

  const [avatar, setAvatar] = useState(userData.avatar);

  const uploadProfile = async (event) => {
    try {
      if (event.target.files && event.target.files[0]) {
        setAvatar(URL.createObjectURL(event.target.files[0]));
      }
      const avatar = await updateUserImage(user.id, event.target.files[0]);
      setUser(avatar.data.data);
      setIsUserUpdated(true);
      toast.success(avatar.data.message);
    } catch (e) {
      toast.success(e.response.message);
    }
  };

  const removeImage = async () => {
    try {
      if (user.avatar) {
        const avatar = await deleteUserImage(user.id);
        setAvatar("");
        setUser(avatar.data.data);
        setIsUserUpdated(true);
        toast.success(avatar.data.message);
      } else {
        toast.error("Profile picture not updated");
      }
    } catch (e) {
      toast.success(e.response.message);
    }
  };

  const [confirmModal, setConfirmModal] = useState({ status: false, id: "" });
  const handleModalOpen = (id) => {
    setConfirmModal({ status: true, id: id });
  };

  useEffect(() => {
    if (location?.search) {
      setTab(location?.search?.split('?')[1])
    }
  }, [location.search])

  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const loadData = async () => {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };
    user && loadData();
  }, [tab]);

  return (
    <div>
      {loading && (<Loader />)}
      <DeleteModal
        onDelete={removeImage}
        isOpen={confirmModal?.status}
        closeModal={() => setConfirmModal({ status: false, id: "" })}
      />
      <div>
        <img
          src={backgroundImage}
          width={"100%"}
          style={{ minHeight: 150, borderRadius: 15 }}
          alt="background-images"
        />
      </div>
      <div className="profileInfo-cont">
        <div className="profileInfo-profile-detail">
          <div className="profileInfo-profile-image">
            {/* <img
              src={user.avatar ? user.avatar : profilImage}
              width={"100%"}
              height={"100%"}
              alt="profile-images"
            /> */}
            <div className="pic-holder" style={{ padding: 0 }}>
              <img
                id="profilePic"
                className="pic"
                width={"100%"}
                height={"100%"}
                src={avatar ? avatar : profilImage}
              />

              <input
                required
                className="uploadProfileInput"
                type="file"
                name="profile_pic"
                id="newProfilePhoto"
                accept="image/*"
                onChange={uploadProfile}
                hidden
              />
              <label for="newProfilePhoto" className="upload-file-block">
                <div className="text-center">
                  <div className="mb-2" style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                    <i
                      className="fa fa-camera fa-2x"
                    ></i>
                    <button
                      className="cursor-pointer remove-profile remove-profile-new "
                      onClick={handleModalOpen}
                    >
                      <MdDelete className="" size={'1.6rem'} color={'white'} />
                    </button>
                  </div>
                  <div className="text-uppercase">
                    Update <br /> Profile Photo
                  </div>

                </div>
              </label>

            </div>



          </div>

          <div className="profileInfo-profile-detail-text">
            <h4>{user.name}</h4>
            <p>
              {user.location && <img src={flag} height={13} alt="flag-icon" />}{" "}
              {user.location && user.location}
            </p>
            <p>
              {user.position ? user.position : ""}
              {user.position && user.job_type && (
                <>
                  <span className="text-dot">&nbsp;</span>{" "}
                  <span>{user.job_type}</span>
                </>
              )}
            </p>
            <p>
              {/* <img src={email} height={15} alt="flag-icon" /> */}
              {user.email && <i class="fa-regular fa-envelope" style={{ marginRight: '5px' }}></i>}
              {user.email}
            </p>
            <p>
              {user.phone &&
                <FiPhone style={{ marginRight: '5px' }} />
              }
              {/* <i class="fab fa-regular fa-phone"></i> */}
              {/* <img src={phone} height={15} alt="flag-icon" /> */}
              {user.phone && user.phone}
            </p>
          </div>
          <div className="profileInfo-profile-control-tab">
            <button
              className={`cursor-pointer ${tab === "overview" ? "active" : ""}`}
              type="button"
              onClick={() => setTab("overview")}
            >
              Overview
            </button>
            <button
              className={`cursor-pointer ${tab === "documents" ? "active" : ""
                }`}
              type="button"
              onClick={() => setTab("documents")}
            >
              Documents
            </button>
            <button
              className={`cursor-pointer ${tab === "settings" ? "active" : ""}`}
              type="button"
              onClick={() => setTab("settings")}
            >
              Settings
            </button>
          </div>
        </div>
        <div className="profileInfo-profile-complition">
          <div>
            <div className="line-chart">
              <p>Profile Completion</p>
              <span>50%</span>
            </div>
            <div className="line">
              <div className="line line-in" style={{ width: "50%" }} />
            </div>
          </div>
          <div>
            {docs && docs.video_resume && (
              <video
                // poster={videoThumb}
                width={"100%"}
                height={"100%"}
                controls={true}
              >
                <source src={docs.video_resume} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
