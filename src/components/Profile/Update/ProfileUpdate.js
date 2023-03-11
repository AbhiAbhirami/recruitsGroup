import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoIosClose } from "react-icons/io";
import Modal from "react-modal";
import { toast, ToastContainer } from "react-toastify";
import closebtn from "../../../assets/images/icons/close.png";
import { getUser, setUser } from "../../../core/AuthHelpers";
import { updateUser } from "../../../requests/Auth";
import ProfileInput from "./ProfileInput";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
  },
};

function ProfileUpdate({ isOpen, closeModal, user, setIsUserUpdated }) {
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
    date_of_birth: user.date_of_birth ? user.date_of_birth : "",
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
    closeModal();
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="job-modal-wrapper ed-modal">
          <div
            className="modal-header p-10 "
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="modal-close-btn" onClick={closeModal}>
              <IoIosClose />
            </div>
            <div className="modal-main-wrapper">
              <p>Personal Details</p>
              <form
                className="education-form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="input-col-6">
                  <div>
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
                  </div>
                  <div>
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
                  </div>
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

                <label htmlFor="date_of_birth" className="input-label">
                  Date of Birth
                </label>
                <input
                  className="profile-input"
                  placeholder="Enter DOB (dd/mm/yyyy)"
                  type="text"
                  {...register("date_of_birth")}
                  name="date_of_birth"
                />

                <label htmlFor="company" className="input-label">
                  Current Company
                </label>
                <input
                  className="profile-input"
                  placeholder="Enter your current company"
                  type="text"
                  defaultValue={user.company ? user.company : ""}
                  {...register("company")}
                  name="company"
                />

                <div className="input-col-6">
                  <div>
                    <label htmlFor="country" className="input-label">
                      Country
                    </label>
                    <input
                      className="profile-input"
                      placeholder="Enter your country"
                      type="text"
                      defaultValue={user.country ? user.country : ""}
                      {...register("country")}
                      name="country"
                    />
                  </div>

                  <div>
                    <label htmlFor="country" className="input-label">
                      Language
                    </label>
                    <input
                      className="profile-input"
                      placeholder="Enter your language"
                      type="text"
                      defaultValue={user.language ? user.language : ""}
                      {...register("language")}
                      name="language"
                    />
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "2rem",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <button
                    style={{
                      height: 38,
                      marginRight: 10,
                      padding: "10px 20px",
                      border: "none",
                      color: "#4892f0",
                      backgroundColor: "transparent",
                    }}
                    className=""
                    onClick={() => resetForm()}
                  >
                    Cancel
                  </button>
                  <button
                    style={{
                      height: 38,
                      padding: "10px 20px",
                      border: "none",
                      backgroundColor: "#4892f0",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                    type={"submit"}
                    className="button"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ProfileUpdate;
