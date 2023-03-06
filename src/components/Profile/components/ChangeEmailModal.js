import React, { useState } from "react";
import Modal from "react-modal";
import { useEffect } from "react";
import { IoIosClose } from "react-icons/io"
import { useForm } from "react-hook-form";
import verifyImg from "../../../assets/images/icons/emailverify.svg"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: window.screen.width < 768 ? "90%" : "50%",
    padding: "0",
    zIndex: 999
  },
};

function ChangeEmailModal({ isOpen, closeModal, confirmClick, currentData }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    console.log(values);
    setConfirmModal(true)
    closeModal()
  };

  const [confirmModal, setConfirmModal] = useState(false)

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="job-modal-wrapper ed-modal skills-modal phone-verify-modal">
          <div className="modal-header p-30 "
            style={{
              display: "flex"
              , flexDirection: "column"
            }}
          >
            <div className="modal-close-btn" onClick={closeModal}>
              <IoIosClose />
            </div>
            <form className="education-form" onSubmit={handleSubmit(onSubmit)}>
              <div className=""
                style={{
                  textAlign: "center",
                  marginBottom: 25,
                }}
              >
                <h3 style={{
                  fontSize: 18,
                  marginBottom: 10,

                }} className="text-black">Change Email</h3>
                <p
                  style={{
                    fontSize: 13,
                    lineHeight: '18px',
                    marginBottom: 5,
                  }}
                >Enter the new email </p>
                <p>{currentData}</p>
              </div>

              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 10
              }}>
                <input type={'text'} name="confirm-email" placeholder="Enter New Email" className="verify-input profile-input"
                />
              </div>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 10
              }}>
                <input type={'text'} name="new-email" placeholder="Confirm email" className="verify-input profile-input"
                />
              </div>
              <div
                style={{
                  marginTop: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <button
                  type={'submit'}
                  className="button phone-verify-btn"
                >
                  UPDATE
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={confirmModal}
        onRequestClose={() => setConfirmModal(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="job-modal-wrapper ed-modal skills-modal phone-verify-modal">
          <div className="modal-header p-30 "
            style={{
              display: "flex"
              , flexDirection: "column"
            }}
          >
            <img src={verifyImg} height={200} width={"100%"} className="mb-2" />
            <p style={{ textAlign: "center", margin: "10px", fontSize: "14px", lineHeight: "18px" }}>We have sent the code verification to <br />
              Your Email Address</p>
            <div
              style={{
                marginTop: "1.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <button
                type={'button'}
                className="button phone-verify-btn"
                onClick={() => setConfirmModal(false)}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </Modal>

    </>
  );
}

export default ChangeEmailModal;
