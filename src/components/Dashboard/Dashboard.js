import React, { useEffect, useState } from "react";
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
import profilImage from "../../assets/images/icons/blank.png";
import DatePicker from "react-datepicker";
import { IoMdArrowRoundDown } from "react-icons/io";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import VacancyChart from "./ReservationChart";
import { getUser } from "../../core/AuthHelpers";
import Loader from "../Shared/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUserJobs,
  getFeaturedCompany,
  getRecommendedJobs,
} from "../../store/reducers/jobsReducer";
import { getCurrentUserDetails } from "../../store/reducers/profileReducer";
import * as authHelper from "../../core/AuthHelpers";

function Dashboard() {
  const percentage = 86;
  const dispatch = useDispatch();

  const { jobs, verifiedUser, recommendedJobs, featuredCompany } = useSelector(
    (state) => ({
      jobs: state.jobs.jobs,
      recommendedJobs: state.jobs.recommended,
      featuredCompany: state.jobs.featuredCompany,
      verifiedUser: state.profile.verifiedUser,
    })
  );

  const saved_jobs = verifiedUser?.saved_jobs?.map((i) => parseInt(i));
  // const recommendedJobs = jobs?.filter(
  //   (job) => saved_jobs?.includes(job?.id) && job
  // );

  const token = authHelper.getAuth();

  const [user, setUser] = useState(getUser());
  const [month, setMonth] = React.useState(Date.now());

  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    const loadData = async () => {
      setLoading(false);
    };
    user && loadData();
  }, [loading]);

  useEffect(() => {
    dispatch(getAllUserJobs());
    dispatch(getCurrentUserDetails(token));
    dispatch(getRecommendedJobs());
    dispatch(getFeaturedCompany());
  }, []);

  const userDetail = localStorage?.getItem("user-data");

  useEffect(() => {
    if (!userDetail?.id) {
      dispatch(getCurrentUserDetails(token));
    }
  }, [userDetail?.id]);

  const [recentActivities, setRecentActivities] = useState({
    isClicked: false,
    data: [1, 2],
  });

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
      />
      {loading && <Loader />}
      <div className="dashboard-main-cont">
        {/* <BackgroundDesign /> */}
        <Container
          fluid
          className="px-5 pb-5 sm:px-2"
          style={{ backgroundColor: "#F2F2F2", overflow: "hidden" }}
        >
          <Row className="dashboard-cards mt-4">
            <Col className="col-xl-3 col-sm-6 sm:mb-10 md:mb-10">
              <Card className="dashboard-card card-1 shiny-effect">
                <CardBody className="d-flex align-items-center p-4">
                  <img src={cardIcon1} height={50} />
                  <div className="ms-auto text-end text-white">
                    <p className="fs-18 text-white mb-1">Interview Schedule</p>
                    <h1 className="text-white mb-0">87</h1>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="col-xl-3 col-sm-6 sm:mb-10 md:mb-10">
              <Card className="dashboard-card card-2 shiny-effect">
                <CardBody className="d-flex align-items-center p-4">
                  <img src={cardIcon2} height={50} />

                  <div className="ms-auto text-end text-white">
                    <p className="fs-18 text-white mb-1">Application Send</p>
                    <h1 className="text-white mb-0">
                      {user?.applied_jobs?.length}
                    </h1>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="col-xl-3 col-sm-6 sm:mb-10 md:mb-10">
              <Card className="dashboard-card card-3 shiny-effect">
                <CardBody className="d-flex align-items-center p-4">
                  <img src={cardIcon3} height={50} />
                  <div className="ms-auto text-end text-white">
                    <p className="fs-18 text-white mb-1">Profile Viewed </p>
                    <h1 className="text-white mb-0">837</h1>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="col-xl-3 col-sm-6 sm:mb-10 md:mb-10">
              <Card className="dashboard-card card-4 shiny-effect">
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

          <Row className="mt-4 px-2 mb-5">
            <Col lg={3} className="lg:pe-3 sm:mb-60 md:mb-60 md:p-0">
              <Card className="personal-card p-3 position-relative">
                <CardBody>
                  <div className="card-head text-center">
                    <div className="image-wrapper mb-3">
                      <CircularProgressbarWithChildren
                        value={percentage}
                        styles={progressbarStyle}
                      >
                        <img src={user.avatar ? user.avatar : profilImage} />
                      </CircularProgressbarWithChildren>
                    </div>
                    <div>
                      <h4 className="mb-0 pb-0">{user && user.name}</h4>
                      <p className="">{user && user.position}</p>
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

                  <div className="card-activities py-3 pb-5">
                    <h5 className="mb-4">Recent Activities</h5>
                    {recentActivities?.data?.map((i, key) => (
                      <div className="d-flex align-items-start mb-2" key={key}>
                        <div className="me-3">
                          <img src={activity} />
                        </div>
                        <div>
                          <h6 className="mb-0">
                            Your application has accepted by{" "}
                            <span>company</span>
                          </h6>
                          <p>12h ago</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="footer-arrow position-absolute d-flex align-items-center justify-content-center w-100">
                    <div
                      className="arrow-icon p-2 bg-white"
                      onClick={() =>
                        recentActivities?.isClicked === false &&
                        setRecentActivities({
                          isClicked: true,
                          data: [...recentActivities.data, 3, 4],
                        })
                      }
                    >
                      <IoMdArrowRoundDown size={"2rem"} />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={9} className="dashboard-chart sm:pl-0 ">
              <Card className="mb-4 ">
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
                      {/* <input
                        type="month"
                        onChange={(e) => setMonth(e.target.value)}
                        id="bdaymonth"
                        name="bdaymonth"
                        value={"2023-01"}
                      />
                      <MdOutlineKeyboardArrowDown size={"1.2rem"} /> */}
                      <div className="input-group input-group-sm ">
                        <DatePicker
                          selected={month}
                          onChange={(date) => setMonth(date)}
                          dateFormat="MMMM"
                          showMonthYearPicker
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div id="vacancyChart" className="vacancyChart">
                      <VacancyChart />
                    </div>
                  </div>
                </CardBody>
              </Card>
              {recommendedJobs?.length >= 1 ? (
                <>
                  <p>Recommended Jobs</p>
                  <div className="recomended-jobs d-flex p-2">
                    {recommendedJobs?.map((job, key) => (
                      <Card key={key} className="p-2 zoom-effect zoom-effect">
                        <CardBody
                          style={{
                            justifyContent: "space-between",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <div className="d-flex align-items-start justify-content-between">
                            <div>
                              <p className="mb-1">{job?.company}</p>
                              <h5>
                                {job?.title} <br />
                                <span className="text-muted">
                                  ${job?.salary_offered}
                                </span>
                              </h5>
                            </div>
                            <div className="img-wrap">
                              <img src={activity} />
                            </div>
                          </div>
                          <p className="description text-muted">
                            {job?.job_description[0]?.length >= 100
                              ? job?.job_description[0]?.slice(0, 100) + "..."
                              : job?.job_description[0]}{" "}
                          </p>

                          <div className="d-flex align-items-center justify-content-between">
                            <Button className="px-4">{job?.job_type}</Button>
                            <p className="m-0 p-0 fw-light">{job?.location}</p>
                          </div>
                        </CardBody>
                      </Card>
                    ))}
                  </div>
                </>
              ) : (
                <></>
              )}
            </Col>
          </Row>

          <Row>
            <p> Featured Companies</p>
            <div className="d-flex featured-companies p-2">
              {featuredCompany?.map((company, key) => (
                <Card key={key} className="me-3 zoom-effect">
                  <CardBody className=" d-flex align-items-center p-2">
                    <div className="img-wrap me-3">
                      <img src={company?.logo} />
                    </div>
                    <div className="pe-3">
                      <h5 className="p-0 m-0">{company?.company}</h5>
                      <p className="p-0 m-0 text-muted">
                        {company?.company_type}
                      </p>
                      <p className="p-0 m-0 text-muted">{company?.location}</p>
                    </div>
                  </CardBody>
                </Card>
              ))}
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
