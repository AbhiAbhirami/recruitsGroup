import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../core/Auth";
import { getUserByToken, getUserDocuments, login } from "../../requests/Auth";
// import { getUserByToken, login } from "../../requests/demo";
import { toast, ToastContainer } from "react-toastify";

import Auth from "../Shared/Auth";
import SignInOptions from "../Shared/SignInOptions";

function SignIn() {
  const [signinPage, setSigninPage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { saveAuth, setCurrentUser } = useAuth();
  const [signedUser, setSignedUser] = useState();
  const location = useLocation();
  let media = window.screen.width < 600;

  useEffect(() => {
    if (location?.state) setSignedUser(location?.state);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    try {
      const { data: auth } = await login(values.email, values.password);
      saveAuth(auth);
      const { data: user } = await getUserByToken(auth.api_token);
      setCurrentUser(user);
      const docs = await getUserDocuments(user.data.id);
      docs &&
        localStorage.setItem("user-documents", JSON.stringify(docs.data.data));
      localStorage.setItem("user-data", JSON.stringify(user.data));

      toast.success(user.message);
    } catch (error) {
      saveAuth(undefined);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <ToastContainer limit={1} draggablePercent={60} />
      <div className="signup-main-cont">
        <Auth signinPage={signinPage} setSigninPage={setSigninPage} />
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
          <form className="right-signin-div3" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-div">
              <input
                placeholder="Email"
                defaultValue=""
                {...register("email", { required: true })}
                className="signup-input"
                name="email"
              />
              {errors.email && (
                <span className="validation">Email is required</span>
              )}

              <div
                style={{ width: "100%", position: "relative", display: "flex" }}
              >
                <input
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  defaultValue={
                    signedUser && signedUser.password ? signedUser.password : ""
                  }
                  {...register("password", { required: true })}
                  className="signup-input"
                  name="password"
                />
                <i
                  className={showPassword ? " fa fa-eye" : "fa fa-eye-slash"}
                  style={{ position: "absolute", right: 15, top: "35%" }}
                  aria-hidden="true"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                ></i>
              </div>

              {errors.password && (
                <span className="validation">Password is required</span>
              )}

              <p
                style={{
                  fontSize: "18px",
                  cursor: "pointer",
                }}
                className="forget-password-para-tag"
              >
                <Link
                  className="forget-password-tag"
                  to="/auth/forgot-password"
                >
                  {" "}
                  forgot password?
                </Link>
              </p>
              <button type="submit" className="signin-btn">
                Sign in
              </button>
            </div>
          </form>
          <SignInOptions />
        </div>
      </div>
    </>
  );
}

export default SignIn;
