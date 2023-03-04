import React, { Fragment, useState, useEffect } from "react";
import download from "../../../assets/images/icons/download.png";
import moment from "moment";
import { getDocuments, setDocuments } from "../../../core/AuthHelpers";
import { toast, ToastContainer } from "react-toastify";
import { deleteDocument, updateUserDocument } from "../../../requests/Auth";
import ConfirmModal from "./ConfirmModal";
import { AiFillEye } from "react-icons/ai";
import { Circle } from "rc-progress";

function DocumentDetails({ user, docs, userUpdated, setIsUserUpdated }) {
  const [files, setFiles] = React.useState([]);
  const [documents, setDocumentsData] = useState(docs ? docs : "");

  const [sideTab, setSideTab] = React.useState(1);

  useEffect(() => {
    setDocumentsData(getDocuments());
  }, [userUpdated]);

  const deleteDocumentData = async (e) => {
    try {
      const documents = await deleteDocument(user.id, e.target.name);
      setDocuments(documents.data.data);
      setIsUserUpdated(true);
      toast.success(documents.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const setDocumentData = async (e) => {
    try {
      const documents = await updateUserDocument(
        user.id,
        e.target.name,
        e.target.files[0]
      );
      setDocuments(documents.data.data);
      setIsUserUpdated(true);
      toast.success(documents.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const [confirmModal, setConfirmModal] = useState({ status: false, id: "" });
  const handleModalOpen = (id) => {
    setConfirmModal({ status: true, id: id });
  };

  const handleFileChange = (e, setState) => {
    setState();
    setConfirmModal({ status: false, id: "" });
  };

  return (
    <Fragment>
      {confirmModal.status == false && <ToastContainer draggablePercent={60} />}
      <ConfirmModal
        labelId={confirmModal?.id}
        isOpen={confirmModal?.status}
        closeModal={() => setConfirmModal({ status: false, id: "" })}
      />

      <div className="profile-section-personal-detail-left document-details-left">
        <div className="personal-detail-title">
          <h4>Documents</h4>
        </div>
        <ul>
          <li
            className={sideTab === 1 ? "document-details-head" : ""}
            onClick={() => setSideTab(1)}
          >
            Passport <button className="cursor-pointer">UPDATE</button>
          </li>
          <li
            className={sideTab === 2 ? "document-details-head" : ""}
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
            <div>
              <div className="personal-detail-title">
                <h4>Passport</h4>
              </div>
              <p>
                The most crucial document required to confirm your identification
                during the hiring procedure
              </p>
            </div>
            <div>
              <div className="profile-section-personal-resume-update">
                <div>
                  {documents &&
                    documents.other_documents &&
                    documents.other_documents.passport
                    ? unescape(
                      documents.other_documents.passport.split("/").pop()
                    )
                    : "Not Updated"}
                </div>
                {documents &&
                  documents.other_documents &&
                  documents.other_documents.passport ? (
                  <div className="resume-delete">
                    <a href={documents.other_documents.passport} target="_blank">
                      <AiFillEye size={'1.4rem'} style={{ margin: "0 5px" }} />
                    </a>
                    <button
                      className="cursor-pointer"
                      name="passport"
                      onClick={(e) => {
                        deleteDocumentData(e);
                      }}
                      style={{ margin: 0 }}
                    >
                      DELETE PASSPORT
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="resume-update">
                <input
                  type={"file"}
                  id="resume-update"
                  name="passport"
                  placeholder=""
                  style={{ opacity: 0, visibility: "hidden" }}
                  onChange={(e) => handleFileChange(e, () => setDocumentData(e))}
                />
                <label
                  className="button"
                  htmlFor="resume-updat"
                  onClick={() => handleModalOpen("resume-update")}
                >
                  Add
                  <Circle style={{ height: "22px", margin: "0 10px" }} percent={60} strokeWidth={10} strokeColor="#9ad8a0" />
                </label>
                <p>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {sideTab === 2 && (
        <div className="profile-section-personal-detail-right document-details-right">
          <div className="profile-section-personal-resume">
            <div>
              <div className="personal-detail-title">
                <h4>Identity Document</h4>
              </div>
              <p>
                The most crucial document required to confirm your identification
                during the hiring procedure
              </p>
            </div>

            {/* {files[0]?.name ? ( */}
            <div>
              <div className="profile-section-personal-resume-update">
                <div>
                  RESUME.PDF{" "}
                </div>
                <div className="resume-delete">
                  <a href="#">
                    <AiFillEye size={'1.4rem'} />
                  </a>
                  <button className="cursor-pointer" style={{ marginTop: -2 }}>DELETE DOCUMENT </button>
                </div>
              </div>

              <div className="resume-update">
                <input
                  type={"file"}
                  id="resume-update"
                  placeholder=""
                  style={{ opacity: 0, visibility: "hidden" }}
                  onChange={(e) =>
                    handleFileChange(e, () => setFiles(e.target.files))
                  }
                />
                <label
                  className="button"
                  htmlFor="resume-updat"
                  onClick={() => handleModalOpen("resume-update")}
                >
                  Add
                  <Circle style={{ height: "22px", margin: "0 10px" }} percent={60} strokeWidth={10} strokeColor="#9ad8a0" />
                </label>
                <p>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {sideTab === 3 && (
        <div className="profile-section-personal-detail-right document-details-right">
          <div className="profile-section-personal-resume">
            <div>
              <div className="personal-detail-title">
                <h4> Experience Certificate</h4>
              </div>
              <p>
                The most crucial document required to confirm your identification
                during the hiring procedure
              </p>
            </div>

            <div>
              <div className="profile-section-personal-resume-update">
                <div>RESUME.PDF</div>
                <div className="resume-delete">
                  <a href="#">
                    <AiFillEye size={'1.4rem'} />
                  </a>
                  <button className="cursor-pointer"  >DELETE CERTIFICATE</button>
                </div>
              </div>

              <div className="resume-update">
                <input
                  type={"file"}
                  id="resume-update"
                  placeholder=""
                  style={{ opacity: 0, visibility: "hidden" }}
                  onChange={(e) =>
                    handleFileChange(e, () => setFiles(e.target.files))
                  }
                />
                <label
                  className="button"
                  htmlFor="resume-updat"
                  onClick={() => handleModalOpen("resume-update")}
                >
                  Add
                  <Circle style={{ height: "22px", margin: "0 10px" }} percent={60} strokeWidth={10} strokeColor="#9ad8a0" />
                </label>
                <p>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {sideTab === 4 && (
        <div className="profile-section-personal-detail-right document-details-right">
          <div className="profile-section-personal-resume">
            <div>
              <div className="personal-detail-title">
                <h4> IELTS/ Language Proficiency</h4>
              </div>
              <p>
                The most crucial document required to confirm your identification
                during the hiring procedure
              </p>
            </div>
            <div>
              <div className="profile-section-personal-resume-update">
                <div>
                  {documents &&
                    documents.other_documents &&
                    documents.other_documents.ielts
                    ? unescape(documents.other_documents.ielts.split("/").pop())
                    : "Not Updated"}
                </div>
                {documents &&
                  documents.other_documents &&
                  documents.other_documents.ielts ? (
                  <div className="resume-delete">
                    <a href={documents.other_documents.ielts} target="_blank">
                      <AiFillEye size={'1.4rem'} />
                    </a>
                    <button
                      className="cursor-pointer"
                      name="ielts"
                      onClick={(e) => {
                        deleteDocumentData(e);
                      }}
                      style={{ marginBottom: 0 }}
                    >
                      DELETE DOCUMENT
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="resume-update">
                <input
                  type={"file"}
                  id="resume-update"
                  name="ielts"
                  placeholder=""
                  style={{ opacity: 0, visibility: "hidden" }}
                  onChange={(e) => handleFileChange(e, () => setDocumentData(e))}
                />
                <label
                  className="button"
                  htmlFor="resume-updat"
                  onClick={() => handleModalOpen("resume-update")}
                >
                  Add
                  <Circle style={{ height: "22px", margin: "0 10px" }} percent={60} strokeWidth={10} strokeColor="#9ad8a0" />
                </label>
                <p>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {sideTab === 5 && (
        <div className="profile-section-personal-detail-right document-details-right">
          <div className="profile-section-personal-resume">
            <div>
              <div className="personal-detail-title">
                <h4> Any other Supporting Documents</h4>
              </div>
              <p>
                The most crucial document required to confirm your identification
                during the hiring procedure
              </p>
            </div>
            <div>
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
                    <a href="#">
                      <AiFillEye size={'1.4rem'} />
                    </a>
                    <button className="cursor-pointer">DELETE DOCUMENT</button>
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
                  onChange={(e) =>
                    handleFileChange(e, () => setFiles(e.target.files))
                  }
                />
                <label
                  className="button"
                  htmlFor="resume-updat"
                  onClick={() => handleModalOpen("resume-update")}
                >
                  Add
                  <Circle style={{ height: "22px", margin: "0 10px" }} percent={60} strokeWidth={10} strokeColor="#9ad8a0" />
                </label>
                <p>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default DocumentDetails;
