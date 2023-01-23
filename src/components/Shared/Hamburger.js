import React from 'react'
import { Link } from 'react-router-dom'
import searchIcon from '../../assets/images/icons/search.png'

function Hamburger({ open }) {
    return (
        <div style={open ? { display: "flex" } : { display: "none" }} className='hamburger-main-cont'>
            {/* <div style={{ height: "100px" }} className='hamburger-dropdown-div1'>
                <img style={{ width: '25px', height: "25px" }} className='search-icon' src={searchIcon} alt="search-icon" />

                <input className='search-input-box' placeholder='Search...' type="text" />
            </div> */}
            <div className='hamburger-nav-options'>
                <Link to="/dashboard" className='hamburger-single-nav-option'>Home</Link>
                <Link to="/jobs" className='hamburger-single-nav-option'>Jobs</Link>
                <Link to="/applied-jobs" className='hamburger-single-nav-option'>Applied Jobs</Link>
                <Link to="/saved-jobs" className='hamburger-single-nav-option'>Saved Jobs</Link>
                <Link to="/profile" className='hamburger-single-nav-option'>Profile</Link>
                <span className='hamburger-single-nav-option'>My Documents</span>
                <span className='hamburger-single-nav-option'>Language</span>
                <span className='hamburger-single-nav-option'>Settings</span>
                <span className='hamburger-single-nav-option'>Sign Out</span>
            </div>
        </div>
    )
}

export default Hamburger
