import React, { Fragment } from "react";
import download from "../../../assets/images/icons/download.png";
import moment from "moment";
import ProfileInput from "../Update/ProfileInput";
import profilImage from "../../../assets/images/icons/profile2.png";

function SettingsDetails() {
  const [files, setFiles] = React.useState([]);

  const [sideTab, setSideTab] = React.useState(1);

  return (
    <Fragment>
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
              <div className="settings-profile-image">
                <img
                  src={profilImage}
                  width={"100%"}
                  height={"100%"}
                  alt="profile-images"
                />
              </div>
              <button className="cursor-pointer upload-new">Upload New</button>
              <button className="cursor-pointer remove-profile">
                Remove Profile Picture
              </button>
            </div>
          </div>
          <form onSubmit={""} className="settings-input">
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
              label={"Email"}
              placeholder="Enter your Email"
              type="email"
            />
            <ProfileInput
              label={"Phone Number"}
              placeholder="Enter your Phone Number"
              type="number"
            />
          </form>
          <div className="profile-section-personal-resume settings">
            <div className="personal-detail-title">
              <h4>Upload Video</h4>
            </div>

            {files[0]?.name ? (
              <div className="profile-section-personal-resume-update">
                <div>
                  Video -{" "}
                  <span>
                    Updated on{" "}
                    {files &&
                      moment(files[0]?.lastModified).format("DD-MM-YYYY")}
                  </span>
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
                type={"file"}
                id="resume-update"
                onChange={(e) => setFiles(e.target.files)}
                placeholder=""
                style={{ opacity: 0, visibility: "hidden" }}
              />
              <label className="button" htmlFor="resume-update">
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
