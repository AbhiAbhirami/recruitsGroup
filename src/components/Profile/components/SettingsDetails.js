import React, { Fragment } from "react";
import download from "../../../assets/images/icons/download.png";
import moment from "moment";
import ProfileInput from "../Update/ProfileInput";
import profilImage from "../../../assets/images/icons/blank.png";
import { useForm } from "react-hook-form";
import {
  deleteUserImage,
  updateUser,
  updateUserDocument,
  updateUserImage,
} from "../../../requests/Auth";
import {
  getDocuments,
  getUser,
  setDocuments,
  setUser,
} from "../../../core/AuthHelpers";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useState } from "react";
import ConfirmModal from "./confirmModal";

function SettingsDetails({
  updateUserData,
  userData,
  documents,
  setIsUserUpdated,
  userUpdated,
}) {
  const [docs, setDocs] = useState(documents);
  const [user, setUserData] = useState(userData);
  const [sideTab, setSideTab] = React.useState(1);
  const [avatar, setAvatar] = useState(userData.avatar);

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const resetObj = {
    name: user.name ? user.name : "",
    email: user.email ? user.email : "",
    phone: user.phone ? user.phone : "",
    position: user.position ? user.position : "",
    address: user.address ? user.address : "",
    company: user.company ? user.company : "",
    language: user.language ? user.language : "",
  };
  const onSubmit = async (values) => {
    console.log(values);
    try {
      const userUpdate = await updateUser(user.id, values);
      setUser(userUpdate.data.data);
      setIsUserUpdated(true);
      toast.success("Details updated");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      resetForm();
    }
  }, [formState, reset]);

  const resetForm = () => {
    reset(resetObj);
  };
  useEffect(() => {
    setDocs(getDocuments());
    setUser(getUser());
    setUserData(getUser());
  }, [userUpdated]);

  const setVideoResume = async (e) => {
    const updateDocsData = await updateUserDocument(
      user.id,
      "video_resume",
      e.target.files[0]
    );
    setDocuments(updateDocsData.data.data);
    setIsUserUpdated(true);
  };
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

  const [confirmModal, setConfirmModal] = useState({ status: false, id: '' })
  const handleModalOpen = (id) => {
    setConfirmModal({ status: true, id: id })
  }

  const handleFileChange = (e) => {
    setVideoResume(e)
    setConfirmModal({ status: false, id: "" })
  }

  return (
    <Fragment>
      <ConfirmModal
        labelId={confirmModal?.id}
        isOpen={confirmModal?.status}
        closeModal={() => setConfirmModal({ status: false, id: '' })
        }
      />

      <ToastContainer />
      <div className="profile-section-personal-detail-left document-details-left">
        <div className="personal-detail-title">
          <h4>Settings</h4>
        </div>
        <ul>
          <li
            className={sideTab === 1 && "document-details-head"}
            onClick={() => setSideTab(1)}
          >
            Profile picture <button className="cursor-pointer">UPDATE</button>
          </li>
          <li
            className={sideTab === 2 && "document-details-head"}
            onClick={() => setSideTab(2)}
          >
            User Name <button className="cursor-pointer">UPDATE</button>
          </li>
          <li
            className={sideTab === 3 && "document-details-head"}
            onClick={() => setSideTab(3)}
          >
            Location <button className="cursor-pointer">ADD</button>
          </li>
          <li
            className={sideTab === 4 && "document-details-head"}
            onClick={() => setSideTab(4)}
          >
            Position <button className="cursor-pointer">ADD</button>
          </li>
          <li
            className={sideTab === 5 && "document-details-head"}
            onClick={() => setSideTab(5)}
          >
            Email <button className="cursor-pointer">ADD</button>
          </li>
          <li
            className={sideTab === 6 && "document-details-head"}
            onClick={() => setSideTab(6)}
          >
            Phone Number <button className="cursor-pointer">ADD</button>
          </li>
          <li
            className={sideTab === 7 && "document-details-head"}
            onClick={() => setSideTab(7)}
          >
            Video <button className="cursor-pointer">UPDATE</button>
          </li>
        </ul>
      </div>
      <div className="profile-section-personal-detail-right">
        <div className="profile-section-personal-table">
          <div className="settings-profile-details">
            <h4>Your Profile Picture</h4>
            <div className="settings-profile-image-wrap">
              {/* <div className="settings-profile-image"> */}
              {/* <img
                  src={
                    avatar ? avatar : user.avatar ? user.avatar : profilImage
                  }
                  width={"100%"}
                  height={"100%"}
                  alt="profile-images"
                />
              </div>
              <input
                type="file"
                accept="image/png, image/jpeg"
                className="cursor-pointer upload-new"
                onClick={uploadProfile}
                text="Upload New"
              /> */}
              <div className="pic-holder">
                <img
                  id="profilePic"
                  className="pic"
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
                    <div className="mb-2">
                      <i
                        className="fa fa-camera fa-2x"
                        style={{ marginRight: "10px" }}
                      ></i>
                    </div>
                    <div className="text-uppercase">
                      Update <br /> Profile Photo
                    </div>
                  </div>
                </label>
                {/* </div> */}
              </div>

              <button
                className="cursor-pointer remove-profile"
                onClick={removeImage}
              >
                Remove Profile Picture
              </button>
              {/* </div> */}
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="settings-input">
            <label htmlFor="name" className="input-label">
              Full Name
            </label>
            <input
              className="profile-input"
              placeholder="Enter your Full Name"
              label="Full Name"
              type="text"
              defaultValue={user.name ? user.name : ""}
              {...register("name", { required: true })}
              name="name"
            />
            <div>
              {errors.name && (
                <span className="validation">{`Name is ${errors.name.type}`}</span>
              )}
            </div>

            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input
              className="profile-input"
              placeholder="Enter your Email"
              type="email"
              defaultValue={user.email ? user.email : ""}
              {...register("email", { required: true })}
              name="email"
            />
            <div>
              {errors.email && (
                <span className="validation">{`Email is ${errors.email.type}`}</span>
              )}
            </div>

            <label htmlFor="phone" className="input-label">
              Contact Number
            </label>
            <input
              className="profile-input"
              placeholder="Enter your Contact Number"
              type="number"
              defaultValue={user.phone ? user.phone : ""}
              {...register("phone", { required: true })}
              name="phone"
            />
            <div>
              {errors.phone && (
                <span className="validation">{`Contact is ${errors.phone.type}`}</span>
              )}
            </div>

            <label htmlFor="position" className="input-label">
              Position
            </label>
            <input
              className="profile-input"
              placeholder="Enter your Position"
              type="text"
              defaultValue={user.position ? user.position : ""}
              {...register("position")}
              name="position"
            />
          </form>
          {/* <form onSubmit={""} className="settings-input">
            <ProfileInput
              placeholder="Enter your User Name"
              label="User Name"
              type="text"
            />

            <ProfileInput
              label={"Location"}
              placeholder="Enter your email "
              type="text"
            />
            <ProfileInput
              label={"Position"}
              placeholder="Enter your Position"
              type="text"
            />
            
            <ProfileInput
              label={"Phone Number"}
              placeholder="Enter your Phone Number"
              type="number"
            />
          </form> */}
          <div className="profile-section-personal-resume settings">
            <div className="personal-detail-title">
              <h4>Upload Video</h4>
            </div>

            {docs && docs.video_resume ? (
              <div className="profile-section-personal-resume-update">
                <div>
                  {docs.video_resume.split("/").pop()}
                  {/* <span>
                    Updated on{" "}
                    {files &&
                      moment(files[0]?.lastModified).format("DD-MM-YYYY")}
                  </span> */}
                </div>
                <div className="resume-delete">
                  <img
                    className="cursor-pointer"
                    src={download}
                    height={25}
                    alt="download-icon"
                  />
                  <button className="cursor-pointer">DELETE VIDEO</button>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="resume-update">
              <input
                accept="video/*"
                type={"file"}
                id="resume-update"
                onChange={handleFileChange}
                placeholder=""
                style={{ opacity: 0, visibility: "hidden" }}
              />
              <label className="button" htmlFor="resume-updat"
                onClick={() => handleModalOpen('resume-update')}
              >
                UPDATE
              </label>
              <p>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SettingsDetails;
