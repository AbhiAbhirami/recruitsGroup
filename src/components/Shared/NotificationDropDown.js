import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../core/AuthHelpers";
import { getAllNotifications, markAllAsRead } from "../../store/reducers/notificationReducer";
// import NotificationCard from './Notification/NotificationCard'
import SingleDropdwonNotifCard from "./SingleDropdwonNotifCard";

function NotificationDropDown({ open, notifications }) {
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
    </div>
  );
}

export default NotificationDropDown;
