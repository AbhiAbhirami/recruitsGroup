import React from "react";
// import BackgroundDesign from "../Shared/BackgroundDesign";
import Header from "../Shared/Header";
// import NewJobs from "../Shared/NewJobs/NewJobs";
// import Notification from "../Shared/Notification/Notification";
// import Todo from "../Shared/Todo/Todo";
// import UpcomingEvents from "../Shared/UpcomingEvents/UpcomingEvents";
import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardTitle,
  Button,
  Spinner,
} from "reactstrap";
import cardIcon1 from "../../assets/images/icons/card-icons-1.png";
import cardIcon2 from "../../assets/images/icons/card-icons-2.png";
import cardIcon3 from "../../assets/images/icons/card-icons-3.png";
import cardIcon4 from "../../assets/images/icons/card-icons-4.png";
import activity from "../../assets/images/icons/activity.png";
import company from "../../assets/images/icons/company.png";
import profilImage from "../../assets/images/icons/profile2.png";

import { IoMdArrowRoundDown } from "react-icons/io";

import {
  CircularProgressbarWithChildren,
  CircularProgressbar,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import VacancyChart from "./ReservationChart";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import moment from "moment";

function Dashboard() {
  const percentage = 86;

  const [month, setMonth] = React.useState();

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 2000));
      setLoading(false);
    };

    loadData();
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
      />
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
      <div className="dashboard-main-cont">
        <Header />
        {/* <BackgroundDesign /> */}
        <Container
          fluid
          className="px-5 pb-5 sm:px-2"
          style={{ backgroundColor: "#F2F2F2", overflow: "hidden" }}
        >
          <Row className="dashboard-cards mt-4">
            <Col className="col-xl-3 col-sm-6 sm:mb-20">
              <Card className="dashboard-card card-1 ">
                <CardBody className="d-flex align-items-center p-4">
                  <img src={cardIcon1} height={50} />

                  <div className="ms-auto text-end text-white">
                    <p className="fs-18 text-white mb-1">Interview Schedule</p>
                    <h1 className="text-white mb-0">87</h1>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="col-xl-3 col-sm-6 sm:mb-20">
              <Card className="dashboard-card card-2">
                <CardBody className="d-flex align-items-center p-4">
                  <img src={cardIcon2} height={50} />

                  <div className="ms-auto text-end text-white">
                    <p className="fs-18 text-white mb-1">Application Send</p>
                    <h1 className="text-white mb-0">87</h1>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="col-xl-3 col-sm-6 sm:mb-20">
              <Card className="dashboard-card card-3">
                <CardBody className="d-flex align-items-center p-4">
                  <img src={cardIcon3} height={50} />
                  <div className="ms-auto text-end text-white">
                    <p className="fs-18 text-white mb-1">Profile Viewed </p>
                    <h1 className="text-white mb-0">837</h1>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="col-xl-3 col-sm-6 sm:mb-20">
              <Card className="dashboard-card card-4">
                <CardBody className="d-flex align-items-center p-4">
                  <img src={cardIcon4} height={50} />

                  <div className="ms-auto text-end text-white">
                    <p className="fs-18 text-white mb-1">Unread Messages</p>
                    <h1 className="text-white mb-0">87</h1>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row className="mt-4 px-2 mb-5 ">
            <Col lg={3} className="p-0 pe-3 sm:mb-60">
              <Card className="personal-card p-3 position-relative">
                <CardBody>
                  <div className="card-head text-center">
                    <div className="image-wrapper mb-3">
                      <CircularProgressbarWithChildren
                        value={percentage}
                        styles={progressbarStyle}
                      >
                        <img src={profilImage} />
                      </CircularProgressbarWithChildren>
                    </div>
                    <div>
                      <h4 className="mb-0 pb-0">Salih</h4>
                      <p className="">Programmer</p>
                    </div>
                  </div>

                  <div className="card-skills d-flex align-items-center justify-content-between mt-4 mb-2">
                    <div className="skill-progress">
                      <CircularProgressbarWithChildren
                        value={80}
                        styles={progressbarStyle}
                      >
                        <div className="skill">
                          <p className="m-0 p-0">HTML</p>
                        </div>
                      </CircularProgressbarWithChildren>
                    </div>
                    <div className="skill-progress">
                      <CircularProgressbarWithChildren
                        value={65}
                        styles={progressbarStyle}
                      >
                        <div className="skill">
                          <p className="m-0 p-0">CSS</p>
                        </div>
                      </CircularProgressbarWithChildren>
                    </div>
                    <div className="skill-progress">
                      <CircularProgressbarWithChildren
                        value={50}
                        styles={progressbarStyle}
                      >
                        <div className="skill">
                          <p className="m-0 p-0">PHP</p>
                        </div>
                      </CircularProgressbarWithChildren>
                    </div>
                  </div>
                  <hr className="w-100" />

                  <div className="card-activities py-3">
                    <h5 className="mb-3">Recent Activities</h5>
                    <div className="d-flex align-items-start mb-2">
                      <div className="me-3">
                        <img src={activity} />
                      </div>
                      <div>
                        <h6 className="mb-0">
                          Your application has accepted by <span>company</span>
                        </h6>
                        <p>12h ago</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-start">
                      <div className="me-3">
                        <img src={activity} />
                      </div>
                      <div>
                        <h6 className="mb-0">
                          Your application has accepted by <span>company</span>
                        </h6>
                        <p>12h ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="footer-arrow position-absolute d-flex align-items-center justify-content-center w-100">
                    <div className="arrow-icon p-2 bg-white">
                      <IoMdArrowRoundDown size={"2rem"} />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={9} className="dashboard-chart sm:pl-0">
              <Card className="mb-4">
                <CardBody>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <CardTitle>Vacancy Stats</CardTitle>
                    <div className="month-selector-wrap">
                      <input
                        type="month"
                        onChange={(e) => setMonth(e.target.value)}
                        id="bdaymonth"
                        name="bdaymonth"
                        value={"2023-01"}
                      />
                      <MdOutlineKeyboardArrowDown size={"1.2rem"} />
                    </div>
                  </div>
                  <div className="card-body">
                    <div id="vacancyChart" className="vacancyChart">
                      <VacancyChart />
                    </div>
                  </div>
                </CardBody>
              </Card>
              <p>Recomended Jobs</p>
              <div className="recomended-jobs d-flex">
                <Card className="p-2">
                  <CardBody>
                    <div className="d-flex align-items-start justify-content-between">
                      <div>
                        <p className="mb-1">Company Name</p>
                        <h5>
                          Database Manager <br />
                          <span className="text-muted">$12,000 - $25,000</span>
                        </h5>
                      </div>
                      <div className="img-wrap">
                        <img src={activity} />
                      </div>
                    </div>
                    <p className="description text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      ullamco laboris{" "}
                    </p>

                    <div className="d-flex align-items-center justify-content-between">
                      <Button className="px-4">Full Time</Button>
                      <p className="m-0 p-0 fw-light">India,Kerala</p>
                    </div>
                  </CardBody>
                </Card>
                <Card className="p-2">
                  <CardBody>
                    <div className="d-flex align-items-start justify-content-between">
                      <div>
                        <p className="mb-1">Company Name</p>
                        <h5>
                          Database Manager <br />
                          <span className="text-muted">$12,000 - $25,000</span>
                        </h5>
                      </div>
                      <div className="img-wrap">
                        <img src={activity} />
                      </div>
                    </div>
                    <p className="description text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      ullamco laboris{" "}
                    </p>

                    <div className="d-flex align-items-center justify-content-between">
                      <Button className="px-4">Full Time</Button>
                      <p className="m-0 p-0 fw-light">India,Kerala</p>
                    </div>
                  </CardBody>
                </Card>
                <Card className="p-2">
                  <CardBody>
                    <div className="d-flex align-items-start justify-content-between">
                      <div>
                        <p className="mb-1">Company Name</p>
                        <h5>
                          Database Manager <br />
                          <span className="text-muted">$12,000 - $25,000</span>
                        </h5>
                      </div>
                      <div className="img-wrap">
                        <img src={activity} />
                      </div>
                    </div>
                    <p className="description text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      ullamco laboris{" "}
                    </p>

                    <div className="d-flex align-items-center justify-content-between">
                      <Button className="px-4">Full Time</Button>
                      <p className="m-0 p-0 fw-light">India,Kerala</p>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>

          <Row>
            <p> Featured Companies</p>
            <div className="d-flex featured-companies">
              <Card className="me-3">
                <CardBody className="d-flex align-items-center p-2">
                  <div className="img-wrap me-3">
                    <img src={company} />
                  </div>
                  <div className="pe-3">
                    <h5 className="p-0 m-0">Company Name</h5>
                    <p className="p-0 m-0 text-muted">21 Vacancy</p>
                  </div>
                </CardBody>
              </Card>
              <Card className="me-3">
                <CardBody className="d-flex align-items-center p-2">
                  <div className="img-wrap me-3">
                    <img src={company} />
                  </div>
                  <div className="pe-3">
                    <h5 className="p-0 m-0">Company Name</h5>
                    <p className="p-0 m-0 text-muted">21 Vacancy</p>
                  </div>
                </CardBody>
              </Card>
              <Card className="me-3">
                <CardBody className="d-flex align-items-center p-2">
                  <div className="img-wrap me-3">
                    <img src={company} />
                  </div>
                  <div className="pe-3">
                    <h5 className="p-0 m-0">Company Name</h5>
                    <p className="p-0 m-0 text-muted">21 Vacancy</p>
                  </div>
                </CardBody>
              </Card>
              <Card className="me-3">
                <CardBody className="d-flex align-items-center p-2">
                  <div className="img-wrap me-3">
                    <img src={company} />
                  </div>
                  <div className="pe-3">
                    <h5 className="p-0 m-0">Company Name</h5>
                    <p className="p-0 m-0 text-muted">21 Vacancy</p>
                  </div>
                </CardBody>
              </Card>

              <Card className="me-3">
                <CardBody className="d-flex align-items-center p-2">
                  <div className="img-wrap me-3">
                    <img src={company} />
                  </div>
                  <div className="pe-3">
                    <h5 className="p-0 m-0">Company Name</h5>
                    <p className="p-0 m-0 text-muted">21 Vacancy</p>
                  </div>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>

        {/* <div className='dashboard-section-cont' >
                <h4 className='dashboard-header'>Dashboard</h4>
                <div className='dashboard-first-section'>
                <NewJobs />
                <Notification />
                
                </div>
                <div className='dashboard-first-section'>
                <UpcomingEvents />
                <Todo />
                
                </div>
                
            </div> */}
      </div>
    </>
  );
}

export default Dashboard;

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
