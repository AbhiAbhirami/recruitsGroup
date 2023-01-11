import React, { useState } from "react";
import { Link } from "react-router-dom";
import bg1 from "../../assets/images/background/bg1.png";
import logo from "../../assets/images/logo/logo.png";
import SignInOptions from "../Shared/SignInOptions";

function SignIn() {
  const [signinPage, setSigninPage] = useState(false);
  let media = window.screen.width < 600;

  return (
    <div className="signup-main-cont">
      <div
        style={signinPage ? { display: "none" } : { display: "flex" }}
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
          <div className="sign-options" onClick={() => setSigninPage(true)}>
            sign in
          </div>
          <Link className="sign-options" to="/signup">
            sign up
          </Link>
        </div>
      </div>
      <div
        style={
          media
            ? !signinPage
              ? { display: "none" }
              : { display: "flex" }
            : null
        }
        className="signup-input-field"
      >
        <div className="right-signup-div1">
          <span>
            Not a member?{" "}
            <Link to="/signup" className="register-link">
              {" "}
              Register now
            </Link>
          </span>
        </div>
        <div className="right-signup-div2">
          <h3 className="signup-header">Hello Again!</h3>
          <p className="signup-para">Discover your dream job here!</p>
        </div>
        <div className="right-signup-div3">
          <input placeholder="username" className="signup-input" />
          <input placeholder="password" className="signup-input" />
          <p style={{ fontSize: "18px", cursor: "pointer" }}>forget password</p>
          <div className="signin-btn">Sign in</div>
        </div>
        <SignInOptions />
      </div>
    </div>
  );
}

export default SignIn;
