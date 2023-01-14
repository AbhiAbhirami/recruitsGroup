import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignInOptions from "../Shared/SignInOptions";
import Modal from "../Shared/Modal";
import Auth from "../Shared/Auth";
import { useForm } from "react-hook-form";
import { resendOtp, signUp, verifyEmailOtp } from "../../requests/Auth";
import OtpInput from "../Shared/OtpInput";
import { toast, Toaster } from "react-hot-toast";
import { useAuth } from "../../core/Auth";

function SignUp() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const { saveAuth, setCurrentUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);

  const [isValid, setIsValid] = useState(true);
  const [invalidMsg, setInvalidMsg] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const toggle = () => {
    setModal(!modal);
  };

  const otpData = (value) => {
    setIsValid(true);
    setInvalidMsg("");
    setOtp(value);
  };

  const submitOtp = async () => {
    try {
      let verifyOtp;
      if (!otp) {
        setIsValid(false);
        setInvalidMsg("Otp is required");
      } else {
        verifyOtp = await verifyEmailOtp(otp, email);
      }
      if (verifyOtp.data?.data) {
        toast.success("Registration Successful");
        setModal(false);
        navigate("/auth/login");
      }
    } catch (error) {
      setIsValid(false);
      setInvalidMsg(error.response.data.message);
    }
  };

  const ResendOtp = async () => {
    await resendOtp(email, "");
  };

  const onSubmit = async (data) => {
    try {
      const auth = await signUp(data);
      setEmail(data.email);
      saveAuth(auth);
      if (auth) {
        setModal(true);
      }
    } catch (error) {
      console.error(error);
      saveAuth(undefined);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="signup-main-cont">
      <Toaster position="bottom-right" />
      <Modal
        open={modal}
        close={toggle}
        content={<OtpInput value={otp} valueLength={6} onChange={otpData} />}
        submit={submitOtp}
        isValid={isValid}
        invalidMsg={invalidMsg}
        resend={ResendOtp}
        cancel={!modal}
      />
      <Auth />
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
        <form onSubmit={handleSubmit(onSubmit)} className="right-signup-div3">
          <input
            className="signup-input"
            {...register("name", { required: true })}
            placeholder="Full Name*"
          />
          {errors.name && <span className="validation">Name is required</span>}

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
        </form>
        <SignInOptions />
      </div>
    </div>
  );
}

export default SignUp;
