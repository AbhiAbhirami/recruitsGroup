import React from "react";
import profileImg from "../../assets/images/icons/blank.png";
import { useAuth } from "../../core/Auth";
import { Link } from "react-router-dom";

function DropDown({ open, user }) {
  const { logout } = useAuth();

  return (
    <div
      style={open ? { display: "flex" } : { display: "none" }}
      className="dropdown-div"
    >
      <div className="dropdown-profile-image-cont">
        <img
          className="profile-img-tag"
          src={user.avatar ? user.avatar : profileImg}
          alt="profile-img"
        />
        <div className="dropdown-email-div">
          <span className="dropdown-name-tag">{user.name}</span>
          <span className="dropdown-email-tag">{user.email}</span>
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
        <span className="dropdown-div-nav-tag" onClick={logout}>
          Sign Out
        </span>
      </div>
    </div>
  );
}

export default DropDown;
