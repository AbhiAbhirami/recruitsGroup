import React, { Fragment } from "react";
import edit from "../../../assets/images/icons/edit.png";
import download from "../../../assets/images/icons/download.png";
import moment from "moment";

function PersonalDetails({ setIsOpen }) {
  const [files, setFiles] = React.useState([]);
  const [sideTab, setSideTab] = React.useState(1);

  return (
    <Fragment>
      <div className="profile-section-personal-detail-left">
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
          <li>
            Resume <button className="cursor-pointer">UPDATE</button>
          </li>
          <li>Key skill </li>
          <li>
            Education <button className="cursor-pointer">ADD</button>
          </li>
          <li>
            Projects <button className="cursor-pointer">ADD</button>
          </li>
          <li>Accomplishments </li>
          <li>Career profile </li>
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
                  <td>Amanda Smith</td>
                </tr>
                <tr>
                  <td>Position</td>
                  <td>Fulll Stack Developer</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>Not Updated</td>
                </tr>
                <tr>
                  <td>Contact</td>
                  <td>8517601388</td>
                </tr>
                <tr>
                  <td>Current Company </td>
                  <td>Not Updated </td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody>
                <tr>
                  <td>Date of birth</td>
                  <td> Not Updated</td>
                </tr>
                <tr>
                  <td>Country</td>
                  <td> Not Updated</td>
                </tr>
                <tr>
                  <td>Language</td>
                  <td>Not Updated</td>
                </tr>
                <tr>
                  <td>Time Zone</td>
                  <td>Not Updated</td>
                </tr>
                <tr>
                  <td>Currency</td>
                  <td>Not Updated </td>
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
          {files[0]?.name ? (
            <div className="profile-section-personal-resume-update">
              <div>
                RESUME.PDF -{" "}
                <span>
                  Updated on{" "}
                  {files && moment(files[0]?.lastModified).format("DD-MM-YYYY")}
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
    </Fragment>
  );
}

export default PersonalDetails;
