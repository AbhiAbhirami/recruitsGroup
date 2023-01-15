import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../../core/Auth";
import { getUserByToken, login } from "../../requests/Auth";
// import { getUserByToken, login } from "../../requests/demo";\
import toast, { Toaster } from "react-hot-toast";
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

  const onSubmit = async (values) => {
    try {
      const { data: auth } = await login(values.email, values.password);
      saveAuth(auth);
      const { data: user } = await getUserByToken(auth.api_token);
      setCurrentUser(user);
      toast.success(user.message);
    } catch (error) {
      console.error(error);
      saveAuth(undefined);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={true} />
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
          <form className="right-signup-div3" onSubmit={handleSubmit(onSubmit)}>
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

            <input
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              defaultValue=""
              {...register("password", { required: true })}
              className="signup-input"
              name="password"
            />
            <i
              className={showPassword ? " fa fa-eye" : "fa fa-eye-slash"}
              style={{ cursor: "pointer" }}
              aria-hidden="true"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            ></i>

            {errors.password && (
              <span className="validation">Password is required</span>
            )}
            <p
              style={{
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              <Link to="/auth/forgot-password"> forgot password?</Link>
            </p>
            <button type="submit" className="signin-btn">
              Sign in
            </button>
          </form>
          <SignInOptions />
        </div>
      </div>
    </>
  );
}

export default SignIn;
