import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import notify from '../../assets/images/icons/notify.png'
import Modal from '../Shared/Modal';
import { resendOtp, signUp, verifyEmailOtp } from "../../requests/Auth";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import OtpInput from "../Shared/OtpInput";

function ForgotPassword() {
    const [modal, setModal] = useState(false);
    const [isValid, setIsValid] = useState(true);
    const [invalidMsg, setInvalidMsg] = useState("");
    const [password, setPass] = useState("");
    const navigate = useNavigate();
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
                navigate("/auth/password-reset/:id", { state: { email, password } });
            }
        } catch (error) {
            setIsValid(false);
            setInvalidMsg(error.response.data.message);
        }
    };
    const ResendOtp = async () => {

        await resendOtp(email, "");
    };
    return (
        <div className='forgot-passord-mai-cont' style={{ height: "100vh", position: "relative", overflow: "hidden", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
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
            <div style={{ height: "100%", width: "100%", backgroundColor: "#F7F6F7", position: "absolute" }}>
                <div style={{ width: "100%", height: "35%", backgroundColor: "#1F194C" }}></div>
            </div>
            <div className='forgot-password-container'>
                <div className='forgot-password-notify-img-cont'>
                    <img width="15%" src={notify} alt="notify" />
                </div>
                <div className='forgot-password-text-cont'>
                    <span className='forgot-password-head-text-tag'>Forgot Password</span>
                    <p className='forgot-password-text-tag'>Enter your email and we'll send you a link to reset your password</p>
                </div>
                <div className='forgot-password-email-input'>
                    <i style={{ color: "#999898", fontSize: "24px" }} class="fa fa-envelope" aria-hidden="true"></i>
                    <input style={{ width: "100%", fontSize: "16px", height: '100%', outline: 'none', border: "none" }} type="email" />
                </div>
                <div className='forgot-password-submit-btn-cont'>
                    <div className='forgot-password-submit-btn'>
                        <Link style={{ color: "black", textDecoration: "none", width: "100%", height: "100%", textAlign: "center" }} onClick={() => setModal(true)}>Submit</Link>

                    </div>
                </div>
                <div className='back-to-login-btn'>
                    <i style={{ cursor: "pointer", fontSize: "16px" }} class="fa fa-chevron-left" aria-hidden="true"></i>
                    <Link to="/auth/login" className='back-to-login-tag'>Back to Login</Link>
                </div>
            </div>

        </div>
    )
}

export default ForgotPassword
