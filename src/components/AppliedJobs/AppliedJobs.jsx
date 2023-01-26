import React from "react";
import TodoCard from "../Shared/Todo/TodoCard";

import google from "../../assets/images/social/google.png";
import post from "../../assets/images/jobs/post.png";

import save from "../../assets/images/icons/save.png";
import send from "../../assets/images/icons/send.png";

import NotificationCard from "../Shared/Notification/NotificationCard";
import profile from "../../assets/images/icons/profile.png";
import BackgroundDesign from "../Shared/BackgroundDesign";
import { SavedJobsCard } from "../Jobs/Jobs";
import { FaUser } from "react-icons/fa";

function AppliedJobs() {
  const data = [
    { task: "Update profile", tag: "To find you" },
    { task: "Update profile", tag: "To find you" },
    { task: "Update profile", tag: "To find you" },
    { task: "Update profile", tag: "To find you" },
    { task: "Update profile", tag: "To find you" },
    { task: "Update profile", tag: "To find you" },
    { task: "Update profile", tag: "To find you" },
  ];
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
              color: "#fff",
            }}
          >
            {profile ? (
              <img
                src={profile}
                style={{ marginTop: "20px", height: "121px", width: "117px" }}
                alt=""
              />
            ) : (
              <div
                style={{
                  height: 50,
                  width: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 30,
                }}
              >
                <FaUser size={"2.5rem"} />
              </div>
            )}
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
                paddingBottom: 20,
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
                <h2>What</h2>
                <p style={{ marginTop: ".75rem" }}>Job title or Company</p>
                <input
                  placeholder="Web developer"
                  type="text"
                  style={{
                    width: "100%",
                    height: "30px",
                    marginTop: ".75rem",
                    backgroundColor: "#F2F3F7",
                    outline: "none",
                    paddingLeft: "10px",
                    border: "none",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div
                className=""
                style={{ height: "100%", width: "50%", padding: "5%" }}
              >
                <h2>Where</h2>
                <p style={{ marginTop: ".75rem" }}>City or State</p>
                <input
                  placeholder="Delhi"
                  type="text"
                  style={{
                    width: "100%",
                    height: "30px",
                    marginTop: ".75rem",
                    backgroundColor: "#F2F3F7",
                    outline: "none",
                    paddingLeft: "10px",
                    border: "none",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
            <JobPost />
            <JobPost />
            <JobPost />
            <JobPost />
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
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
              </div>
            </div>

            <div
              className="todo-main-cont"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "max-content",
                padding: "20px 30px",
              }}
            >
              <h3 className="new-jobs-head">Todo</h3>
              <p className="todo-sub-heading">Check your life, not boxes</p>
              <div className="todo-cards-cont">
                {data.map((elem, index) => {
                  return <TodoCard data={elem} key={index} index={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppliedJobs;

const JobPost = () => {
  return (
    <div
      style={{ width: "90%", borderRadius: "10px", backgroundColor: "#fff" }}
    >
      <div className="job-card-cont" style={{ padding: "3% 5%" }}>
        <img className="newjob-company-logo" src={google} alt="company-logo" />
        <div className="new-job-company-description">
          <span className="new-job-company-heading">Google</span>
          <div className="new-job-company-desc-div">
            <span className="new-job-company-post">Full Stack Developer</span>
            <div className="new-job-time-of-upload">
              <span>3 days ago</span>
              <span className="dot"></span>
              <span>13 Applied</span>
            </div>
          </div>
        </div>
        <div className="new-job-company-extra-detail">
          <span>Singapore</span>
          <span className="new-job-view-deatil-tag">VIEW DETAILS</span>
        </div>
      </div>
      <img src={post} style={{ width: "100%" }} alt="" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "3% 5%",
        }}
      >
        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ height: "30px", width: "30px" }}>
            <img style={{ height: "100%", width: "100%" }} src={save} alt="" />
          </div>
          <div style={{ height: "30px", width: "30px" }}>
            <img style={{ height: "100%", width: "100%" }} src={send} alt="" />
          </div>
        </div>
        <button
          style={{
            width: "120px",
            height: "45px",
            borderRadius: "10px",
            backgroundColor: "#FECF34",
            outline: "none",
            border: "none",
          }}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};
