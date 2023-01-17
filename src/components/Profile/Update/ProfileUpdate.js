import React from "react";
import Modal from "react-modal";
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
  },
};

function ProfileUpdate({ isOpen, closeModal }) {
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
          <form onSubmit={""}>
            <ProfileInput
              placeholder="Enter your Full Name"
              label="Full Name"
              type="text"
            />
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
            <ProfileInput
              label={"Email"}
              placeholder="Enter your email"
              type="email"
            />
            <ProfileInput
              label={"Contact Number"}
              placeholder="Enter your Contact Number"
              type="number"
            />
            <ProfileInput
              label={"Position"}
              placeholder="Enter your Position"
              type="text"
            />
            <ProfileInput
              label={"Address"}
              placeholder="Enter your Address"
              type="text"
            />
            <ProfileInput
              label={"Current Company"}
              placeholder="Enter your Current Company"
              type="text"
            />
            <ProfileInput
              label={"Language"}
              placeholder="Enter your Language"
              type="text"
            />
            <ProfileInput
              label={"Time Zone"}
              placeholder="Enter your Time Zone"
              type="text"
            />
            <ProfileInput
              label={"Currency"}
              placeholder="Enter your Time Zone"
              type="text"
            />

            <div className="modal-buttons">
              <button className="cancel-btn">CANCEL</button>
              <button className="save-btn">SAVE</button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default ProfileUpdate;
