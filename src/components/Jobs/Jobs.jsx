import React from "react";
import BackgroundDesign from "../Shared/BackgroundDesign";
import TodoCard from "../Shared/Todo/TodoCard";

import searchIcon from "../../assets/images/icons/search.png";
import profilImage from "../../assets/images/icons/blank.png";

import save from "../../assets/images/icons/save.png";

import task from "../../assets/images/icons/task.svg";
import notificationIcon from "../../assets/images/icons/notification.svg";
import NotificationCard from "../Shared/Notification/NotificationCard";
import profile from "../../assets/images/icons/blank.png";

import { Spinner } from "reactstrap";
import { useState } from "react";
import { useEffect } from "react";
import { getAppliedJobs, getSavedJobs } from "../../requests/Auth";
import { getJobsInfo, getUser } from "../../core/AuthHelpers";
import JobPost from "./JobPost";
import SavedJobsCard from "./SavedJobsCard";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

function Jobs() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [notification, setNotification] = useState([]);
  const [jobs, setJobs] = useState(getJobsInfo());
  const [savedJobsData, setSavedJobs] = useState();
  const [appliedJobsData, setAppliedJobs] = useState();
  const [user, setUser] = useState(getUser());
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    const loadData = async () => {
      setLoading(false);
    };
    if (!getJobsInfo() || !user) {
      setLoading(true);
    } else {
      loadData();
    }
    const getSavedJobsDetails = () => {
      const saved = jobs.filter((item) =>
        user.saved_jobs.includes(item.id.toString())
      );

      setSavedJobs(saved);
    };
    const getAppliedJobsDetails = () => {
      const applied = jobs.filter((item) =>
        user.applied_jobs.includes(item.id.toString())
      );
      setAppliedJobs(applied);
    };
    if (window.location.pathname == "/jobs") {
      getSavedJobsDetails();
    }
    if (window.location.pathname == "/applied-jobs") {
      getAppliedJobsDetails();
      getSavedJobsDetails();
    }
    if (window.location.pathname == "/saved-jobs") {
      getSavedJobsDetails();
    }
  }, [window.location.pathname]);
  const percentage = 86;

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

  return (
    <>
      <BackgroundDesign />

      {loading && (
        <div className="dash-load">
          {" "}
          <Spinner
            animation="border"
            color="primary"
            type="grow"
            className="spinner"
          />
        </div>
      )}
      <div>
        <div className="main-jobs">
          <div
            className="w-30"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
            }}
          >
            
            <div
              style={{
                width: "100%",
                height: "55vh",
                borderRadius: "17px",
                backgroundColor: "#fff",
                padding: "20px 30px",
              }}
            >
              
              
                <div className="card-head text-center">
                    <div style={{width:"40%",margin:"auto"}} className="image-wrapper mb-3">
                      <CircularProgressbarWithChildren
                        value={percentage}
                        styles={progressbarStyle}
                      >
                        <img style={{width:"86%",borderRadius:"50%"}} src={user.avatar ? user.avatar : profilImage} />
                      </CircularProgressbarWithChildren>
                    </div>
                    <div style={{paddingTop:"10px"}}>
                      <h4 style={{fontSize:"20px"}} className="mb-0 pb-0">{user && user.name}</h4>
                      <p style={{color: "#5c5b5b",fontSize : "14px"}} className="">{user && user.position}Web Developer</p>
                      <p style={{maxHeight:'57px',fontSize:"13px",overflow:"hidden",marginTop:"15px",textAlign:"center",color: "rgb(92, 91, 91)",lineHeight:'1.1'}}>A kiddo who uses Bootstrap and Laravel in web development. Currently playing around with design via Figma laying around with design via Figma laying around with design via Figmalaying around with design via Figma</p>
                    </div>
                    <div style={{backgroundColor:'#F7DF1E',padding:"3px 0px",margin:'auto',marginTop:"20px",fontSize:'14px',borderRadius:"8px"}}>shahidafrid@gmail.com</div>
                    <div style={{margin:"auto",marginTop:'20px',width:'90%',display:'flex',justifyContent:"space-evenly",alignItems:"center"}}> <i style={{fontSize:"20px"}} class="fa fa-twitter" aria-hidden="true"></i><i style={{fontSize:"20px"}} class="fa fa-instagram" aria-hidden="true"></i><i style={{fontSize:"20px"}} class="fa fa-linkedin" aria-hidden="true"></i><i style={{fontSize:"20px"}} class="fa fa-github" aria-hidden="true"></i></div>
                  </div>
              </div>
            <div></div>
           

            <div
              className="saved-jobs-cont"
              style={{
                width: "100%",
                borderRadius: "17px",
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
              <SavedJobsCard jobs={savedJobsData} />
            </div>
          </div>

          <div
            className="w-35"
            style={{
              background: "#E5E5E5",
              borderRadius: "17px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
              paddingTop: "33px",
            }}
          >
            <div
              style={{
                width: "95%",
                height: "150px",
                borderRadius: "17px",
                backgroundColor: "#fff",
                display: "flex",
              }}
            >
              <div
                className=""
                style={{ height: "100%", width: "50%", padding: "5% 2%" }}
              >
                <h2 style={media ? { fontSize: "16px" } : { fontSize: "20px" }}>
                  What
                </h2>
                <p
                  style={
                    media
                      ? { fontSize: "12px" }
                      : { fontSize: "16px" }
                  }
                >
                  Job title or Company
                </p>
                <div
                  style={{
                    width: "100%",
                    height: "35px",
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
                style={{ height: "100%", width: "50%", padding: "5% 2%" }}
              >
                <h2 style={media ? { fontSize: "16px" } : { fontSize: "20px" }}>
                  Where
                </h2>
                <p
                  style={
                    media
                      ? { fontSize: "12px" }
                      : { fontSize: "16px" }
                  }
                >
                  City or State
                </p>
                <div
                  style={{
                    width: "100%",
                    height: "35px",
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
            <JobPost setIsOpen={setIsOpen} jobs={jobs} />
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
              style={{ padding: "20px 30px",height:"55vh"  }}
            >
              <h3 className="new-jobs-head">Notification</h3>
              <div className="new-notification-cards-cont">
                {notification.length > 0 ? (
                  notification.map((e, k) => {
                    return <NotificationCard key={k} message={e} />;
                  })
                ) : (
                  <>
                    <img
                      width="50%"
                      style={{ alignSelf: "center" }}
                      src={notificationIcon}
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



const progressbarStyle = {
  path: {
    strokeWidth: "7px",
    stroke: `rgba(69, 0, 137, 0.8)`,
    strokeLinecap: "butt",
    transition: "stroke-dashoffset 0.5s ease 0s",
    transformOrigin: "center center",
  },
  trail: {
    stroke: "#ffff",
    strokeLinecap: "round",
    transformOrigin: "center center",
  },
  background: {
    fill: "#3e98c7",
  },
};

const smallProgressbarStyle = {
  ...progressbarStyle,
  background: {
    fill: "#D9D9D9",
  },
};
