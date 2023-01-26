import React, { Fragment } from "react";
import edit from "../../../assets/images/icons/edit.png";
import download from "../../../assets/images/icons/download.png";
import { useEffect } from "react";
import {
  AUTH_LOCAL_STORAGE_KEY,
  getDocuments,
  getUser,
  setDocuments,
} from "../../../core/AuthHelpers";
import { toast, ToastContainer } from "react-toastify";
import { deleteDocument, updateUserDocument } from "../../../requests/Auth";
import { useState } from "react";

function PersonalDetails({
  setIsOpen,
  userData,
  docs,
  userUpdated,
  setIsUserUpdated,
}) {
  const [sideTab, setSideTab] = React.useState(1);
  const [resume, setResume] = React.useState("");
  const [documents, setDocumentsData] = useState(docs ? docs : "");

  const [cover, setCover] = React.useState("");
  const [user, setUserData] = useState(userData);

  useEffect(() => {
    setResume(
      documents && documents.resume
        ? unescape(documents.resume.split("/").pop())
        : ""
    );
    setCover(
      documents && documents.cover_letter
        ? unescape(documents.cover_letter.split("/").pop())
        : ""
    );
  }, [documents]);
  useEffect(() => {
    setUserData(getUser());
    setDocumentsData(getDocuments());
  }, [userUpdated]);

  const deleteResume = async () => {
    try {
      const documents = await deleteDocument(user.id, "resume");
      setDocuments(documents.data.data);
      setIsUserUpdated(true);
      toast.success(documents.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const setResumeData = async (files) => {
    try {
      const documents = await updateUserDocument(user.id, "resume", files[0]);
      setDocuments(documents.data.data);
      setIsUserUpdated(true);
      toast.success(documents.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <Fragment>
      <ToastContainer draggablePercent={60} />
      <div className="profile-section-personal-detail-left document-details-left">
        <div className="personal-detail-title">
          <h4>Personal Details</h4>
        </div>
        <ul>
          <li
            className={sideTab === 1 && "document-details-head"}
            onClick={() => setSideTab(1)}
          >
            Personal details
          </li>
          <li
            className={sideTab === 2 && "document-details-head"}
            onClick={() => setSideTab(2)}
          >
            Resume <button className="cursor-pointer">UPDATE</button>
          </li>
          <li
            className={sideTab === 3 && "document-details-head"}
            onClick={() => setSideTab(3)}
          >
            Key skill{" "}
          </li>
          <li
            className={sideTab === 4 && "document-details-head"}
            onClick={() => setSideTab(4)}
          >
            Education <button className="cursor-pointer">ADD</button>
          </li>
          <li
            className={sideTab === 5 && "document-details-head"}
            onClick={() => setSideTab(5)}
          >
            Projects <button className="cursor-pointer">ADD</button>
          </li>
          <li
            className={sideTab === 6 && "document-details-head"}
            onClick={() => setSideTab(6)}
          >
            Accomplishments{" "}
          </li>
          <li
            className={sideTab === 7 && "document-details-head"}
            onClick={() => setSideTab(7)}
          >
            Career profile{" "}
          </li>
        </ul>
      </div>
      {sideTab === 1 && (
        <div className="profile-section-personal-detail-right">
          <div className="profile-section-personal-table">
            <div className="personal-detail-title">
              <h4>Personal Details</h4>
              <img
                className="cursor-pointer"
                src={edit}
                height={23}
                alt="edit-icon"
                onClick={() => setIsOpen(true)}
              />
            </div>
            <div className="personal-detail-table">
              <table>
                <tbody>
                  <tr>
                    <td>Full Name </td>
                    <td>{user.name ? user.name : "Not Updated"}</td>
                  </tr>
                  <tr>
                    <td>Position</td>
                    <td>{user.position ? user.position : "Not Updated"}</td>
                  </tr>

                  <tr>
                    <td>Contact</td>
                    <td>{user.phone ? user.phone : "Not Updated"}</td>
                  </tr>
                  <tr>
                    <td>Current Company </td>
                    <td>{user.company ? user.company : "Not Updated"}</td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <td>Date of birth</td>
                    <td>Not Updated</td>
                  </tr>
                  <tr>
                    <td>Country</td>
                    <td>{user.country ? user.country : "Not Updated"}</td>
                  </tr>
                  <tr>
                    <td>Language</td>
                    <td>{user.language ? user.language : "Not Updated"}</td>
                  </tr>
                  {/* <tr>
                  <td>Time Zone</td>
                  <td>{user.time_zone ? user.time_zone : "Not Updated"}</td>
                </tr> */}
                  {/* <tr>
                    <td>Currency</td>
                    <td>{user.currency ? user.currency : "Not Updated"}</td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      {sideTab === 2 && (
        <div className="profile-section-personal-detail-right">
          <div className="profile-section-personal-resume mt-0">
            <div className="personal-detail-title">
              <h4>Resume</h4>
            </div>
            <p>
              The most key document that employers review is a resume. In
              general, recruiters do not review profiles without resumes.
            </p>
            <div className="profile-section-personal-resume-update">
              <div>
                {resume ? resume : "Not Updated"}
                {/* <span>
                    Updated on{" "}
                    {files &&
                      moment(files[0]?.lastModified).format("DD-MM-YYYY")}
                  </span> */}
              </div>
              {documents && documents.resume ? (
                <div className="resume-delete">
                  <a href={documents.resume} target="_blank">
                    <img
                      className="cursor-pointer"
                      src={download}
                      height={25}
                      alt="download-icon"
                    />
                  </a>
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      deleteResume();
                    }}
                  >
                    DELETE RESUME
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
            {/* {documents && documents.cover_letter ? (
              <>
                <div>
                  {cover
                    ? cover
                    : unescape(documents.cover_letter.split("/").pop())}
                  
                </div>
                <div className="resume-delete">
                  <a href={documents.cover_letter} target="_blank">
                    <img
                      className="cursor-pointer"
                      src={download}
                      height={25}
                      alt="download-icon"
                    />
                  </a>
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      setCover("");
                      deleteCover();
                    }}
                  >
                    DELETE COVER LETTER
                  </button>
                </div>
              </>
            ) : (
              "Not Updated"
            )} */}
            <div className="resume-update">
              <input
                type={"file"}
                id="resume-update"
                onChange={(e) => setResumeData(e.target.files)}
                placeholder=""
                style={{ opacity: 0, visibility: "hidden" }}
              />
              <label className="button" htmlFor="resume-update">
                UPDATE RESUME
              </label>
              <p>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
            </div>
          </div>
        </div>
      )}
      {sideTab === 3 && (
        <div className="profile-section-personal-detail-right"></div>
      )}
      {sideTab === 4 && (
        <div className="profile-section-personal-detail-right"></div>
      )}
      {sideTab === 5 && (
        <div className="profile-section-personal-detail-right"></div>
      )}
      {sideTab === 6 && (
        <div className="profile-section-personal-detail-right"></div>
      )}
      {sideTab === 7 && (
        <div className="profile-section-personal-detail-right"></div>
      )}
    </Fragment>
  );
}

export default PersonalDetails;
