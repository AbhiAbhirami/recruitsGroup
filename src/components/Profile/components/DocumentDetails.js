import React, { Fragment, useState, useEffect } from "react";
import moment from "moment";
import { getDocuments, setDocuments } from "../../../core/AuthHelpers";
import { toast, ToastContainer } from "react-toastify";
import { deleteDocument, updateUserDocument } from "../../../requests/Auth";
import ConfirmModal from "./confirmModal";
import { Circle } from "rc-progress";
import { FaSpinner } from "react-icons/fa";
import DeleteModal from "./DeleteModal";
import { useFileTypeRestrict } from "../../../assets/hooks/useFileTypeRestrict";

function DocumentDetails({ user, docs, userUpdated, setIsUserUpdated }) {
  const [otherDocument, setOtherDocument] = React.useState([]);
  const [experience, setExperience] = React.useState([]);

  const [documents, setDocumentsData] = useState(docs ? docs : "");
  const [uploadPercent, setUploadPercent] = useState(0);
  const [sideTab, setSideTab] = React.useState(1);

  useEffect(() => {
    setDocumentsData(getDocuments());
  }, [userUpdated]);

  // const handleDocumentFiles = (e) => {
  //   const array = Array.from(e)?.map((i) => i);
  //   setFiles(array);
  // };
  console.log("data :", otherDocument);

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

  const [docRestrict, setDocRestrict] = useState();
  const { fileTypeError, isSuccess } = useFileTypeRestrict(
    docRestrict?.target.files,
    "doc,docx,rtf,pdf",
    "2044",
    "2MB"
  );

  useEffect(() => {
    const handleUploadDocumentData = async (e) => {
      if (isSuccess) {
        try {
          let percent = 0;
          const options = {
            onUploadProgress: (progressEvent) => {
              const { loaded, total } = progressEvent;
              percent = Math.floor((loaded * 100) / total);
              setUploadPercent(percent);
              if (percent == 100) {
                setUploadPercent(0);
              }
            },
          };
          const documents = await updateUserDocument(
            user.id,
            e.target.name,
            e.target.files[0],
            options
          );
          setDocuments(documents.data.data);
          if (e.target.name === "otherDocument") {
            setOtherDocument([...otherDocument, e?.target?.files[0]]);
          }
          if (e.target.name === "experience") {
            setExperience([...experience, e?.target?.files[0]]);
          }
          setIsUserUpdated(true);
          toast.success(documents.data.message);
        } catch (error) {
          toast.error(error.response.data.message);
        }
      } else {
        toast.error(fileTypeError);
      }
    };
    handleUploadDocumentData(docRestrict);
  }, [fileTypeError, isSuccess]);

  const handleUploadDocumentData = async (e) => {
    setDocRestrict(e);
  };

  const [confirmModal, setConfirmModal] = useState({ status: false, id: "" });

  const handleModalOpen = (id) => {
    setConfirmModal({ status: true, id: id });
  };

  const handleFileChange = (e, setState) => {
    setState();
    setConfirmModal({ status: false, id: "" });
  };

  const loading = false;

  const [deleteConfirm, setDeleteConfirm] = useState({
    status: false,
    func: () => {},
  });

  const closeModal = () => {
    setDeleteConfirm({ status: false, func: () => {} });
  };

  const handleDelete = () => {
    deleteConfirm.func();
    closeModal();
  };

  return (
    <Fragment>
      <DeleteModal
        onDelete={handleDelete}
        isOpen={deleteConfirm?.status}
        closeModal={closeModal}
        loading={loading}
      />

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
            Passport
            {/* <button className="cursor-pointer">UPDATE</button> */}
          </li>
          <li
            className={sideTab === 2 ? "document-details-head" : ""}
            onClick={() => setSideTab(2)}
          >
            Identity Document <br />
            (National Id)
            {/* <button className="cursor-pointer">ADD</button>{" "} */}
          </li>

          <li
            className={sideTab === 3 && "document-details-head"}
            onClick={() => setSideTab(3)}
          >
            Experience Certificate{" "}
            {/* <button className="cursor-pointer">ADD</button> */}
          </li>
          <li
            className={sideTab === 4 && "document-details-head"}
            onClick={() => setSideTab(4)}
          >
            IELTS/ <br />
            Language Proficiency
            {/* <button className="cursor-pointer">ADD</button> */}
          </li>

          <li
            className={sideTab === 5 && "document-details-head"}
            onClick={() => setSideTab(5)}
          >
            Any other Supporting <br />
            Documents
            {/* <button className="cursor-pointer">ADD</button> */}
          </li>
        </ul>
      </div>

      {sideTab === 1 && (
        <div className="profile-section-personal-detail-right min-height document-details-right">
          <div className="profile-section-personal-resume min-height">
            <div>
              <div className="personal-detail-title">
                <h4>Passport</h4>
              </div>
              <p>
                The most crucial document required to confirm your
                identification during the hiring procedure
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
                    <a
                      href={documents.other_documents.passport}
                      target="_blank"
                    >
                      <i
                        className="fa-regular fa-eye"
                        style={{ fontSize: "1.2rem" }}
                      ></i>
                    </a>
                    <button
                      className="cursor-pointer"
                      name="passport"
                      onClick={(e) => {
                        setDeleteConfirm({
                          status: true,
                          func: () => deleteDocumentData(e),
                        });
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
                  onChange={(e) =>
                    handleFileChange(e, () => handleUploadDocumentData(e))
                  }
                />
                <label
                  className="button"
                  htmlFor="resume-updat"
                  onClick={() => handleModalOpen("resume-update")}
                >
                  Add
                  {uploadPercent > 0 && (
                    <FaSpinner
                      className="spinner"
                      style={{ margin: "0 4px" }}
                    />
                  )}
                  {/* {uploadPercent > 0 && uploadPercent !== 100 && (
                    <Circle
                      style={{ height: "22px", margin: "0 10px" }}
                      percent={uploadPercent}
                      strokeWidth={10}
                      strokeColor="#9ad8a0"
                    />
                  )} */}
                </label>
                <p>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {sideTab === 2 && (
        <div className="profile-section-personal-detail-right min-height document-details-right">
          <div className="profile-section-personal-resume min-height">
            <div>
              <div className="personal-detail-title">
                <h4>Identity Document</h4>
              </div>
              <p>
                The most crucial document required to confirm your
                identification during the hiring procedure
              </p>
            </div>

            <div>
              <div className="profile-section-personal-resume-update">
                <div>
                  {documents?.other_documents.identity
                    ? unescape(
                        documents?.other_documents?.identity.split("/").pop()
                      )
                    : "Not Updated"}
                </div>
                {documents &&
                documents?.other_documents &&
                documents?.other_documents.identity ? (
                  <div className="resume-delete">
                    <a href="#">
                      <i
                        className="fa-regular fa-eye"
                        style={{ fontSize: "1.2rem" }}
                      ></i>
                    </a>
                    <button
                      className="cursor-pointer"
                      name="identity"
                      onClick={(e) => {
                        setDeleteConfirm({
                          status: true,
                          func: () => deleteDocumentData(e),
                        });
                      }}
                      style={{ marginTop: -2 }}
                    >
                      DELETE DOCUMENT{" "}
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
                  name="identity"
                  placeholder=""
                  style={{ opacity: 0, visibility: "hidden" }}
                  onChange={(e) =>
                    handleFileChange(e, () => handleUploadDocumentData(e))
                  }
                />
                <label
                  className="button"
                  htmlFor="resume-updat"
                  onClick={() => handleModalOpen("resume-update")}
                >
                  Add
                  {uploadPercent > 0 && uploadPercent !== 100 && (
                    <FaSpinner
                      className="spinner"
                      style={{ margin: "0 4px" }}
                    />
                  )}
                </label>
                <p>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {sideTab === 3 && (
        <div className="profile-section-personal-detail-right min-height document-details-right">
          <div className="profile-section-personal-resume min-height">
            <div>
              <div className="personal-detail-title">
                <h4> Experience Certificate</h4>
              </div>
              <p>
                The most crucial document required to confirm your
                identification during the hiring procedure
              </p>
            </div>

            <div>
              <div className="profile-section-personal-resume-update">
                <div>
                  {documents?.other_documents.experience
                    ? unescape(
                        documents?.other_documents.experience.split("/").pop()
                      )
                    : "Not Updated"}
                </div>
                {experience?.length > 0 &&
                  experience?.map((file, key) => (
                    <div
                      className="profile-section-personal-resume-update"
                      key={key}
                    >
                      <div>
                        {file?.name} -{" "}
                        <span>
                          Updated on{" "}
                          {moment(file?.lastModified).format("DD-MM-YYYY")}
                        </span>
                      </div>
                      <div className="resume-delete">
                        <a
                          // href={file?.name}
                          href={"!#"}
                        >
                          <i
                            className="fa-regular fa-eye"
                            style={{ fontSize: "1.2rem" }}
                          ></i>
                        </a>
                        <button
                          className="cursor-pointer"
                          name="other_documents"
                          onClick={(e) => {
                            setDeleteConfirm({
                              status: true,
                              func: () => deleteDocumentData(e),
                            });
                          }}
                        >
                          DELETE DOCUMENT
                        </button>
                      </div>
                    </div>
                  ))}
                {/* {documents &&
                documents?.other_documents &&
                documents?.other_documents.experience ? (
                  <div className="resume-delete">
                    <a href="#">
                      <i
                        className="fa-regular fa-eye"
                        style={{ fontSize: "1.2rem" }}
                      ></i>
                    </a>
                    <button
                      className="cursor-pointer"
                      name="experience"
                      onClick={(e) => {
                        setDeleteConfirm({
                          status: true,
                          func: () => deleteDocumentData(e),
                        });
                      }}
                    >
                      DELETE CERTIFICATE
                    </button>
                  </div>
                ) : (
                  ""
                )} */}
              </div>

              <div className="resume-update">
                <input
                  type={"file"}
                  id="resume-update"
                  placeholder=""
                  name="experience"
                  style={{ opacity: 0, visibility: "hidden" }}
                  onChange={(e) =>
                    handleFileChange(e, () => handleUploadDocumentData(e))
                  }
                />
                <label
                  className="button"
                  htmlFor="resume-updat"
                  onClick={() => handleModalOpen("resume-update")}
                >
                  Add
                  {uploadPercent > 0 && uploadPercent !== 100 && (
                    <FaSpinner
                      className="spinner"
                      style={{ margin: "0 4px" }}
                    />
                  )}
                </label>
                <p>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {sideTab === 4 && (
        <div className="profile-section-personal-detail-right min-height document-details-right">
          <div className="profile-section-personal-resume min-height">
            <div>
              <div className="personal-detail-title">
                <h4> IELTS/ Language Proficiency</h4>
              </div>
              <p>
                The most crucial document required to confirm your
                identification during the hiring procedure
              </p>
            </div>
            <div>
              <div className="profile-section-personal-resume-update">
                <div>
                  {documents &&
                  documents?.other_documents &&
                  documents?.other_documents.ielts
                    ? unescape(documents.other_documents.ielts.split("/").pop())
                    : "Not Updated"}
                </div>
                {documents &&
                documents?.other_documents &&
                documents?.other_documents.ielts ? (
                  <div className="resume-delete">
                    <a href={documents.other_documents.ielts} target="_blank">
                      {/* <AiFillEye size={'1.4rem'} /> */}
                      <i
                        className="fa-regular fa-eye"
                        style={{ fontSize: "1.2rem" }}
                      ></i>
                    </a>
                    <button
                      className="cursor-pointer"
                      name="ielts"
                      onClick={(e) => {
                        setDeleteConfirm({
                          status: true,
                          func: () => deleteDocumentData(e),
                        });
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
                  onChange={(e) =>
                    handleFileChange(e, () => handleUploadDocumentData(e))
                  }
                />
                <label
                  className="button"
                  htmlFor="resume-updat"
                  onClick={() => handleModalOpen("resume-update")}
                >
                  Add
                  {uploadPercent > 0 && uploadPercent !== 100 && (
                    <FaSpinner
                      className="spinner"
                      style={{ margin: "0 4px" }}
                    />
                  )}
                </label>
                <p>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {sideTab === 5 && (
        <div className="profile-section-personal-detail-right min-height document-details-right">
          <div className="profile-section-personal-resume min-height">
            <div>
              <div className="personal-detail-title">
                <h4> Any other Supporting Documents</h4>
              </div>
              <p>
                The most crucial document required to confirm your
                identification during the hiring procedure
              </p>
            </div>
            <div>
              {otherDocument?.length > 0 &&
                otherDocument?.map((file, key) => (
                  <div
                    className="profile-section-personal-resume-update"
                    key={key}
                  >
                    <div>
                      {file?.name} -{" "}
                      <span>
                        Updated on{" "}
                        {moment(file?.lastModified).format("DD-MM-YYYY")}
                      </span>
                    </div>
                    <div className="resume-delete">
                      <a href="!#">
                        <i
                          className="fa-regular fa-eye"
                          style={{ fontSize: "1.2rem" }}
                        ></i>
                      </a>
                      <button
                        className="cursor-pointer"
                        name="other_documents"
                        onClick={(e) => {
                          setDeleteConfirm({
                            status: true,
                            func: () => deleteDocumentData(e),
                          });
                        }}
                      >
                        DELETE DOCUMENT
                      </button>
                    </div>
                  </div>
                ))}

              <div className="resume-update">
                <input
                  type={"file"}
                  id="resume-update"
                  placeholder=""
                  style={{ opacity: 0, visibility: "hidden" }}
                  // onChange={(e) =>
                  //   handleFileChange(e, () =>
                  //     handleDocumentFiles(e.target.files)
                  //   )
                  // }
                  name="other_documents"
                  onChange={(e) =>
                    handleFileChange(e, () => handleUploadDocumentData(e))
                  }
                  // multiple
                />
                <label
                  className="button"
                  htmlFor="resume-updat"
                  onClick={() => handleModalOpen("resume-update")}
                >
                  Add
                  {uploadPercent > 0 && uploadPercent !== 100 && (
                    <FaSpinner
                      className="spinner"
                      style={{ margin: "0 4px" }}
                    />
                  )}
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
