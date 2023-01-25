import React, { Fragment } from "react";
import edit from "../../../assets/images/icons/edit.png";
import download from "../../../assets/images/icons/download.png";
import moment from "moment";
import { useEffect } from "react";
import { updateUserDocument } from "../../../requests/Auth";

function PersonalDetails({
  setIsOpen,
  user,
  documents,
  deleteResume,
  setResumeData,
  deleteCover,
  setCoverData,
}) {
  const [resume, setResume] = React.useState("");
  const [cover, setCover] = React.useState("");
  useEffect(() => {
    setResume(
      documents.resume ? unescape(documents.resume.split("/").pop()) : ""
    );
    setCover(
      documents.cover_letter
        ? unescape(documents.cover_letter.split("/").pop())
        : ""
    );
  }, []);
function PersonalDetails({ setIsOpen }) {
  const [files, setFiles] = React.useState([]);
  const [sideTab, setSideTab] = React.useState(1);

  return (
    <Fragment>
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
                {/* <tr>
                  <td>Address</td>
                  <td>Not Updated</td>
                </tr> */}
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
                  <td>
                    {user.date_of_birth ? user.date_of_birth : "Not Updated"}
                  </td>
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
                <tr>
                  <td>Currency</td>
                  <td>{user.currency ? user.currency : "Not Updated"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="profile-section-personal-resume">
          <div className="personal-detail-title">
            <h4>Resume</h4>
          </div>
          <p>
            The most key document that employers review is a resume. In general,
            recruiters do not review profiles without resumes.
          </p>

          <div className="profile-section-personal-resume-update">
            {documents && documents.resume ? (
              <>
                <div>
                  {resume
                    ? resume
                    : unescape(documents.resume.split("/").pop())}
                  {/* <span>
                    Updated on{" "}
                    {files &&
                      moment(files[0]?.lastModified).format("DD-MM-YYYY")}
                  </span> */}
                </div>
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
                      setResume("");
                      deleteResume();
                    }}
                  >
                    DELETE RESUME
                  </button>
                </div>
              </>
            ) : (
              "Not Updated"
            )}
          </div>

          <div className="resume-update">
            <input
              type={"file"}
              id="resume-update"
              onChange={(e) => {
                setResume(e.target.files[0].name);
                setResumeData(e.target.files);
              }}
              placeholder=""
              style={{ opacity: 0, visibility: "hidden" }}
            />
            <label className="button" htmlFor="resume-update">
              UPDATE RESUME
            </label>
            <p>Supported Formats: doc, docx, pdf, upto 2 MB</p>
          </div>
        </div>

        <div className="profile-section-personal-resume">
          <div className="personal-detail-title">
            <h4>Cover Letter</h4>
          </div>
          <p>
            The most key document that employers review is a resume. In general,
            recruiters do not review profiles without resumes.
          </p>

          <div className="profile-section-personal-resume-update">
            {documents && documents.cover_letter ? (
              <>
                <div>
                  {cover
                    ? cover
                    : unescape(documents.cover_letter.split("/").pop())}
                  {/* <span>
                    Updated on{" "}
                    {files &&
                      moment(files[0]?.lastModified).format("DD-MM-YYYY")}
                  </span> */}
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
            )}
          </div>

          <div className="resume-update">
            <input
              type={"file"}
              id="cover-update"
              onChange={(e) => {
                setCover(e.target.files[0].name);
                setCoverData(e.target.files);
              }}
              placeholder=""
              style={{ opacity: 0, visibility: "hidden" }}
            />
            <label className="button" htmlFor="cover-update">
              UPDATE COVER LETTER
            </label>
            <p>Supported Formats: doc, docx, pdf, upto 2 MB</p>
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
            {files[0]?.name ? (
              <div className="profile-section-personal-resume-update">
                <div>
                  RESUME.PDF -{" "}
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
                  <button className="cursor-pointer">DELETE RESUME</button>
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
                UPDATE RESUME
              </label>
              <p>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default PersonalDetails;
