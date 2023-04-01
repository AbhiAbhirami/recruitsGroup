import React from "react";
import BackgroundDesign from "../Shared/BackgroundDesign";
import TodoCard from "../Shared/Todo/TodoCard";

import searchIcon from "../../assets/images/icons/search.png";
import profilImage from "../../assets/images/icons/blank.png";
import { useSelector, useDispatch } from "react-redux";

import save from "../../assets/images/icons/save.png";

import task from "../../assets/images/icons/task.svg";
import notificationIcon from "../../assets/images/icons/notification.svg";
import savedJobs from "../../assets/images/icons/savedJobs.svg";
import NotificationCard from "../Shared/Notification/NotificationCard";
import profile from "../../assets/images/icons/blank.png";

import { Spinner } from "reactstrap";
import { useState } from "react";
import { useEffect } from "react";
// import { getAppliedJobs, getSavedJobs } from "../../requests/Auth";
import { getUser } from "../../core/AuthHelpers";
import JobPost from "./JobPost";
import SavedJobsCard from "./SavedJobsCard";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import {
  getAllUserJobs,
  getAppliedJobs,
  getSavedJobs,
  setJobs,
} from "../../store/reducers/jobsReducer";
function Jobs() {
  const dispatch = useDispatch();

  const { loading, jobs, saved_jobs, applied_jobs } = useSelector((state) => ({
    loading: state.jobs.loading,
    jobs: state.jobs.jobs,
    saved_jobs: state.jobs.saved_jobs,
    applied_jobs: state.jobs.applied_jobs,
  }));
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [notification, setNotification] = useState([]);
  const [user, setUser] = useState(getUser());
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    if (window.location.pathname == "/jobs") {
      dispatch(getAllUserJobs());
      dispatch(getSavedJobs(user.id));
    }
    if (window.location.pathname == "/applied-jobs") {
      dispatch(getAppliedJobs(user.id));
      dispatch(getSavedJobs(user.id));
    }
    if (window.location.pathname == "/saved-jobs") {
      dispatch(getSavedJobs(user.id));
    }
  }, [dispatch, window.location.pathname]);
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

  const getSearchedJobs = async (e) => {
    if (e.target.id === "title" && !location) {
      setTitle(e.target.value);
      dispatch(setJobs({ title: e.target.value }));
    } else if (e.target.id === "title" && location) {
      setLocation(e.target.value);
      dispatch(setJobs({ title: e.target.value, location }));
    } else if (e.target.id === "location" && title) {
      setLocation(e.target.value);
      dispatch(setJobs({ title, location: e.target.value }));
    } else if (e.target.id === "location" && !title) {
      setLocation(e.target.value);
      dispatch(setJobs({ location: e.target.value }));
    } else {
      dispatch(setJobs({ title, location }));
    }
  };
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
                padding: "30px 30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="card-head text-center">
                <div
                  style={{ width: "120px", height: "120px", margin: "auto" }}
                  className="image-wrapper mb-3"
                >
                  <CircularProgressbarWithChildren
                    value={percentage}
                    styles={progressbarStyle}
                  >
                    <img
                      style={{
                        width: "95px",
                        height: "95px",
                        borderRadius: "50%",
                      }}
                      src={user.avatar ? user.avatar : profilImage}
                    />
                  </CircularProgressbarWithChildren>
                </div>
                <div style={{ paddingTop: "10px" }}>
                  <h4 style={{ fontSize: "20px" }} className="mb-0 pb-0">
                    {user && user.name}
                  </h4>
                  <p
                    style={{ color: "#5c5b5b", fontSize: "14px" }}
                    className=""
                  >
                    {user && user.position}
                  </p>
                  <p
                    style={{
                      maxHeight: "57px",
                      fontSize: "13px",
                      overflow: "hidden",
                      marginTop: "15px",
                      textAlign: "center",
                      color: "rgb(92, 91, 91)",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      lineClamp: 3,

                      lineHeight: "1.1",
                    }}
                    className="jobs-profile-descr"
                  >
                    A kiddo who uses Bootstrap and Laravel in web development.
                    Currently playing around with design via Figma laying around
                    with design via Figma laying around with design via
                    Figmalaying around with design via Figma
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: "#F7DF1E",
                    padding: "3px 0px",
                    margin: "auto",
                    marginTop: "20px",
                    fontSize: "14px",
                    borderRadius: "8px",
                  }}
                >
                  shahidafrid@gmail.com
                </div>
                <div
                  style={{
                    margin: "auto",
                    marginTop: "20px",
                    width: "90%",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <i
                    style={{ fontSize: "20px" }}
                    class="fa fa-twitter"
                    aria-hidden="true"
                  ></i>
                  <i
                    style={{ fontSize: "20px" }}
                    class="fa fa-instagram"
                    aria-hidden="true"
                  ></i>
                  <i
                    style={{ fontSize: "20px" }}
                    class="fa fa-linkedin"
                    aria-hidden="true"
                  ></i>
                  <i
                    style={{ fontSize: "20px" }}
                    class="fa fa-github"
                    aria-hidden="true"
                  ></i>
                </div>
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
                  alignItems: "center",
                  paddingLeft: "10px",
                }}
              >
                <img
                  src={save}
                  style={{ height: "20px", width: "20px" }}
                  alt=""
                />{" "}
                <h2 style={{ fontSize: "18px" }}>Saved Jobs </h2>
              </div>
              {/* {savedJobsData?.length >= 1 ?
                <SavedJobsCard jobs={savedJobsData} /> : <div style={{ width: "60%", margin: "auto", marginTop: "0" }}>
                  <img src={DefaultJob} alt="" width={"100%"} height={150} />
                  <p className="text-center">No Jobs Found</p>
                </div>} */}

              {true ? (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <SavedJobsCard user={user} jobs={saved_jobs} />
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={savedJobs} alt="saved-jobs" width="60%" />
                  <h5 style={{ marginTop: "15px" }}>No saved jobs</h5>
                </div>
              )}
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
              paddingBottom: "20px"
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
                <h2 style={media ? { fontSize: "16px" } : { fontSize: "18px" }}>
                  What
                </h2>
                <p style={media ? { fontSize: "12px" } : { fontSize: "16px" }}>
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
                    id="title"
                    placeholder="Web developer"
                    type="text"
                    onChange={(e) => getSearchedJobs(e)}
                  />
                  {/* <img height="80%" src={searchIcon} alt="search-icon" /> */}
                  <i
                    style={{ fontSize: "20px" }}
                    class="fa-solid fa-magnifying-glass"
                  ></i>
                </div>
              </div>
              <div
                className=""
                style={{ height: "100%", width: "50%", padding: "5% 2%" }}
              >
                <h2 style={media ? { fontSize: "16px" } : { fontSize: "18px" }}>
                  Where
                </h2>
                <p style={media ? { fontSize: "12px" } : { fontSize: "16px" }}>
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
                    id="location"
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
                    onChange={(e) => getSearchedJobs(e)}
                  />
                  {/* <img height="80%" src={searchIcon} alt="search-icon" /> */}
                  <i
                    style={{ fontSize: "20px" }}
                    class="fa-solid fa-magnifying-glass"
                  ></i>
                </div>
              </div>
            </div>
            {jobs.length > 0 && window.location.pathname == "/jobs" && (
              <JobPost setIsOpen={setIsOpen} allJobs={jobs} />
            )}
            {saved_jobs.length > 0 &&
              window.location.pathname == "/saved-jobs" && (
                <JobPost setIsOpen={setIsOpen} savedJobs={saved_jobs} />
              )}
            {applied_jobs.length > 0 &&
              window.location.pathname == "/applied-jobs" && (
                <JobPost setIsOpen={setIsOpen} appliedJobs={applied_jobs} />
              )}
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
              style={{ padding: "20px 30px", height: "55vh" }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <i
                  style={{ fontSize: "20px" }}
                  class="fa-sharp fa-solid fa-bell"
                ></i>
                <h3 className="new-jobs-head">Notification</h3>
              </div>

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
