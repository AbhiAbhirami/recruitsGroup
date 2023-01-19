import React, { useState } from 'react'
import logoH from '../../assets/images/logo/logo_horizontal.png'
import searchIcon from '../../assets/images/icons/search.png'
import bellIcon from '../../assets/images/icons/bellIcon.png'
import bellDot from '../../assets/images/icons/bellDot.png'
import profileImg from '../../assets/images/icons/profile.png'
import downArrow from '../../assets/images/icons/downArrow.png'
import hamBurger from '../../assets/images/icons/hamburger.png'
import DropDown from './DropDown'
import NotificationDropDown from './NotificationDropDown'
import Hamburger from './Hamburger'
import { Link, useLocation } from 'react-router-dom'


function Header() {
    const location = useLocation();
    const [isDropdown, setIsDropDown] = useState(false)
    const [isNotifDropdown, setIsNotifDropDown] = useState(false)
    const [currentNavLink, setCurrentNavLink] = useState(location.pathname)
const [isNewNotification, setIsNewNotification] = useState(true);
  const [notification, setNotification] = useState([
    { comment: "commented", new: true },
    { comment: "comment 2", new: false },
  ]);

  useEffect(() => {
    const newNot = notification.filter((item) => item.new);
    if (newNot.length > 0) {
      setIsNewNotification(true);
    }
  }, []);
    const handleOnClickOutside = (e) => {
        if (e.target.className === "dropdown-modal") {
            setIsDropDown(false)
            setIsNotifDropDown(false)
        }

    }


 const changeNotificationInfo = () => {
    setIsNewNotification(false);
  };
    return (
        <div className='header-main-cont'>
            <div onClick={handleOnClickOutside} className="dropdown-modal" style={isDropdown | isNotifDropdown ? { width: "100%", height: "100vh", zIndex: 10, position: "absolute" } : { display: 'none' }}></div>
            {/* <Hamburger /> */}
            <div className='header-logo-cont'>
                <img className='header-logo-horizontal' src={logoH} alt="logo-horizontal" />
            </div>
            <div className='header-navlinks-cont'>
                <Link to="/dashboard" className={currentNavLink === "/dashboard" ? 'nav-links-active' : 'nav-links'}>Dashboard</Link>
                <Link to="/jobs" className={currentNavLink === "/jobs" ? 'nav-links-active' : 'nav-links'}>Jobs</Link>
                <Link to="/applied-jobs" className={currentNavLink === "/applied-jobs" ? 'nav-links-active' : 'nav-links'}>Applied Jobs</Link>
                <span className='nav-links'>Saved Jobs</span>
            </div>
            <div className='header-profile-cont'>
                <div className='header-profile-div'>
                    <img className='search-icon' src={searchIcon} alt="search-icon" />
                    <div className='bellIcon-cont' onClick={() => setIsNotifDropDown(true)}>
                        {/* <span style={isNewNotification ? { display: 'block' } : { display: 'none' }} className='notification-dot'></span> */}
                        <img className='bell-icon' src={isNewNotification ? bellDot : bellIcon} alt="search-icon" />
                        <NotificationDropDown open={isNotifDropdown} />

                    </div>
                    <div className="profile-dropdown-main-cont" >
                        <div className='profile-dropdown-cont' onClick={() => setIsDropDown(true)}>
                            <img className='profile-img-tag' src={profileImg} alt="profile-img" />
                            <div className='profile-welcome-name'>
                                <span>Hello!</span>
                                <span className='welcome-name-tag'>Shahid Afrid
                                </span>

                            </div>

                        </div>
                        <img className='down-arrow' src={downArrow} alt="down-arrow" />
                        <DropDown open={isDropdown} />
                    </div>

                </div>
            </div>
            <div className="mobile-hamburger-div">
                <div className='bellIcon-cont'>
                    {/* <span style={isNewNotification ? { display: 'block' } : { display: 'none' }} className='notification-dot'></span> */}
                    <img className='bell-icon' src={isNewNotification ? bellDot : bellIcon} alt="search-icon" />
                    <img className="hamburger-icon" src={hamBurger} alt="hamburger" />
                </div>
            </div>
        </div >
    )
}

export default Header;
