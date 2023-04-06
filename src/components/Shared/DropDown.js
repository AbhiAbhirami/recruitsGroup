import React, { useState } from "react";
import { useAuth } from "../../core/Auth";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoutConfirm from "./LogoutConfirm";
function DropDown({ open, user, close }) {
  const { logout } = useAuth();
  const [confirmModal, setConfirmModal] = useState({ status: false, });

  const handleLogoutModal = () => {
    close()
    setConfirmModal({ status: true })
  }

  return (
    <>
      <LogoutConfirm
        onLogout={logout}
        isOpen={confirmModal?.status}
        closeModal={() => setConfirmModal({ status: false, })}
      />
      <div
        style={open ? { display: "flex" } : { display: "none" }}
        className="dropdown-div"
      >
        <div className="dropdown-profile-image-cont">
          {user.avatar ? (
            <img
              className="profile-img-tag"
              src={user.avatar}
              alt="profile-img"
            />
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
            <span className="dropdown-name-tag">{user.name}</span>
            <span className="dropdown-email-tag">{user.email}</span>
          </div>
        </div>
        <div className="dropdown-nav-options-div">
          <Link to={{
            pathname: "/profile",
            search: 'overview'
          }}
            className="dropdown-div-nav-tag" onClick={close}>
            Profile
          </Link>
          {/* <span className="dropdown-div-nav-tag">My Projects</span> */}
          <Link
            to={{
              pathname: "/profile",
              search: 'documents'
            }}
            className="dropdown-div-nav-tag" onClick={close}>
            My Documents
          </Link>
        </div>
        <div className="dropdown-settings-div">
          {/* <span className="dropdown-div-nav-tag" onClick={close}>
            Language
          </span> */}

          <Link
            to={{
              pathname: "/profile",
              search: 'settings'
            }}
            className="dropdown-div-nav-tag" onClick={close}>
            Settings
          </Link>
          <span className="dropdown-div-nav-tag" onClick={handleLogoutModal}>
            Sign Out
          </span>
        </div>
      </div>
    </>
  );
}

export default DropDown;
