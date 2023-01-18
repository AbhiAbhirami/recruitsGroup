import React from 'react'

function NotificationDropDown({ open }) {
    return (
        <div style={open ? { display: 'flex' } : { display: "none" }} className="dropdown-div">
            <div className="notification-dropdown-head-cont">
                {/* <img className='profile-img-tag' src={profileImg} alt="profile-img" /> */}
                <div className="dropdown-email-div">
                    <span className="dropdown-name-tag">Notifications</span>
                </div>
            </div>

            <div className="dropdown-settings-div">
                <span className="notification-dropdown-div-nav-tag">Language</span>
                <span className="notification-dropdown-div-nav-tag">Settings</span>
                <span className="notification-dropdown-div-nav-tag">Sign Out</span>
            </div>
        </div>
    )
}

export default NotificationDropDown
