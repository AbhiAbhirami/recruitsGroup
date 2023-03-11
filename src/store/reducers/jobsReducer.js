import { createSlice } from "@reduxjs/toolkit";
import { AUTH_LOCAL_STORAGE_JOBS } from "../../core/AuthHelpers";

export const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: JSON.parse(localStorage.getItem(AUTH_LOCAL_STORAGE_JOBS)) || [],
    applied_jobs: [],
    saved_jobs: [],
  },
  reducers: {
    getAllJobs: (state) => {
      state.jobs = [...state.jobs];
    },
    getAppliedJobs: (state, action) => {
      state.applied_jobs = [...state.jobs].filter((job) =>
        action.payload.jobs.includes(job.id.toString())
      );
    },
    getSavedJobs: (state, action) => {
      state.saved_jobs = state.jobs.filter((job) =>
        action.payload.jobs.includes(job.id.toString())
      );
    },
  },
});

export const { getAllJobs, getAppliedJobs, getSavedJobs } = jobsSlice.actions;

export default jobsSlice.reducer;
