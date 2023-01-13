import React from "react";
import mail from "../../assets/images/icons/mailimg.png";
import OtpInput from "./OtpInput";

function Modal({ open }) {
  return (
    <div
      id="myModal"
      style={open ? { display: "block" } : { display: "none" }}
      className="modal"
    >
      <div className="modal-content">
        <span className="close">&times;</span>
        <div className="modal-content-all">
          <div className="modal-top top-color">
            <img className="mailimg" alt="mail icon" src={mail} />
            <span className="otp-head">OTP verification</span>
            <span className="otp-p">
              Please enter the OTP send <br />
              to your email
            </span>
          </div>
          <div className="modal-top">
            <OtpInput value={""} valueLength={4} />
            <div className="resent-div">
              <p>
                Didn't get code? <span className="resent-otp">Resend OTP</span>
              </p>
            </div>
            <div className="verify-btn">verify</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
