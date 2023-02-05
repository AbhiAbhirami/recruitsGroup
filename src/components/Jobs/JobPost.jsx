import React, { useState } from "react";
import save from "../../assets/images/icons/save.png";
import send from "../../assets/images/icons/send.png";
import { getJobsInfo } from "../../core/AuthHelpers";
import JobModal from "../Shared/JobModal/Jobmodal";

const JobPost = () => {
  const [jobs, setJobs] = useState(getJobsInfo());
  const [job, setJob] = useState();
  const [open, setOpen] = useState(false);
  const openModal = (e, item) => {
    setOpen(true);
    setJob(item);
  };
  return (
    <>
      <JobModal
        closeModal={() => setOpen(false)}
        applied={false}
        isOpen={open}
        job={job}
      />
      <div
        style={{ width: "90%", borderRadius: "10px", backgroundColor: "#fff" }}
      >
        {jobs.map((item) => {
          <div>{item.title}</div>;
        })}
        {jobs.length
          ? jobs.map((item) => {
              return (
                <>
                  <div className="job-card-cont" style={{ padding: "3% 5%" }}>
                    <img
                      className="newjob-company-logo"
                      src={item.logo}
                      alt="company-logo"
                    />
                    <div className="new-job-company-description">
                      <span className="new-job-company-heading"></span>
                      <div className="new-job-company-desc-div">
                        <span className="new-job-company-post">
                          {item.title}
                        </span>
                        <div className="new-job-time-of-upload">
                          <span>{item.created_on}</span>
                          <span className="dot"></span>
                          <span>
                            {item.applied_candidates?.length > 0
                              ? item.applied_candidates.length
                              : "No applicants yet"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="new-job-company-extra-detail">
                      <span>{item.location}</span>
                      <span
                        className="new-job-view-deatil-tag"
                        onClick={(e) => openModal(e, item)}
                      >
                        VIEW DETAILS
                      </span>
                    </div>
                  </div>
                  <img
                    src={item.description_image}
                    style={{ width: "100%" }}
                    alt=""
                    onClick={() => setOpen(true)}
                  />
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
                        <img
                          style={{ height: "100%", width: "100%" }}
                          src={save}
                          alt=""
                        />
                      </div>
                      <div style={{ height: "30px", width: "30px" }}>
                        <img
                          style={{ height: "100%", width: "100%" }}
                          src={send}
                          alt=""
                        />
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
                </>
              );
            })
          : "No Jobs Found"}
      </div>
    </>
  );
};

export default JobPost;
