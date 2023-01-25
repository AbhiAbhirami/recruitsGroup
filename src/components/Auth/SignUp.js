import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignInOptions from "../Shared/SignInOptions";
import Modal from "../Shared/Modal";
import Auth from "../Shared/Auth";
import { useForm } from "react-hook-form";

function SignUp() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [modal, setModal] = useState(false);

  // const [signupPage, setSignupPage] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);
  const onSubmit = (data) => {};

  const showOtpModal = () => {
    setModal(true);
  };

  return (
    <div className="signup-main-cont">
      {/* <<<<<<< HEAD */}
      <Modal open={modal} close={setModal} />
      <Auth signinPage={true} />
      {/* =======
      <Modal open={modal} />
      <Auth />
>>>>>>> reusable */}
      <div className="signup-input-field">
        <div className="right-signup-div1">
          <p className="font-size-14">
            Already a member?{" "}
            <Link to="/signin" className="register-link">
              {" "}
              Sign in
            </Link>
          </p>
        </div>
        <div className="right-signup-div2">
          <h3 className="signup-header">Register Now</h3>
          <p className="signup-para">Discover your dream job here!</p>
        </div>
        {/* <<<<<<< HEAD
        <div className="right-signup-div3">
          <div className="form-div">
            <input placeholder="username" className="signup-input" />
            <input placeholder="email" className="signup-input" />
            <input placeholder="password" className="signup-input" />
            <input placeholder="confirm password" className="signup-input" /> */}
        {/* <p style={{ fontSize: '18px', cursor: 'pointer' }}>forget password</p> */}
        {/* <div className="signin-btn" onClick={showOtpModal}>
              Sign up
            </div>
          </div>
        </div>
======= */}
        <form onSubmit={handleSubmit(onSubmit)} className="right-signup-div3">
          <div className="form-div">
            <input
              className="signup-input"
              {...register("name", { required: true })}
              placeholder="Full Name*"
            />
            {errors.name && (
              <span className="validation">Name is required</span>
            )}

            <input
              className="signup-input"
              {...register("email", { required: true })}
              placeholder="Email*"
            />
            {errors.email && (
              <span className="validation">Email is required</span>
            )}
            <input
              className="signup-input"
              {...register("password", { required: true })}
              placeholder="Password*"
            />
            {errors.password && (
              <span className="validation">Password is required</span>
            )}
            <input
              placeholder="Confirm Password*"
              className="signup-input"
              {...register("password_confirmation", { required: true })}
            />
            {errors.password_confirmation && (
              <span className="validation">Confirm Password is required</span>
            )}
            {/* <p style={{ fontSize: '18px', cursor: 'pointer' }}>forget password</p> */}
            <button className="signin-btn">Sign up</button>
          </div>
        </form>
        {/* >>>>>>> reusable */}
        <SignInOptions />
      </div>
    </div>
  );
}

export default SignUp;
