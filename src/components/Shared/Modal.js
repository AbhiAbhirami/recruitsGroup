import React from "react";
import mail from "../../assets/images/icons/mailimg.png";

function Modal({ open, submit, close, content, invalidMsg, isValid, resend, cancel }) {
  return (
    <div
      id="myModal"
      style={open ? { display: "block" } : { display: "none" }}
      className="modal"
    >
      <div className="modal-content">
        <span className="close" onClick={close}>
          &times;
        </span>
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
            {content}
            {!isValid && <span className="validation">{invalidMsg}</span>}
            <div className="resent-div">
              <p>
                Didn't get code?{" "}
                <span className="resent-otp" onClick={resend}>
                  Resend OTP
                </span>
              </p>
            </div>
            <button onClick={submit} className="verify-btn link-tag">
              verify
            </button>
            <button onClick={cancel} className="verify-btn link-tag">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
