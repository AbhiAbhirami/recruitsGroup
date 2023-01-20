import React from "react";
import Modal from "react-modal";
import google from "../../../assets/images/icons/google.png";
import dot from "../../../assets/images/icons/dot.png";
import marker from "../../../assets/images/icons/placemarker.png";
import modalBg from "../../../assets/images/background/bg4.png";
import bookmark from "../../../assets/images/icons/bookmark.png";
import send from "../../../assets/images/icons/send.png";
import closebtn from "../../../assets/images/icons/close.png";

import { Link } from "react-router-dom";
let media = window.screen.width < 600;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    padding: "0",
  },
};

function JobModal({ isOpen, closeModal }) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <img
          src={closebtn}
          height={25}
          alt="close-modal"
          className="modal-close-btn"
          onClick={closeModal}
        /> */}

        <div className="job-modal-wrapper">
          <div className="modal-header p-30">
            <img src={google} height={50} alt="header-logo" />
            <div className="content">
              <h3>Google</h3>
              <p>
                Full Stack Developer <br /> 3 Days ago{" "}
                <img src={dot} height={5} alt="header-logo" /> 13 Applied{" "}
              </p>
            </div>
            <div>
              <img src={marker} height={15} alt="header-logo" />
              Singapore
            </div>
          </div>
          <div className="modal-image-section">
            <img
              src={modalBg}
              height={"100%"}
              width={"100%"}
              alt="header-logo"
            />
          </div>
          <div className="modal-job-details p-30">
            <p>
              <span>UI / UX Designer -</span> Full time / Intern
              <br />
              <Link to={"#!"}>Cyces Innovation Labs LLP</Link>
              <br />
              <hr />
              Alandur , Chennai , Tamil Nadu
              <br /> ₹1,80,000 - ₹4,80,000 a year
            </p>
          </div>
          <div className="modal-job-full-details p-30">
            <h2>Full job discription</h2>
            <div className="details">
              <p>
                Strong knowledge in HTML5, CSS3 or SCSS, Bootstrap 5, JQuery,
                Adobe XD or Photoshop. Develop process flows, wireframes, and
                mockups to e ffectively conceptualize and communicate high-level
                design strategies and detailed interaction models. Advanced
                skills in problem-solving and familiarity with technical
                constraints and limitations as they apply to design for
                platforms such as desktop and mobile, Android, and iOS.
                Preferring immediate joiner
              </p>
              <h3>Requirements :</h3>
              <ul className="detail-ul">
                <li>
                  Bachelor's degree in Design, related field, or equivalent
                  experience.
                </li>
                <li>2 years of experience in UX Design.</li>
                <li>
                  A design portfolio demonstrating design principles for web
                  and/or mobile platforms.
                </li>
                <li>
                  Experience and passion designing for the low/no code app
                  building space or for enterprise customers and/or developers
                </li>
              </ul>
              <h3>Qualifications:</h3>
              <ul className="detail-ul">
                <li>Any Degree or Diploma/B.E. in civil background.</li>
              </ul>
              <div className="about-card">
                <h3>About the company</h3>
                <div className="about">
                  <img src={google} height={50} alt="header-logo" />
                  <p>
                    <span>Google</span>
                    <br /> 150 - 300+ Employees . Software company
                  </p>
                </div>
                <p>
                  Looking at the future, the world knows that Artificial
                  intelligence, Robotics, and Web designs are going to be in
                  great demand. More than 80% of the jobs will be about
                  technology. Keeping this in mind, Techokids have stepped up
                  and makes sure that no student goes more about coding
                </p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div>
              <img src={send} height={30} alt="" />
              <img src={bookmark} height={30} alt="" />
            </div>
            <button>Apply Now</button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default JobModal;
