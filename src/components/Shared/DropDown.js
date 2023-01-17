import React from "react";
import profileImg from "../../assets/images/icons/profile.png";
import { useAuth } from "../../core/Auth";

function DropDown({ open }) {
  const { logout } = useAuth();

  return (
    <div
      style={open ? { display: "flex" } : { display: "none" }}
      className="dropdown-div"
    >
      <div className="dropdown-profile-image-cont">
        <img className="profile-img-tag" src={profileImg} alt="profile-img" />
        <div className="dropdown-email-div">
          <span className="dropdown-name-tag">Shahid Afrid</span>
          <span className="dropdown-email-tag">Shahidafrid@gmail.com</span>
        </div>
      </div>
      <div className="dropdown-nav-options-div">
        <span className="dropdown-div-nav-tag">Profile</span>
        {/* <span className="dropdown-div-nav-tag">My Projects</span> */}
        <span className="dropdown-div-nav-tag">My Documents</span>
      </div>
      <div className="dropdown-settings-div">
        <span className="dropdown-div-nav-tag">Language</span>
        <span className="dropdown-div-nav-tag">Settings</span>
        <span className="dropdown-div-nav-tag" onClick={logout}>
          Sign Out
        </span>
      </div>
    </div>
  );
}

export default DropDown;
