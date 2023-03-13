import React from "react";
import Modal from "react-modal";
import { useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { Controller, useForm } from "react-hook-form";
import {
  addCareerProfile,
  updateCareerProfile,
} from "../../../store/reducers/profileReducer";
import { useDispatch, useSelector } from "react-redux";
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

function CareerModal({ isOpen, closeModal, currentData }) {
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

  const onSubmit = async (values) => {
    console.log(values);

    const credentials = {
      career: { ...values },
      closeModal: closeModal,
    };
    if (currentData?.id) {
      dispatch(
        updateCareerProfile({
          ...credentials,
          career: { ...currentData, ...credentials?.career },
          careerId: currentData?.id,
        })
      );
    } else {
      dispatch(addCareerProfile(credentials));
    }
  };

  console.log("title =>");
  console.log("data :", currentData);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="job-modal-wrapper ed-modal carrer-modal">
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
                  textAlign: "start",
                  marginBottom: 20,
                }}
              >
                <h3
                  style={{
                    textAlign: "start",
                    fontSize: 18,
                  }}
                  className="text-muted"
                >
                  Career Profile
                </h3>
                <p>
                  This information will help the The most crucial document
                  required to confirm your identification during the hiring
                  procedure
                </p>
              </div>

              <div>
                <label htmlFor="name" className="input-label">
                  Current Industry <span className="text-danger">*</span>
                </label>
                <select
                  name="current_industry"
                  className="profile-input"
                  defaultValue={currentData?.current_industry}
                  {...register("current_industry", { required: true })}
                >
                  <option value="">Eg: IT Services & Consulting</option>
                  <option value={"it"}>Services</option>
                  <option value={"consulting"}>Consulting</option>
                </select>
                {errors.current_industry && (
                  <p
                    className="validation"
                    style={{ fontSize: 12, color: "red", marginBottom: 15 }}
                  >
                    Industry is required
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="name" className="input-label">
                  Department <span className="text-danger">*</span>
                </label>
                <select
                  name="department"
                  {...register("department", { required: true })}
                  defaultValue={currentData?.department}
                  className="profile-input"
                >
                  <option value="">Eg: Data Science and Analytics </option>
                  <option value={"Science"}>Science</option>
                  <option value={"Analytics"}>Analytics</option>
                </select>
                {errors.department && (
                  <p
                    className="validation"
                    style={{ fontSize: 12, color: "red", marginBottom: 15 }}
                  >
                    Department is required
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="name" className="input-label">
                  Role Category <span className="text-danger">*</span>
                </label>
                <select
                  name="role_category"
                  {...register("role_category", { required: true })}
                  defaultValue={currentData?.role_category}
                  className="profile-input"
                >
                  <option value="">Select Role Category</option>
                  <option value={"hr"}>HR</option>
                  <option value={"developer"}>Developer</option>
                </select>
                {errors.role_category && (
                  <p
                    className="validation"
                    style={{ fontSize: 12, color: "red", marginBottom: 15 }}
                  >
                    Role Category is required
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="name" className="input-label">
                  Job Role <span className="text-danger">*</span>
                </label>
                <select
                  name="job_role"
                  {...register("job_role", { required: true })}
                  defaultValue={currentData?.job_role}
                  className="profile-input"
                >
                  <option value="">Select Job Role</option>
                  <option value={"HR"}>HR</option>
                  <option value={"Manager"}>Manager</option>
                </select>
                {errors.job_role && (
                  <p
                    className="validation"
                    style={{ fontSize: 12, color: "red", marginBottom: 15 }}
                  >
                    Job Role is required
                  </p>
                )}
              </div>

              <div style={{ marginTop: 10, marginBottom: 30 }}>
                <label htmlFor="name" className="input-label">
                  Desired Job Type <span className="text-danger">*</span>
                </label>
                <div className="input-radio-group" style={{ maxWidth: 250 }}>
                  <Controller
                    name={"desired_job_type"}
                    // rules={{ required: true }}
                    control={control}
                    render={({ field: { onChange } }) => {
                      return (
                        <FormCheck
                          type="radio"
                          name="desired_job_type"
                          label="Permanent"
                          id="Permanent"
                          className="current-work"
                          onChange={onChange}
                          value="Permanent"
                          defaultChecked={
                            currentData?.desired_job_type === "Permanent"
                          }
                        />
                      );
                    }}
                  />
                  <Controller
                    name={"desired_job_type"}
                    control={control}
                    render={({ field: { onChange } }) => {
                      return (
                        <FormCheck
                          type="radio"
                          name="desired_job_type"
                          label="Contractual"
                          id="Contractual"
                          className="current-work"
                          onChange={onChange}
                          value="Contractual"
                          defaultChecked={
                            currentData?.desired_job_type === "Contractual"
                          }
                        />
                      );
                    }}
                  />

                  {/* <div>
                    <input
                      type={"radio"}
                      id="Permanent"
                      value="Permanent"
                      name="desired_job_type"
                      {...register("desired_job_type", { required: true })}
                      defaultChecked={currentData?.desired_job_type === "Permanent"}
                    />
                    <label htmlFor="Permanent">Permanent</label>
                  </div> */}
                  {/* <div>
                    <input
                      type={"radio"}
                      id="Contractual"
                      value="Contractual"
                      name="desired_job_type"
                      {...register("desired_job_type", { required: true })}
                      defaultChecked={currentData?.type === "Contractual"}
                    />
                    <label htmlFor="Contractual">Contractual</label>
                  </div> */}
                </div>
                {errors.desired_job_type && (
                  <p
                    className="validation"
                    style={{ fontSize: 12, color: "red", marginBottom: 15 }}
                  >
                    Desired job type is required
                  </p>
                )}
              </div>

              <div style={{ marginTop: 10, marginBottom: 30 }}>
                <label htmlFor="name" className="input-label">
                  Desired Employment Type <span className="text-danger">*</span>
                </label>

                <div className="input-radio-group" style={{ maxWidth: 250 }}>
                  <Controller
                    name={"desired_employment_type"}
                    // rules={{ required: true }}
                    control={control}
                    render={({ field: { onChange } }) => {
                      return (
                        <FormCheck
                          type="radio"
                          name="desired_employment_type"
                          label="Full Time"
                          id="FullTime"
                          className="current-work"
                          onChange={onChange}
                          value="full_time"
                          defaultChecked={
                            currentData?.desired_employment_type === "full_time"
                          }
                        />
                      );
                    }}
                  />
                  <Controller
                    name={"desired_employment_type"}
                    control={control}
                    render={({ field: { onChange } }) => {
                      return (
                        <FormCheck
                          type="radio"
                          name="desired_employment_type"
                          label="Part Time"
                          id="PartTime"
                          className="current-work"
                          onChange={onChange}
                          value="part_time"
                          defaultChecked={
                            currentData?.desired_employment_type === "part_time"
                          }
                        />
                      );
                    }}
                  />
                  {/* <div>
                    <input
                      type={"radio"}
                      id="full_time"
                      value="full_time"
                      name="desired_employment_type"
                      {...register("desired_employment_type", { required: true })}
                      defaultChecked={currentData?.type === "full_time"}
                    />
                    <label htmlFor="full_time">Full Time</label>
                  </div> */}
                  {/* <div>
                    <input
                      type={"radio"}
                      id="part_time"
                      value="part_time"
                      name="desired_employment_type"
                      {...register("desired_employment_type", { required: true })}
                      defaultChecked={currentData?.type === "part_time"}
                    />
                    <label htmlFor="part_time">Part Time</label>
                  </div> */}
                </div>
                {errors.desired_employment_type && (
                  <p
                    className="validation"
                    style={{ fontSize: 12, color: "red", marginBottom: 15 }}
                  >
                    Desired employment type is required
                  </p>
                )}
              </div>
              <div style={{ marginTop: 10, marginBottom: 20 }}>
                <label htmlFor="name" className="input-label">
                  Preferred Shift <span className="text-danger">*</span>
                </label>

                <div className="input-radio-group" style={{ maxWidth: 250 }}>
                  <Controller
                    name={"preferred_shift"}
                    control={control}
                    // rules={{ required: true }}
                    render={({ field: { onChange } }) => {
                      return (
                        <FormCheck
                          type="radio"
                          name="preferred_shift"
                          label="Day"
                          id="Day"
                          className="current-work"
                          onChange={onChange}
                          value="Day"
                          defaultChecked={
                            currentData?.preferred_shift === "Day"
                          }
                        />
                      );
                    }}
                  />
                  <Controller
                    name={"preferred_shift"}
                    control={control}
                    render={({ field: { onChange } }) => {
                      return (
                        <FormCheck
                          type="radio"
                          name="preferred_shift"
                          label="Night"
                          id="Night"
                          className="current-work"
                          onChange={onChange}
                          value="Night"
                          defaultChecked={
                            currentData?.preferred_shift === "Night"
                          }
                        />
                      );
                    }}
                  />
                  <Controller
                    name={"preferred_shift"}
                    control={control}
                    render={({ field: { onChange } }) => {
                      return (
                        <FormCheck
                          type="radio"
                          name="preferred_shift"
                          label="Flexible"
                          id="Flexible"
                          className="current-work"
                          onChange={onChange}
                          value="Flexible"
                          defaultChecked={
                            currentData?.preferred_shift === "Flexible"
                          }
                        />
                      );
                    }}
                  />
                  {/* <div>
                    <input
                      type={"radio"}
                      id="Day"
                      value="Day"
                      name="preferred_shift"
                      {...register("preferred_shift", { required: true })}
                      defaultChecked={currentData?.type === "Day"}

                    />
                    <label htmlFor="Day">Day</label>
                  </div> */}
                  {/* <div>
                    <input
                      type={"radio"}
                      id="Night"
                      value="Night"
                      name="preferred_shift"
                      {...register("preferred_shift", { required: true })}
                      defaultChecked={currentData?.type === "Night"}
                    />
                    <label htmlFor="Night">Night</label>
                  </div> */}
                  {/* <div>
                    <input
                      type={"radio"}
                      id="Flexible"
                      value="Flexible"
                      name="preferred_shift"
                      {...register("preferred_shift", { required: true })}
                      defaultChecked={currentData?.type === "Flexible"}

                    />
                    <label htmlFor="Flexible">Flexible</label>
                  </div> */}
                </div>
                {errors.preferred_shift && (
                  <p
                    className="validation"
                    style={{ fontSize: 12, color: "red", marginBottom: 15 }}
                  >
                    Preferred shift is required
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="name" className="input-label">
                  Preferred Work Location <span className="text-danger">*</span>
                </label>
                <select
                  name="preferred_work_location"
                  {...register("preferred_work_location", { required: true })}
                  defaultValue={currentData?.preferred_work_location}
                  className="profile-input"
                >
                  <option value="">Calicut</option>
                  <option value={"Calicut"}>Calicut</option>
                  <option value={"Malappuram"}>Malappuram</option>
                </select>
                {errors.preferred_work_location && (
                  <p
                    className="validation"
                    style={{ fontSize: 12, color: "red", marginBottom: 15 }}
                  >
                    Preferred Work Location is required
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="name" className="input-label">
                  Expected Salary <span className="text-danger">*</span>
                </label>
                <div
                  className="course-duration"
                  name="currency"
                  {...register("currency", { required: false })}
                  style={{ maxWidth: 250 }}
                >
                  <select
                    id="years"
                    name="course-start"
                    className="profile-input"
                    style={{ width: "80px", marginTop: 10 }}
                  >
                    <option value="₹">₹ </option>
                    <option value="$">$ </option>
                  </select>
                  <div>
                    <input
                      type={"number"}
                      className="profile-input"
                      placeholder="Eg. 450000"
                      {...register("salary_expected", { required: true })}
                      defaultValue={currentData?.salary_expected}
                      name="salary_expected"
                    />
                    {errors.salary_expected && (
                      <p
                        className="validation"
                        style={{ fontSize: 12, color: "red", marginBottom: 15 }}
                      >
                        Expected Salary is required
                      </p>
                    )}
                  </div>
                </div>
              </div>
              {/* <div>
                <label htmlFor="name" className="input-label">
                  Grading System <span className="text-danger">*</span>
                </label>
                <select className="profile-input">
                  <option>select grading system</option>
                  <option value={1}>1</option>
                </select>
              </div> */}
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

export default CareerModal;
