import React from "react";
import bg1 from "../../assets/images/background/bg1.png";
import logo from "../../assets/images/logo/logo.png";

function Auth() {
  let media = window.screen.width < 600;
  return (
    <div
      style={media ? { display: "none" } : { display: "flex" }}
      id="signup-mobile"
      className="signup-image-sec"
    >
      <div className="left-logo-cont">
        <img className="logo-img" alt="logo" src={logo} />
      </div>
      <div className="left-bg-cont">
        <img className="signup-bg-img" alt="background" src={bg1} />
        <div className="signup-logo-text-cont">
          <h5 className="sign-head">
            Tap, connect <br />
            and be hired.
          </h5>
          <span className="sign-p">
            Explore of the most exiting jobs roles based on your interests and
            study major
          </span>
        </div>
      </div>
      <div className="mobile-only-options-div">
        <div className="sign-options">sign in</div>
        <div className="sign-options">sign up</div>
      </div>
    </div>
  );
}

export default Auth;
