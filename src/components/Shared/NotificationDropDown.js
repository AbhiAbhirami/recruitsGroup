import React from "react";
import { useState } from "react";
// import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, } from "react-redux";
import { getUser } from "../../core/AuthHelpers";
import { markAllAsRead } from "../../store/reducers/notificationReducer";
// import NotificationCard from './Notification/NotificationCard'
import SingleDropdwonNotifCard from "./SingleDropdwonNotifCard";

function NotificationDropDown({ open, notifications, close }) {
  const dispatch = useDispatch();
  const [user, setUser] = useState(getUser());
  const markAllRead = () => {
    dispatch(markAllAsRead(user.id));
  };
  return (
    <div
      style={open ? { display: "flex" } : { display: "none" }}
      className="notification-dropdown-div"
    >
      <div className="notification-dropdown-head-cont">
        {/* <img className='profile-img-tag' src={profileImg} alt="profile-img" /> */}
        <div className="dropdown-notification-head-div">
          <span className="dropdown-name-tag">Notifications</span>
          <span
            style={{ textDecoration: "underline" }}
            className="dropdown-mark-all-tag"
            onClick={markAllRead}
          >
            Mark all as read
          </span>
        </div>
      </div>

      <div className="dropdown-notification-div">
        {notifications && notifications.length > 0 ? (
          notifications.map((e, k) => {
            return <SingleDropdwonNotifCard key={k} message={e.comments} />;
          })
        ) : (
          <p style={{ alignSelf: "center" }}>No notification</p>
        )}


      </div>
      <Link
        onClick={close}
        to="/notifications"
        style={notifications && notifications.length > 0 ? { marginTop: "auto", textDecoration: "none", color: "black", alignSelf: 'center', borderRadius: "15px", marginBottom: "5px", background: "rgba(72, 146, 240, 0.42)", display: 'flex', justifyContent: "center", cursor: "pointer", alignItems: "center", width: '70%', height: '50px' } : { display: "none" }}
      >
        View All
      </Link>
    </div>
  );
}

export default NotificationDropDown;
