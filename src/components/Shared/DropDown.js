import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import profileImg from "../../assets/images/icons/profile.png";

function DropDown({ open }) {
  return (
    <div
      style={open ? { display: "flex" } : { display: "none" }}
      className="dropdown-div"
    >
      <div className="dropdown-profile-image-cont">
        {profileImg ? (
          <img className="profile-img-tag" src={profileImg} alt="profile-img" />
        ) : (
          <div
            style={{
              width: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaUser size={"2rem"} />
          </div>
        )}
        <div className="dropdown-email-div">
          <span className="dropdown-name-tag">Shahid Afrid</span>
          <span className="dropdown-email-tag">Shahidafrid@gmail.com</span>
        </div>
      </div>
      <div className="dropdown-nav-options-div">
        <Link to="/profile" className="dropdown-div-nav-tag">
          Profile
        </Link>
        {/* <span className="dropdown-div-nav-tag">My Projects</span> */}
        <span className="dropdown-div-nav-tag">My Documents</span>
      </div>
      <div className="dropdown-settings-div">
        <span className="dropdown-div-nav-tag">Language</span>
        <span className="dropdown-div-nav-tag">Settings</span>
        <span className="dropdown-div-nav-tag">Sign Out</span>
      </div>
    </div>
  );
}

export default DropDown;
