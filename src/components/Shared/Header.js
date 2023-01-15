import React, { useState } from "react";
import logoH from "../../assets/images/logo/logo_horizontal.png";
import searchIcon from "../../assets/images/icons/search.png";
import bellIcon from "../../assets/images/icons/bellIcon.png";
import profileImg from "../../assets/images/icons/profile.png";
import downArrow from "../../assets/images/icons/downArrow.png";

function Header() {
  const [isNewNotification, setIsNewNotification] = useState(false);
  const [notification, setNotification] = useState([
    { comment: "commented", new: true },
    { comment: "comment 2", new: false },
  ]);
  useState(() => {
    const newNot = notification.filter((item) => item.new);
    if (newNot.length > 0) {
      setIsNewNotification(true);
    }
  }, []);

  const changeNotificationInfo = () => {
    setIsNewNotification(false);
  };
  return (
    <>
      <div className="header-main-cont">
        <div className="header-logo-cont">
          <img
            className="header-logo-horizontal"
            src={logoH}
            alt="logo-horizontal"
          />
        </div>
        <div className="header-navlinks-cont">
          <span className="nav-links nav-links-active">Dashboard</span>
          <span className="nav-links">Jobs</span>
          <span className="nav-links">Applied Jobs</span>
          <span className="nav-links">Saved Jobs</span>
        </div>
        <div className="header-profile-cont">
          <div className="header-profile-div">
            <img className="search-icon" src={searchIcon} alt="search-icon" />
            <div className="bellIcon-cont" onClick={changeNotificationInfo}>
              <span
                style={
                  isNewNotification ? { display: "block" } : { display: "none" }
                }
                className="notification-dot"
              ></span>
              <img className="bell-icon" src={bellIcon} alt="search-icon" />
            </div>
            <div className="profile-dropdown-cont">
              <img
                className="profile-img-tag"
                src={profileImg}
                alt="profile-img"
              />
              <div className="profile-welcome-name">
                <span>Hello!</span>
                <span className="welcome-name-tag">Shahid Afrid</span>
              </div>
            </div>
            <img className="down-arrow" src={downArrow} alt="down-arrow" />
            <div className="dropdown-div">
              <div className="dropdown-profile-image-cont">
                <img
                  className="profile-img-tag"
                  src={profileImg}
                  alt="profile-img"
                />
                <div className="dropdown-email-div">
                  <span className="dropdown-name-tag">Shahid Afrid</span>
                  <span className="dropdown-email-tag">
                    Shahidafrid@gmail.com
                  </span>
                </div>
              </div>
              <div className="dropdown-nav-options-div">
                <span className="dropdown-div-nav-tag">Profile</span>
                <span className="dropdown-div-nav-tag">My Projects</span>
                <span className="dropdown-div-nav-tag">My Documents</span>
              </div>
              <div className="dropdown-settings-div">
                <span className="dropdown-div-nav-tag">Language</span>
                <span className="dropdown-div-nav-tag">Settings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-hamburger-div">
        <div className="bellIcon-cont">
          {/* <span style={isNewNotification ? { display: 'block' } : { display: 'none' }} className='notification-dot'></span> */}
          <img
            className="bell-icon"
            src={isNewNotification ? bellDot : bellIcon}
            alt="search-icon"
          />
          <img className="hamburger-icon" src={hamBurger} alt="hamburger" />
        </div>
      </div>
    </>
  );
}

export default Header;
