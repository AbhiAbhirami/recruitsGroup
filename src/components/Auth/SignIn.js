import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../../core/Auth";
import { getUserByToken, login } from "../../requests/demo";
import Auth from "../Shared/Auth";
import SignInOptions from "../Shared/SignInOptions";

function SignIn() {
  const [signinPage, setSigninPage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { saveAuth, setCurrentUser } = useAuth();
  let media = window.screen.width < 600;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async () => {
    try {
      const values = {
        email: "admin@demo.com",
        password: "demo",
      };
      const { data: auth } = await login(values.email, values.password);
      saveAuth(auth);
      const { data: user } = await getUserByToken(auth.api_token);
      setCurrentUser(user);
    } catch (error) {
      console.error(error);
      saveAuth(undefined);
    }
  };

  return (
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
        {/* <<<<<<< HEAD
        <form className="right-signin-div3" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-div">
            <input placeholder="username" className="signup-input" />
            <input placeholder="password" className="signup-input" />
            <p
              style={{
                fontSize: "18px",
                cursor: "pointer",
              }}
              className="forget-password-para-tag"
            >
              <Link className="forget-password-tag" to="/auth/forgot-password"> forgot password?</Link>
            </p>
            <button type="submit" className="signin-btn">
              Sign in
            </button>
          </div>
======= */}
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
            <div style={{ width: '100%', position: 'relative', display: 'flex' }}>
              <input
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                defaultValue=""
                {...register("password", { required: true })}
                className="signup-input"
                name="password"
              />
              <i
                className={showPassword ? " fa fa-eye" : "fa fa-eye-slash"
                }
                style={{ position: 'absolute', right: 15, top: "35%" }}
                aria-hidden="true"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              ></i>
            </div>


            {errors.password && (
              <span className="validation">Password is required</span>
            )}
            {/* <p
              style={{
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              <Link to="/auth/forgot-password"> forgot password?</Link>
            </p> */}
            <p
              style={{
                fontSize: "18px",
                cursor: "pointer",
              }}
              className="forget-password-para-tag"
            >
              <Link className="forget-password-tag" to="/auth/forgot-password"> forgot password?</Link>
            </p>
            <button type="submit" className="signin-btn">
              Sign in
            </button>
            {/* >>>>>>> reusable */}
          </div>
        </form>
        <SignInOptions />
      </div>
    </div>
  );
}

export default SignIn;
