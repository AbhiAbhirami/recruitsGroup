import React from "react";
import backgroundImage from "../../../assets/images/background/bg2.png";
import profilImage from "../../../assets/images/icons/profile2.png";
import flag from "../../../assets/images/icons/flag.png";
import phone from "../../../assets/images/icons/phone.png";
import email from "../../../assets/images/icons/mail.png";
import tips from "../../../assets/video/demo.mp4";
import videoThumb from "../../../assets/images/background/bg3.png";

function ProfileInfo({ tab, setTab }) {
  return (
    <div>
      <div>
        <img
          src={backgroundImage}
          width={"100%"}
          style={{ minHeight: 150, borderRadius: 15 }}
          alt="background-images"
        />
      </div>
      <div className="profileInfo-cont">
        <div className="profileInfo-profile-detail">
          <div className="profileInfo-profile-image">
            <img
              src={profilImage}
              width={"100%"}
              height={"100%"}
              alt="profile-images"
            />
          </div>
          <div className="profileInfo-profile-detail-text">
            <h4>Amanda Smith</h4>
            <p>
              <img src={flag} height={13} alt="flag-icon" /> Los Angeles ,
              United States
            </p>
            <p>
              Full Stack Developer at Virtusa{" "}
              <span className="text-dot">&nbsp;</span> <span> Full Time</span>
            </p>
            <p>
              <img src={email} height={15} alt="flag-icon" />
              Amanda007@gmail.com
            </p>
            <p>
              <img src={phone} height={15} alt="flag-icon" /> +91 9940442622
            </p>
          </div>
          <div className="profileInfo-profile-control-tab">
            <button
              className={`cursor-pointer ${tab === "overview" && "active"}`}
              type="button"
              onClick={() => setTab("overview")}
            >
              Overview
            </button>
            <button
              className={`cursor-pointer ${tab === "documents" && "active"}`}
              type="button"
              onClick={() => setTab("documents")}
            >
              Documents
            </button>
            <button
              className={`cursor-pointer ${tab === "settings" && "active"}`}
              type="button"
              onClick={() => setTab("settings")}
            >
              Settings
            </button>
          </div>
        </div>
        <div className="profileInfo-profile-complition">
          <div>
            <div className="line-chart">
              <p>Profile Complition</p>
              <span>50%</span>
            </div>
            <div className="line">
              <div className="line line-in" style={{ width: "50%" }} />
            </div>
          </div>
          <div>
            <video
              poster={videoThumb}
              width={"100%"}
              height={"100%"}
              controls={true}
            >
              <source src={tips} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
