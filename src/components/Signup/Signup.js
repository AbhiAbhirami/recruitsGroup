import React, { useState } from 'react'
// import './Signup.css'
import { Link } from 'react-router-dom'
import bg1 from './img/bg1.png'
import google from './img/google.png'
import logo from './img/logo.png'
import apple from './img/apple.png'
import fb from './img/facebook.png'
import mail from './img/mailimg.png'
function Signup() {
    const [modal, setModal] = useState(true);
    let media = window.screen.width < 600;
    return (


        <div className='signup-main-cont'>
            <div id="myModal" style={modal ? { display: 'block' } : { display: 'none' }} className="modal">

                <div className="modal-content" >
                    <span className="close">&times;</span>
                    <div className='modal-content-all'>
                        <div className='modal-top top-color'>
                            <img className='mailimg' src={mail} />
                            <span className='otp-head'>otp verification</span>
                            <span className='otp-p'>Please enter your OTP code send <br />
                                to your email</span>
                        </div>
                        <div className='modal-top'>
                            <div className='otp-input'>
                                <input />
                                <input />
                                <input />
                                <input /></div>
                            <div className='resent-div'>
                                <p>Dont get code? <span className='resent-otp'>Resent otp</span></p>

                            </div>
                            <div className='verify-btn'>
                                verify
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div style={media ? { display: 'none' } : { display: "flex" }} id='signup-mobile' className='signup-image-sec'>
                <div className='left-logo-cont'>
                    <img className='logo-img' src={logo} />
                </div>
                <div className='left-bg-cont'>
                    <img className='signup-bg-img' src={bg1} />
                    <div className='signup-logo-text-cont'>
                        <h5 className='sign-head'>Tap, connect <br />
                            and be hired.</h5>
                        <span className='sign-p'>Explore of the most exiting jobs roles
                            based on your intrest and study major</span>
                    </div>
                </div>
                <div className='mobile-only-options-div'>
                    <div className='sign-options'>sign in</div>
                    <div className='sign-options'>sign up</div>
                </div>

            </div>
            <div className='signup-input-field'>
                <div className='right-signup-div1'><span>Already a member? <Link to="/signin" className='register-link' > Sign in</Link></span></div>
                <div className='right-signup-div2'>
                    <h3 className='signup-header'>Register Now</h3>
                    <p className='signup-para'>Discover your dream job here!</p>
                </div>
                <div className='right-signup-div3'>
                    <input placeholder='username' className='signup-input' />
                    <input placeholder='email' className='signup-input' />
                    <input placeholder='password' className='signup-input' />
                    <input placeholder='confirm password' className='signup-input' />
                    {/* <p style={{ fontSize: '18px', cursor: 'pointer' }}>forget password</p> */}
                    <div className='signin-btn'>
                        Sign up
                    </div>
                </div>
                <div className='right-signup-div4'>
                    <div className='continue-with-div'>
                        <hr /> <span> or continue with </span> <hr />
                    </div>
                    <div className='signin-options-logos'>
                        <div className='single-login-logo'>
                            <img className='other-option-img' src={google} />
                        </div>
                        <div className='single-login-logo'>
                            <img className='other-option-img' src={apple} />

                        </div>
                        <div className='single-login-logo'>
                            <img className='other-option-img' src={fb} />

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Signup
