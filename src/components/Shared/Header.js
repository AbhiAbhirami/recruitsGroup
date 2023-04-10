import React, { useEffect, useState } from "react";
import logoH from "../../assets/images/logo/logo_horizontal.png";
import searchIcon from "../../assets/images/icons/search.png";
import bellIcon from "../../assets/images/icons/bellIcon.png";
import bellDot from "../../assets/images/icons/bellDot.png";
import profileImg from "../../assets/images/icons/blank.png";
import downArrow from "../../assets/images/icons/downArrow.png";
import hamBurger from "../../assets/images/icons/hamburger.png";
import DropDown from "./DropDown";
import NotificationDropDown from "./NotificationDropDown";
import Hamburger from "./Hamburger";
import { Link, useLocation } from "react-router-dom";
import SearchDropDown from "./SearchDropDown";
import { getUser } from "../../core/AuthHelpers";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllNotifications,
  getCountOfNewNotifications,
} from "../../store/reducers/notificationReducer";
import { io } from "socket.io-client";
import { useContext } from "react";
import { SocketContext } from "../../core/socketIoContext/socketIoContext";

function Header({ userData }) {
  const location = useLocation();
  const dispatch = useDispatch();

  const { loading, notifications, countNew } = useSelector((state) => ({
    loading: state.notifications.loading,
    notifications: state.notifications.notifications,
    countNew: state.notifications.countNew,
  }));
  const [socket, setSocket] = useState(null);
  const [isDropdown, setIsDropDown] = useState(false);
  const [isSearchDropdown, setIsSearchDropDown] = useState(false);
  const [isNotifDropdown, setIsNotifDropDown] = useState(false);

  const [user, setUser] = useState(getUser());

  const [isHamburger, setIsHamburger] = useState(false);
  const { setNewUser } = useContext(SocketContext);
  useEffect(() => {
    dispatch(getAllNotifications(user.id));
    dispatch(getCountOfNewNotifications(user.id));
    setNewUser(notifications);
  }, []);

  const handleOnClickOutside = (e) => {
    if (e.target.className === "dropdown-modal") {
      setIsDropDown(false);
      setIsNotifDropDown(false);
      setIsSearchDropDown(false);
      setIsHamburger(false);
    }
  };

  return (
    <div className="header-main-cont">
      <div
        onClick={handleOnClickOutside}
        className="dropdown-modal"
        style={
          isDropdown | isHamburger | isNotifDropdown | isSearchDropdown
            ? {
              width: "100%",
              height: "100vh",
              zIndex: 10,
              position: "absolute",
            }
            : { display: "none" }
        }
      ></div>
      <Link to="/dashboard" className="header-logo-cont">
        <img
          className="header-logo-horizontal"
          src={logoH}
          alt="logo-horizontal"
        />
      </Link>
      <div className="header-navlinks-cont">
        <Link
          to="/dashboard"
          className={
            location.pathname === "/dashboard"
              ? "nav-links-active"
              : "nav-links"
          }
        >
          Dashboard
        </Link>
        <Link
          to="/jobs"
          className={
            location.pathname === "/jobs" ? "nav-links-active" : "nav-links"
          }
        >
          Jobs
        </Link>
        <Link
          to="/applied-jobs"
          className={
            location.pathname === "/applied-jobs"
              ? "nav-links-active"
              : "nav-links"
          }
        >
          Applied Jobs
        </Link>
        <Link
          to="/saved-jobs"
          className={
            location.pathname === "/saved-jobs"
              ? "nav-links-active"
              : "nav-links"
          }
        >
          Saved Jobs
        </Link>
      </div>
      <div className="header-profile-cont">
        <div className="header-profile-div">
          <div onClick={() => setIsSearchDropDown(true)} className="search-div">
            {/* <img className="search-icon" src={searchIcon} alt="search-icon" /> */}
            <i
              style={{ fontSize: "25px" }}
              className="fa-solid fa-magnifying-glass search-icon"
            ></i>
            <SearchDropDown open={isSearchDropdown} />
          </div>
          <div
            className="bellIcon-cont"
            onClick={() => setIsNotifDropDown(true)}
          >
            <div
              style={
                countNew
                  ? {
                    display: "flex",
                    justifyContent: "center",
                    padding: "7px",
                    alignItems: "center",
                  }
                  : { display: "none" }
              }
              className="notification-dot"
            >
              {countNew}
            </div>
            <img className="bell-icon" src={bellIcon} alt="search-icon" />
            <NotificationDropDown
              open={isNotifDropdown}
              notifications={notifications}
              close={() => setIsNotifDropDown(false)}
            />
          </div>
          <div className="profile-dropdown-main-cont">
            <div
              className="profile-dropdown-cont"
              onClick={() => setIsDropDown(true)}
            >
              <img
                className="profile-img-tag"
                src={user.avatar ? user.avatar : profileImg}
                alt="profile-img"
              />
              <div className="profile-welcome-name">
                <span>Hello!</span>
                <span className="welcome-name-tag">{user.name} </span>
              </div>
            </div>
            <img className="down-arrow" src={downArrow} alt="down-arrow" />
            <DropDown
              open={isDropdown}
              close={() => setIsDropDown(false)}
              user={user}
            />
          </div>
        </div>
      </div>
      <div className="mobile-hamburger-div">
        <div className="bellIcon-cont">
          <div
            style={
              countNew > 0
                ? {
                  display: "flex",
                  top: "35px",
                  justifyContent: "center",
                  padding: "7px",
                  alignItems: "center",
                }
                : { display: "none" }
            }
            className="notification-dot"
          >
            {countNew}
          </div>
          <img
            onClick={() => setIsNotifDropDown(true)}
            className="bell-icon"
            src={bellIcon}
            alt="search-icon"
          />
          {isHamburger ? (
            <>
              <img
                style={{ visibility: "hidden" }}
                className="hamburger-icon"
                onClick={() => setIsHamburger(true)}
                src={hamBurger}
                alt="hamburger"
              />

              <span
                style={{
                  position: "absolute",
                  left: "60%",
                  top: 24,
                  width: 0,
                  fontSize: "40px",
                }}
                className="close"
              >
                &times;
              </span>
            </>
          ) : (
            <img
              className="hamburger-icon"
              onClick={() => setIsHamburger(true)}
              src={hamBurger}
              alt="hamburger"
            />
          )}
          <NotificationDropDown open={isNotifDropdown}
            notifications={notifications}
            close={() => setIsNotifDropDown(false)} />
          <Hamburger open={isHamburger} close={setIsHamburger} />
        </div>
      </div>
    </div>
  );
}

export default Header;
