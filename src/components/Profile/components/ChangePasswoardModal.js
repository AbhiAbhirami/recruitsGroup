import React, { useState } from "react";
import Modal from "react-modal";
import { useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { set, useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash, FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { updateCurrentPassword } from "../../../store/reducers/settingsReducer";

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
    zIndex: 999,
  },
};

function ChangePasswoardModal({
  isOpen,
  closeModal,
  confirmClick,
  currentData,
}) {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => ({
    loading: state.settings.loading,
  }));

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const formSchema = Yup.object().shape({
    currentPassword: Yup.string().required("Current Password is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords do not match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (values) => {
    console.log(values);
    const credentials = {
      password: values?.password,
      closeModal: closeModal(),
    };
    dispatch(updateCurrentPassword(credentials));
  };

  const [showPassword, setShowPassword] = useState(false);

  console.log("data :", errors);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="job-modal-wrapper ed-modal skills-modal phone-verify-modal">
          <div
            className="modal-header p-30 "
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="modal-close-btn" onClick={closeModal}>
              <IoIosClose />
            </div>
            <form className="education-form" onSubmit={handleSubmit(onSubmit)}>
              <div
                className=""
                style={{
                  textAlign: "center",
                  marginBottom: 25,
                }}
              >
                <h3
                  style={{
                    fontSize: 18,
                    marginBottom: 10,
                  }}
                  className="text-black"
                >
                  Change Password
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    lineHeight: "18px",
                    marginBottom: 5,
                  }}
                >
                  Enter the new password{" "}
                </p>
                <p>{currentData}</p>
              </div>

              <div style={inputStyle}>
                <input
                  type={"text"}
                  name="currentPassword"
                  {...register("currentPassword", { required: true })}
                  placeholder="Enter Old Password"
                  className="verify-input profile-input"
                />
                {errors.currentPassword && (
                  <p
                    className="validation"
                    style={{
                      fontSize: 12,
                      color: "red",
                      marginBottom: 10,
                      marginTop: 10,
                    }}
                  >
                    {errors.currentPassword?.message}
                  </p>
                )}
              </div>
              <div style={inputStyle}>
                <input
                  name="new-password"
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Enter New Password"
                  className="verify-input profile-input"
                />
                {errors.password && (
                  <p
                    className="validation"
                    style={{
                      fontSize: 12,
                      color: "red",
                      marginBottom: 10,
                      marginTop: 10,
                    }}
                  >
                    {errors.password?.message}
                  </p>
                )}
              </div>
              <div style={inputStyle}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  {...register("confirmPassword", { required: true })}
                  placeholder="Confirm Password"
                  className="verify-input profile-input"
                />
                <div
                  style={{
                    position: "absolute",
                    right: 10,
                    top: 22,
                  }}
                >
                  {showPassword && (
                    <FaRegEyeSlash onClick={() => setShowPassword(false)} />
                  )}
                  {!showPassword && (
                    <FaRegEye onClick={() => setShowPassword(true)} />
                  )}
                </div>
                {errors.confirmPassword && (
                  <p
                    className="validation"
                    style={{
                      fontSize: 12,
                      color: "red",
                      marginBottom: 10,
                      marginTop: 10,
                    }}
                  >
                    {errors.confirmPassword?.message}
                  </p>
                )}
              </div>

              <div
                style={{
                  marginTop: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button type={"submit"} className="button phone-verify-btn">
                  UPDATE
                  {loading && (
                    <FaSpinner
                      className="spinner"
                      style={{ margin: "0 4px" }}
                    />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ChangePasswoardModal;

const inputStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // marginBottom: 10,
  position: "relative",
  width: "fit-content",
  margin: "auto",
  minWidth: "300px",
  flexDirection: "column",
};
