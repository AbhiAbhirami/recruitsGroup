import React, { useState } from "react";
import Modal from "react-modal";
import { useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addEducation,
  updateEducation,
} from "../../../store/reducers/profileReducer";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { FaSpinner } from "react-icons/fa";
import { FormCheck } from "react-bootstrap";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: window.screen.width < 768 ? "90%" : "50%",
    padding: "0",
    zIndex: 999,
  },
};

function EducationModal({ isOpen, closeModal, currentData }) {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => ({
    loading: state.profile.loading,
  }));

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [state, setState] = useState();

  const onSubmit = async (values) => {
    console.log(values);
    const credentials = {
      education: { ...values, current_course: false },
      closeModal: closeModal,
    };
    if (state?.id) {
      dispatch(updateEducation({ ...credentials, educationId: state?.id }));
    } else {
      dispatch(addEducation(credentials));
    }
  };

  useEffect(() => {
    setState(currentData);
  }, [currentData?.id]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="job-modal-wrapper ed-modal">
          <div
            className="modal-header p-30 "
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="modal-close-btn" onClick={closeModal}>
              <IoIosClose />
            </div>
            <form className="education-form" onSubmit={handleSubmit(onSubmit)}>
              <div
                className=""
                style={{
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    textAlign: "start",
                    fontSize: 18,
                    marginBottom: 20,
                  }}
                  className="text-muted"
                >
                  {state?.id ? "Update" : "Add"} Education
                </h3>
              </div>

              <div>
                <label htmlFor="name" className="input-label">
                  Education <span className="text-danger">*</span>
                </label>
                <select
                  name="education"
                  className="profile-input"
                  defaultValue={state?.education}
                  {...register("education", { required: true })}
                >
                  <option value="">Select education</option>
                  <option
                    selected={state?.education === "btech"}
                    value={"btech"}
                  >
                    b.tech
                  </option>
                  <option selected={state?.education === "sslc"} value={"sslc"}>
                    sslc
                  </option>
                </select>
                {errors.education && (
                  <p
                    className="validation"
                    style={{ fontSize: 12, color: "red", marginBottom: 15 }}
                  >
                    Education Name is required
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="name" className="input-label">
                  University/Institute <span className="text-danger">*</span>
                </label>
                {/* <Controller
                  name="college"
                  control={control}
                  defaultValue={[{ value: state?.college, label: state?.college },]}
                  render={({ field }) => <Select
                    {...field}
                    options={[
                      { value: "KTU", label: "KTU" },
                      { value: "CALICUT", label: "CALICUT" },
                      { value: "vanilla", label: "Vanilla" }
                    ]}
                  />}
                /> */}
                <label htmlFor="name" className="input-label">
                  University/Institute <span className="text-danger">*</span>
                </label>
                <select
                  name="college"
                  {...register("college", { required: true })}
                  className="profile-input"
                  defaultValue={state?.college}
                >
                  <option value="">Select university/institute</option>
                  <option
                    selected={state?.college === "CALICUT"}
                    value={"CALICUT"}
                  >
                    CALICUT
                  </option>
                  <option selected={state?.college === "KTU"} value={"KTU"}>
                    KTU
                  </option>
                </select>
                {errors.college && (
                  <p
                    className="validation"
                    style={{ fontSize: 12, color: "red", marginBottom: 15 }}
                  >
                    College Name is required
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="name" className="input-label">
                  Course <span className="text-danger">*</span>
                </label>
                <select
                  name="course"
                  {...register("course", { required: true })}
                  className="profile-input"
                  defaultValue={state?.course}
                >
                  <option value="">Select course</option>
                  <option
                    selected={state?.course === "MECHANICAL"}
                    value={"MECHANICAL"}
                  >
                    MECHANICAL
                  </option>
                  <option selected={state?.course === "CS"} value={"CS"}>
                    CS
                  </option>
                </select>
                {errors.course && (
                  <p
                    className="validation"
                    style={{ fontSize: 12, color: "red", marginBottom: 15 }}
                  >
                    Course Name is required
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="name" className="input-label">
                  Specialization <span className="text-danger">*</span>
                </label>
                <select
                  name="specification"
                  {...register("specification", { required: true })}
                  className="profile-input"
                  defaultChecked={state?.specification}
                >
                  <option value="">Select Specialization</option>
                  <option
                    selected={state?.specification === "mtech"}
                    value={"mtech"}
                  >
                    M.TECH
                  </option>
                  <option
                    selected={state?.specification === "phd"}
                    value={"phd"}
                  >
                    PHD
                  </option>
                </select>
                {errors.specification && (
                  <p
                    className="validation"
                    style={{ fontSize: 12, color: "red", marginBottom: 15 }}
                  >
                    Specification is required
                  </p>
                )}
              </div>
              <div style={{ marginTop: 10, marginBottom: 20 }}>
                <label htmlFor="name" className="input-label">
                  Course Type <span className="text-danger">*</span>
                </label>
                <div className="input-radio-group">
                  <Controller
                    name={"type"}
                    control={control}
                    // rules={{ required: true }}
                    render={({ field: { onChange } }) => {
                      return (
                        <FormCheck
                          type="radio"
                          name="type"
                          label="Full time"
                          id="Fulltime"
                          className="current-work"
                          onChange={onChange}
                          value="full_time"
                          defaultChecked={state?.type === "full_time"}
                        />
                      );
                    }}
                  />
                  <Controller
                    name={"type"}
                    control={control}
                    render={({ field: { onChange } }) => {
                      return (
                        <FormCheck
                          type="radio"
                          name="type"
                          label="Part time"
                          id="Parttime"
                          className="current-work"
                          onChange={onChange}
                          value="part_time"
                          defaultChecked={state?.type === "part_time"}
                        />
                      );
                    }}
                  />
                  <Controller
                    name={"type"}
                    control={control}
                    render={({ field: { onChange } }) => {
                      return (
                        <FormCheck
                          type="radio"
                          name="type"
                          label="Correspondence"
                          id="Correspondence"
                          className="current-work"
                          onChange={onChange}
                          value="correspondence"
                          defaultChecked={state?.type === "correspondence"}
                        />
                      );
                    }}
                  />

                  {/* <div>
                    <input
                      type={"radio"}
                      id="full_time"
                      value="full_time"
                      {...register("type", { required: false })}
                      name="type"
                      defaultChecked={state?.type === 'full_time'}
                    />
                    <label htmlFor="full_time">Full time</label>
                  </div> */}
                  {/* <div>
                    <input
                      type={"radio"}
                      id="part_time"
                      value="part_time"
                      {...register("type", { required: false })}
                      name="type"
                      defaultChecked={state?.type === 'part_time'}
                    />
                    <label htmlFor="part_time">Part ime</label>
                  </div> */}
                  {/* <div>
                    <input
                      type={"radio"}
                      id="correspondence"
                      value="correspondence"
                      {...register("type", { required: false })}
                      name="type"

                      defaultChecked={state?.type === 'correspondence'}
                    />
                    <label htmlFor="correspondence">
                      Correspondence/Distanceearnino
                    </label>
                  </div> */}
                </div>
                {errors.type && (
                  <p
                    className="validation"
                    style={{
                      fontSize: 12,
                      color: "red",
                      marginBottom: 15,
                      marginTop: 5,
                    }}
                  >
                    Course Type is required
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="name" className="input-label">
                  Course duration <span className="text-danger">*</span>
                </label>
                <div className="date-picker course-duration">
                  <div className="start-date">
                    <Controller
                      name={"start_date"}
                      defaultValue={
                        state?.start_date
                          ? new Date(state?.start_date)
                          : Date.now()
                      }
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { onChange, value } }) => {
                        return (
                          <DatePicker
                            selected={value}
                            // showMonthYearPicker
                            showYearPicker
                            dateFormat="yyyy"
                            className="form-control profile-input"
                            onChange={onChange}
                          />
                        );
                      }}
                    />
                    {errors.start_date && (
                      <p
                        className="validation"
                        style={{ fontSize: 12, color: "red", marginBottom: 15 }}
                      >
                        Start Date is required
                      </p>
                    )}
                  </div>
                  <span>To</span>
                  <div className="end-date">
                    <Controller
                      name={"end_date"}
                      defaultValue={
                        state?.end_date ? new Date(state?.end_date) : Date.now()
                      }
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { onChange, value } }) => {
                        return (
                          <DatePicker
                            selected={value}
                            showYearPicker
                            dateFormat="yyyy"
                            className={`form-control profile-input`}
                            onChange={onChange}
                          />
                        );
                      }}
                    />
                    {errors.end_date && (
                      <p
                        className="validation"
                        style={{ fontSize: 12, color: "red", marginBottom: 15 }}
                      >
                        End Date is required
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* <div>
                <label htmlFor="name" className="input-label">
                  Course duration <span className="text-danger">*</span>
                </label>

                <div className="course-duration">
                  <select
                    id="years"
                    name="start_date"
                    {...register("start_date", { required: false })}
                    className="profile-input"
                    defaultValue={moment(state?.start_date).format('YYYY').toString()}
                  >
                    <option value=""> Starting year </option>
                    <option selected={state?.start_date === '2023'} value="2023"> 2023 </option>
                    <option selected={state?.start_date === '2022'} value="2022"> 2022 </option>
                    <option selected={state?.start_date === '2021'} value="2021"> 2021</option>
                    <option selected={state?.start_date === '2020'} value="2020"> 2020 </option>
                  </select>
                  <span>To</span>
                  <select
                    id="years"
                    name="end_date"
                    {...register("end_date", { required: false })}
                    className="profile-input"
                    defaultValue={moment(state?.end_date).format('YYYY').toString()}
                  >
                    <option value=""> Ending year </option>
                    <option selected={state?.end_date === '2023'} value="2023"> 2023 </option>
                    <option selected={state?.end_date === '2022'} value="2022"> 2022 </option>
                    <option selected={state?.end_date === '2023'} value="2021"> 2021</option>
                    <option selected={state?.end_date === '2020'} value="2020"> 2020 </option>
                  </select>
                </div>
              </div> */}
              <div>
                <label htmlFor="name" className="input-label">
                  Grading System <span className="text-danger">*</span>
                </label>
                <select
                  name="score"
                  {...register("score", { required: true })}
                  className="profile-input"
                  defaultValue={state?.score}
                >
                  <option value="">select grading system</option>
                  <option selected={state?.score === "1"} value={1}>
                    1
                  </option>
                  <option selected={state?.score === "2"} value={2}>
                    2
                  </option>
                  <option selected={state?.score === "3"} value={3}>
                    3
                  </option>
                  <option selected={state?.score === "4"} value={4}>
                    4
                  </option>
                </select>
                {errors.score && (
                  <p
                    className="validation"
                    style={{ fontSize: 12, color: "red", marginBottom: 15 }}
                  >
                    Score is required
                  </p>
                )}
              </div>
              <div
                style={{
                  marginTop: "2rem",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <button
                  style={{
                    height: 38,
                    marginRight: 10,
                    padding: "10px 20px",
                    border: "none",
                    color: "#4892f0",
                    backgroundColor: "transparent",
                  }}
                  className=""
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  style={{
                    height: 38,
                    padding: "10px 20px",
                    border: "none",
                    backgroundColor: "#4892f0",
                    color: "#fff",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  type={"submit"}
                  className="button"
                >
                  Save{" "}
                  {loading && (
                    <FaSpinner
                      className="spinner"
                      style={{ margin: "0 4px" }}
                    />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default EducationModal;
