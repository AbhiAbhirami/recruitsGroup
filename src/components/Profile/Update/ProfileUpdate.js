import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { toast } from "react-toastify";
import closebtn from "../../../assets/images/icons/close.png";
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

function ProfileUpdate({ isOpen, closeModal, user }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    console.log(values);
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img
          src={closebtn}
          height={25}
          alt="close-modal"
          className="modal-close-btn"
          onClick={closeModal}
        />
        <div className="modal-main-wrapper">
          <p>Personal Details</p>
          <form onSubmit={handleSubmit(onSubmit)}>
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

            {/* <ProfileInput
              placeholder="Enter your Full Name"
              label="Full Name"
              type="text"
            /> */}
            <div className="date-input-wrap">
              <ProfileInput
                placeholder="Day"
                label="Date of birth"
                type="select"
                options={[
                  { title: "Day 1", value: 1 },
                  { title: "Day 2", value: 1 },
                ]}
              />
              <ProfileInput
                placeholder="Month"
                label={null}
                type="select"
                options={[
                  { title: "Month", value: 1 },
                  { title: "Month 2", value: 1 },
                ]}
              />
              <ProfileInput
                placeholder="Year"
                label={null}
                type="select"
                options={[
                  { title: "Year", value: 1 },
                  { title: "Year 2", value: 1 },
                ]}
              />
            </div>

            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input
              className="profile-input"
              placeholder="Enter your Email"
              type="email"
              defaultValue={user.email ? user.email : ""}
              {...register("email", { required: true })}
              name="email"
            />
            <div>
              {errors.email && (
                <span className="validation">{`Email is ${errors.email.type}`}</span>
              )}
            </div>
            {/* <ProfileInput
              label={"Email"}
              placeholder="Enter your email"
              type="email"
              defaultValue={user.email ? user.email : ""}
              {...register("email", { required: true })}
              name="email"
            /> */}

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

            {/* <ProfileInput
              label={"Contact Number"}
              placeholder="Enter your Contact Number"
              type="number"
            /> */}
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
            {/* <ProfileInput
              label={"Position"}
              placeholder="Enter your Position"
              type="text"
            /> */}
            <label htmlFor="address" className="input-label">
              Address
            </label>
            <input
              className="profile-input"
              placeholder="Enter your Address"
              type="text"
              defaultValue={user.address ? user.address : ""}
              {...register("address")}
              name="address"
            />
            {/* <ProfileInput
              label={"Address"}
              placeholder="Enter your Address"
              type="text"
            /> */}
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
            {/* <ProfileInput
              label={"Current Company"}
              placeholder="Enter your Current Company"
              type="text"
            /> */}
            <label htmlFor="language" className="input-label">
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
            {/* <ProfileInput
              label={"Language"}
              placeholder="Enter your Language"
              type="text"
            /> */}
            {/* <ProfileInput
              label={"Time Zone"}
              placeholder="Enter your Time Zone"
              type="text"
            /> */}
            {/* <ProfileInput
              label={"Currency"}
              placeholder="Enter your Time Zone"
              type="text"
            /> */}

            <div className="modal-buttons">
              <button className="cancel-btn">CANCEL</button>
              <button className="save-btn" type="submit">
                SAVE
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default ProfileUpdate;
