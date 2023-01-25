import React, { Fragment } from "react";
import download from "../../../assets/images/icons/download.png";
import moment from "moment";

function DocumentDetails() {
  const [files, setFiles] = React.useState([]);

  const [sideTab, setSideTab] = React.useState(1);

  return (
    <Fragment>
      <div className="profile-section-personal-detail-left document-details-left">
        <div className="personal-detail-title">
          <h4>Documents</h4>
        </div>
        <ul>
          <li
            className={sideTab === 1? "document-details-head":""}
            onClick={() => setSideTab(1)}
          >
            Pasport <button className="cursor-pointer">UPDATE</button>
          </li>
          <li
            className={sideTab === 2 ? "document-details-head":""}
            onClick={() => setSideTab(2)}
          >
            Identity Document <br />
            (National Id)
            <button className="cursor-pointer">ADD</button>{" "}
          </li>

          <li
            className={sideTab === 3 && "document-details-head"}
            onClick={() => setSideTab(3)}
          >
            Experience Certificate{" "}
            <button className="cursor-pointer">ADD</button>
          </li>
          <li
            className={sideTab === 4 && "document-details-head"}
            onClick={() => setSideTab(4)}
          >
            IELTS/ <br />
            Language Proficiency
            <button className="cursor-pointer">ADD</button>
          </li>

          <li
            className={sideTab === 5 && "document-details-head"}
            onClick={() => setSideTab(5)}
          >
            Any other Supporting <br />
            Documents
            <button className="cursor-pointer">ADD</button>
          </li>
        </ul>
      </div>
      {sideTab === 1 && (
        <div className="profile-section-personal-detail-right document-details-right">
          <div className="profile-section-personal-resume">
            <div className="personal-detail-title">
              <h4>Passport</h4>
            </div>
            <p>
              The most crucial document required to confirm your identification
              during the hiring procedure
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
                placeholder=""
                style={{ opacity: 0, visibility: "hidden" }}
                onChange={(e) => setFiles(e.target.files)}
              />
              <label className="button" htmlFor="resume-update">
                Add
              </label>
              <p>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
            </div>
          </div>
        </div>
      )}

      {sideTab === 2 && (
        <div className="profile-section-personal-detail-right document-details-right">
          <div className="profile-section-personal-resume">
            <div className="personal-detail-title">
              <h4>Identity Document</h4>
            </div>
            <p>
              The most crucial document required to confirm your identification
              during the hiring procedure
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
                placeholder=""
                style={{ opacity: 0, visibility: "hidden" }}
                onChange={(e) => setFiles(e.target.files)}
              />
              <label className="button" htmlFor="resume-update">
                Add
              </label>
              <p>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
            </div>
          </div>
        </div>
      )}
      {sideTab === 3 && (
        <div className="profile-section-personal-detail-right document-details-right">
          <div className="profile-section-personal-resume">
            <div className="personal-detail-title">
              <h4> Experience Certificate</h4>
            </div>
            <p>
              The most crucial document required to confirm your identification
              during the hiring procedure
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
                placeholder=""
                style={{ opacity: 0, visibility: "hidden" }}
                onChange={(e) => setFiles(e.target.files)}
              />
              <label className="button" htmlFor="resume-update">
                Add
              </label>
              <p>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
            </div>
          </div>
        </div>
      )}

      {sideTab === 4 && (
        <div className="profile-section-personal-detail-right document-details-right">
          <div className="profile-section-personal-resume">
            <div className="personal-detail-title">
              <h4> IELTS/ Language Proficiency</h4>
            </div>
            <p>
              The most crucial document required to confirm your identification
              during the hiring procedure
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
                placeholder=""
                style={{ opacity: 0, visibility: "hidden" }}
                onChange={(e) => setFiles(e.target.files)}
              />
              <label className="button" htmlFor="resume-update">
                Add
              </label>
              <p>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
            </div>
          </div>
        </div>
      )}

      {sideTab === 5 && (
        <div className="profile-section-personal-detail-right document-details-right">
          <div className="profile-section-personal-resume">
            <div className="personal-detail-title">
              <h4> Any other Supporting Documents</h4>
            </div>
            <p>
              The most crucial document required to confirm your identification
              during the hiring procedure
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
                placeholder=""
                style={{ opacity: 0, visibility: "hidden" }}
                onChange={(e) => setFiles(e.target.files)}
              />
              <label className="button" htmlFor="resume-update">
                Add
              </label>
              <p>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default DocumentDetails;
