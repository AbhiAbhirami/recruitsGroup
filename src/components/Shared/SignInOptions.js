import React, { useEffect, useState } from "react";
import google from "../../assets/images/social/google.png";
import apple from "../../assets/images/social/apple.png";
import fb from "../../assets/images/social/fb.png";
import { useGoogleLogin } from "@react-oauth/google";
import { getUserByToken, googleLogin } from "../../requests/Auth";
import { useAuth } from "../../core/Auth";

import { toast, ToastContainer } from "react-toastify";

function SignInOptions() {
  const { saveAuth, setCurrentUser } = useAuth();
  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      try {
        debugger;
        const { data: auth } = await googleLogin(codeResponse);
        saveAuth(auth);
        const { data: user } = await getUserByToken(auth.api_token);
        setCurrentUser(user);
        toast.success(user.message + "✔");
      } catch (error) {
        saveAuth(undefined);
        toast.error(error.response.data.message + "❌");
      }
    },
    flow: "auth-code",
  });

  return (
    <>
      <ToastContainer limit={1} draggablePercent={60} />
      <div className="right-signup-div4">
        <div className="continue-with-div">
          <hr /> <span> or continue with </span> <hr />
        </div>
        <div className="signin-options-logos">
          <div className="single-login-logo" onClick={() => login()}>
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
    </>
  );
}

export default SignInOptions;
