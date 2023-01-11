import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignInOptions from "../Shared/SignInOptions";
import bg1 from "../../assets/images/background/bg1.png";
import logo from "../../assets/images/logo/logo.png";
import Modal from "../Shared/Modal";
import OtpInput from "../Shared/OtpInput";

function SignUp() {
  const [modal, setModal] = useState(false);
  let media = window.screen.width < 600;
  const showOtpModal = () => {
    setModal(true);
  };

  return (
    <div className="signup-main-cont">
      <Modal open={modal} />
      <div
        style={media ? { display: "none" } : { display: "flex" }}
        id="signup-mobile"
        className="signup-image-sec"
      >
        <div className="left-logo-cont">
          <img className="logo-img" src={logo} />
        </div>
        <div className="left-bg-cont">
          <img className="signup-bg-img" src={bg1} />
          <div className="signup-logo-text-cont">
            <h5 className="sign-head">
              Tap, connect <br />
              and be hired.
            </h5>
            <span className="sign-p">
              Explore of the most exiting jobs roles based on your intrest and
              study major
            </span>
          </div>
        </div>
        <div className="mobile-only-options-div">
          <div className="sign-options">sign in</div>
          <div className="sign-options">sign up</div>
        </div>
      </div>
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
          <input placeholder="username" className="signup-input" />
          <input placeholder="email" className="signup-input" />
          <input placeholder="password" className="signup-input" />
          <input placeholder="confirm password" className="signup-input" />
          {/* <p style={{ fontSize: '18px', cursor: 'pointer' }}>forget password</p> */}
          <div className="signin-btn" onClick={showOtpModal}>
            Sign up
          </div>
        </div>
        <SignInOptions />
      </div>
    </div>
  );
}

export default SignUp;
