import React from 'react'
// import NotificationCard from './Notification/NotificationCard'
import SingleDropdwonNotifCard from './SingleDropdwonNotifCard'


function NotificationDropDown({ open }) {
    return (
        <div style={open ? { display: 'flex' } : { display: "none" }} className="notification-dropdown-div">
            <div className="notification-dropdown-head-cont">
                {/* <img className='profile-img-tag' src={profileImg} alt="profile-img" /> */}
                <div className="dropdown-notification-head-div">
                    <span className="dropdown-name-tag">Notifications</span>
                    <span style={{ textDecoration: 'underline' }} className="dropdown-mark-all-tag">Mark all as read</span>
                </div>
            </div>

            <div className="dropdown-notification-div">
                <SingleDropdwonNotifCard />
                <SingleDropdwonNotifCard />
                <SingleDropdwonNotifCard />
                <SingleDropdwonNotifCard />
                <SingleDropdwonNotifCard />
                <SingleDropdwonNotifCard />
                <SingleDropdwonNotifCard />


            </div>
        </div>
    )
}

export default NotificationDropDown
