import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../Shared/Auth";
import SignInOptions from "../Shared/SignInOptions";

function SignIn() {
  const [signinPage, setSigninPage] = useState(false);
  let media = window.screen.width < 600;

  return (
    <div className="signup-main-cont">
      <Auth />
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
            <Link to="/auth/sign-up" className="register-link">
              {" "}
              Register now
            </Link>
          </span>
        </div>
        <div className="right-signup-div2">
          <h3 className="signup-header">Hello Again!</h3>
          <p className="signup-para">Discover your dream job here!</p>
        </div>
        <form className="right-signup-div3">
          <input placeholder="username" className="signup-input" />
          <input placeholder="password" className="signup-input" />
          <p
            style={{
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            <Link to="/auth/forgot-password"> forgot password?</Link>
          </p>
          <div className="signin-btn">Sign in</div>
        </form>
        <SignInOptions />
      </div>
    </div>
  );
}

export default SignIn;
