import React from "react";
import google from "../../assets/images/social/google.png";
import apple from "../../assets/images/social/apple.png";
import fb from "../../assets/images/social/fb.png";

function SignInOptions() {
  return (
    <div className="right-signup-div4">
      <div className="continue-with-div">
        <hr /> <span> or continue with </span> <hr />
      </div>
      <div className="signin-options-logos">
        <div className="single-login-logo">
          <img className="other-option-img" alt="google icon" src={google} />
        </div>
        <div className="single-login-logo">
          <img className="other-option-img" alt="apple icon" src={apple} />
        </div>
        <div className="single-login-logo">
          <img className="other-option-img" alt="facebook icon" src={fb} />
        </div>
      </div>
    </div>
  );
}

export default SignInOptions;
