import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignInOptions from "../Shared/SignInOptions";
import Modal from "../Shared/Modal";
import Auth from "../Shared/Auth";

function SignUp() {
  const [modal, setModal] = useState(false);
  // const [signupPage, setSignupPage] = useState(false);

  const showOtpModal = () => {
    setModal(true);
  };

  return (
    <div className="signup-main-cont">
      <Modal open={modal} close={setModal} />
      <Auth signinPage={true} />
      <div className="signup-input-field">
        <div className="right-signup-div1">
          <span>
            Already a member?{" "}
            <Link to="/signin" className="register-link">
              {" "}
              Sign in
            </Link>
          </span>
        </div>
        <div className="right-signup-div2">
          <h3 className="signup-header">Register Now</h3>
          <p className="signup-para">Discover your dream job here!</p>
        </div>
        <div className="right-signup-div3">
          <div className="form-div">
            <input placeholder="username" className="signup-input" />
            <input placeholder="email" className="signup-input" />
            <input placeholder="password" className="signup-input" />
            <input placeholder="confirm password" className="signup-input" />
            {/* <p style={{ fontSize: '18px', cursor: 'pointer' }}>forget password</p> */}
            <div className="signin-btn" onClick={showOtpModal}>
              Sign up
            </div>
          </div>
        </div>
        <SignInOptions />
      </div>
    </div>
  );
}

export default SignUp;
