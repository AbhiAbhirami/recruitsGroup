import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import useConvertToJson from "../../assets/hooks/useConvertToJson.JS";
import { AUTH_LOCAL_STORAGE_JOBS } from "../../core/AuthHelpers";
import { getJobs } from "../../requests/Auth";

export const getAllUserJobs = createAsyncThunk(
  "settings/userJobs",
  async () => {
    try {
      const response = await getJobs();
      if (response?.status === 200) {
        toast.success(response?.data?.message);
        return response;
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }
);

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
  extraReducers: {
    //update email
    [getAllUserJobs.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllUserJobs.fulfilled]: (state, action) => {
      state.loading = false;
      const jsonState = useConvertToJson(state);
      state.jobs = {};
    },
    [getAllUserJobs.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const { getAllJobs, getAppliedJobs, getSavedJobs } = jobsSlice.actions;

export default jobsSlice.reducer;
