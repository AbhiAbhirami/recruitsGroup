import React from "react";
import BackgroundDesign from "../Shared/BackgroundDesign";
import Header from "../Shared/Header";
import TodoCard from "../Shared/Todo/TodoCard";

import google from "../../assets/images/social/google.png";
import post from "../../assets/images/jobs/post.png";
import searchIcon from "../../assets/images/icons/search.png";

import save from "../../assets/images/icons/save.png";
import send from "../../assets/images/icons/send.png";

import task from "../../assets/images/icons/task.svg";
import notification from "../../assets/images/icons/notification.svg";
import NotificationCard from "../Shared/Notification/NotificationCard";
import profile from "../../assets/images/icons/profile.png";
import JobModal from "../Shared/JobModal/Jobmodal";
import Comments from "../Shared/Comments";

import { useState } from "react";
import { useEffect } from "react";
import { getJobs } from "../../requests/Auth";
import { getJobsInfo } from "../../core/AuthHelpers";
import JobPost from "./JobPost";

function Jobs({ user }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  let media = window.screen.width < 600;
  const data = [
    { task: "Update profile", tag: "To find you" },
    { task: "Update profile", tag: "To find you" },
    { task: "Update profile", tag: "To find you" },
    { task: "Update profile", tag: "To find you" },
    { task: "Update profile", tag: "To find you" },
    { task: "Update profile", tag: "To find you" },
    { task: "Update profile", tag: "To find you" },
    { task: "Update profile", tag: "To find you" },
  ];

  const notifi = [
    "Profile completion pending sxsxsxsxsxsxsx",
    "Profile completion pending",
    "Profile completion pending",
    "Google job application approved",
    "Todo tasks are added",
  ];

  const openModal=()=>{
  setIsOpen(true)
}

  return (
    <>
      <BackgroundDesign />

      <div>
        <div className="main-jobs">
          <div
            className="w-30"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "50px",
              alignItems: "center",
            }}
          >
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center",
                color: "#fff",
              }}
            >
              <img
                src={profile}
                style={{ marginTop: "20px", height: "121px", width: "117px" }}
                alt=""
              />
              <span style={{ color: "white" }}>Shahid Afrid T</span>
              <span style={{ color: "white" }}>Full Stack Developer</span>
            </div>

            <div
              style={{
                width: "100%",
                height: "100px",
                borderRadius: "18px",
                backgroundColor: "#fff",
                padding: "20px 30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <h3 style={{ color: "#5C5B5B" }}>Profile Complition</h3>
                <h3>50%</h3>
              </div>
              <div
                style={{
                  height: "3px",
                  width: "100%",
                  background: "#D9D9D9",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{ height: "3px", width: "50%", background: "#9AD8A0" }}
                ></div>
              </div>
            </div>

            <div
              className="saved-jobs-cont"
              style={{
                width: "100%",
                borderRadius: "18px",
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "10px",
                position: "sticky",
                top: "15px",
                height: "95vh",
                overflow: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  marginTop: "20px",
                  gap: "20px",
                }}
              >
                <img
                  src={save}
                  style={{ height: "20px", width: "20px" }}
                  alt=""
                />{" "}
                <h2 style={{ fontSize: "18px" }}>Saved Jobs </h2>
              </div>
              <SavedJobsCard />
              <SavedJobsCard />
              <SavedJobsCard />
              <SavedJobsCard />
              <SavedJobsCard />
              <SavedJobsCard />
              <SavedJobsCard />
            </div>
          </div>

          <div
            className="w-35"
            style={{
              background: "#E5E5E5",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center",
              paddingTop: "33px",
            }}
          >
            <div
              style={{
                width: "90%",
                height: "150px",
                borderRadius: "18px",
                backgroundColor: "#fff",
                display: "flex",
              }}
            >
              <div
                className=""
                style={{ height: "100%", width: "50%", padding: "5%" }}
              >
                <h2 style={media ? { fontSize: "16px" } : { fontSize: "20px" }}>
                  What
                </h2>
                <p
                  style={
                    media
                      ? { marginTop: ".75rem", fontSize: "14px" }
                      : { marginTop: ".75rem", fontSize: "16px" }
                  }
                >
                  Job title or Company
                </p>
                <div
                  style={{
                    width: "100%",
                    height: "30px",
                    marginTop: ".75rem",
                    backgroundColor: "#F2F3F7",
                    outline: "none",
                    paddingLeft: "10px",
                    display: "flex",
                    border: "none",
                    alignItems: "center",
                    borderRadius: "10px",
                    paddingRight: "10px",
                  }}
                >
                  <input
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#F2F3F7",
                      outline: "none",

                      display: "flex",
                      border: "none",
                      // borderRadius: "10px",
                    }}
                    placeholder="Web developer"
                    type="text"
                  />
                  <img height="80%" src={searchIcon} alt="search-icon" />
                </div>
              </div>
              <div
                className=""
                style={{ height: "100%", width: "50%", padding: "5%" }}
              >
                <h2 style={media ? { fontSize: "16px" } : { fontSize: "20px" }}>
                  Where
                </h2>
                <p
                  style={
                    media
                      ? { marginTop: ".75rem", fontSize: "14px" }
                      : { marginTop: ".75rem", fontSize: "16px" }
                  }
                >
                  City or State
                </p>
                <div
                  style={{
                    width: "100%",
                    height: "30px",
                    marginTop: ".75rem",
                    backgroundColor: "#F2F3F7",
                    outline: "none",
                    paddingLeft: "10px",
                    paddingRight: "10px",

                    display: "flex",
                    border: "none",
                    alignItems: "center",
                    borderRadius: "10px",
                  }}
                >
                  <input
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#F2F3F7",
                      outline: "none",

                      display: "flex",
                      border: "none",
                      // borderRadius: "10px",
                    }}
                    placeholder="Delhi"
                    type="text"
                  />
                  <img height="80%" src={searchIcon} alt="search-icon" />
                </div>
              </div>
            </div>
            <JobPost setIsOpen={setIsOpen} />
          </div>

          <div
            className="w-30"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              className="notification-main-cont"
              style={{ padding: "20px 30px" }}
            >
              <h3 className="new-jobs-head">Notification</h3>
              <div className="new-notification-cards-cont">
                {notifi.length > 0 ? (
                  notifi.map((e, k) => {
                    return <NotificationCard key={k} message={e} />;
                  })
                ) : (
                  <>
                    <img
                      width="50%"
                      style={{ alignSelf: "center" }}
                      src={notification}
                      alt="notification"
                    />
                    <p style={{ alignSelf: "center", paddingTop: "15px" }}>
                      No notification
                    </p>
                  </>
                )}
              </div>
            </div>

            <div
              className="todo-main-cont"
              style={{
                position: "sticky",
                top: "15px",
                width: "100%",
                height: "auto",
                maxHeight: "max-content",
                padding: "20px 30px",
                height: "95vh",
                overflow: "auto",
              }}
            >
              <h3 className="new-jobs-head">Todo</h3>
              <p className="todo-sub-heading">Check your life, not boxes</p>
              <div className="todo-cards-cont">
                {data.length > 0 ? (
                  data.map((elem, index) => {
                    return <TodoCard data={elem} key={index} index={index} />;
                  })
                ) : (
                  <>
                    <img
                      style={{
                        position: "absolute",
                        alignSelf: "center",
                        top: "40%",
                      }}
                      width="50%"
                      src={task}
                      alt="task"
                    />
                    <p
                      style={{
                        alignSelf: "center",
                        position: "absolute",
                        top: "70%",
                      }}
                    >
                      No tasks are pending
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jobs;

const SavedJobsCard = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <JobModal
        closeModal={() => setIsOpen(false)}
        applied={false}
        isOpen={modalIsOpen}
        
      />
      <div
        style={{
          width: "100%",
          height: "110px",
          borderRadius: "20px",
          boxShadow:
            "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          padding: "10px 15px",
          display: "flex",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h2 style={{ fontWeight: "600", fontSize: "16px" }}>Facebook</h2>
          <h4
            style={{
              fontWeight: "400",
              color: "#5C5B5B",
              fontSize: "15px",
              whiteSpace: "nowrap",
            }}
          >
            Mern Stack Developer
          </h4>
          <h4
            style={{
              fontWeight: "400",
              color: "#5C5B5B",
              fontSize: "13px",
              whiteSpace: "nowrap",
            }}
          >
            3 days ago &nbsp; 13 Applied
          </h4>
        </div>
        <div
          style={{
            height: "100%",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "end",
          }}
        >
          <h4 style={{ fontWeight: "400", color: "#5C5B5B", fontSize: "13px" }}>
            Singapore
          </h4>
          <h4
            style={{ color: "#3B6FB1", fontSize: "14px", cursor: "pointer" }}
            onClick={() => setIsOpen(true)}
          >
            VIEW DETAILS
          </h4>
        </div>
      </div>
    </>
  );
};
