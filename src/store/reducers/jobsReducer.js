import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getUser } from "../../core/AuthHelpers";
import {
  getAppliedjobs,
  getFeaturedCompanyApi,
  getJobs,
  getRecommendedJobsApi,
  getSavedjobs,
  getSearchedJob,
} from "../../requests/Auth";

const user = getUser();

export const getAllUserJobs = createAsyncThunk("jobs/all", async () => {
  try {
    const response = await getJobs();
    if (response?.status === 200) {
      return response;
    }
  } catch (e) {
    toast.error(e.response.data.message);
  }
});

export const setJobs = createAsyncThunk("jobs/all", async (data) => {
  try {
    const response = await getSearchedJob(data.title, data.location);
    return response;
  } catch (e) {
    toast.error(e.response.data.message);
  }
});

export const getSavedJobs = createAsyncThunk("jobs/saved", async (id) => {
  try {
    const response = await getSavedjobs(id);
    if (response?.status === 200) {
      return response;
    }
  } catch (e) {
    toast.error(e.response.data.message);
  }
});
export const getAppliedJobs = createAsyncThunk("jobs/applied", async (id) => {
  try {
    const response = await getAppliedjobs(id);
    if (response?.status === 200) {
      return response;
    }
  } catch (e) {
    toast.error(e.response.data.message);
  }
});

export const getRecommendedJobs = createAsyncThunk(
  "jobs/recommended",
  async () => {
    try {
      const response = await getRecommendedJobsApi(user?.id);
      if (response?.status === 200) {
        return response;
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }
);

export const getFeaturedCompany = createAsyncThunk(
  "jobs/featuredCompany",
  async () => {
    try {
      const response = await getFeaturedCompanyApi(user?.id);
      if (response?.status === 200) {
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
    loading: false,
    jobs: [],
    applied_jobs: [],
    saved_jobs: [],
    recommended: [],
    featuredCompany: [],
  },
  reducers: {},
  extraReducers: {
    [getAllUserJobs.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllUserJobs.fulfilled]: (state, action) => {
      state.loading = false;
      state.jobs = action.payload.data.data.rows;
    },
    [getAllUserJobs.rejected]: (state, action) => {
      state.loading = false;
    },
    [setJobs.pending]: (state, action) => {
      state.loading = false;
    },
    [setJobs.fulfilled]: (state, action) => {
      state.loading = false;
      state.jobs = action.payload.data.data.rows;
    },
    [setJobs.rejected]: (state, action) => {
      state.loading = false;
    },
    [getSavedJobs.pending]: (state, action) => {
      state.loading = true;
    },
    [getSavedJobs.fulfilled]: (state, action) => {
      state.loading = false;
      state.saved_jobs = action.payload.data.data.rows;
    },
    [getSavedJobs.rejected]: (state, action) => {
      state.loading = false;
    },
    [getAppliedJobs.pending]: (state, action) => {
      state.loading = true;
    },
    [getAppliedJobs.fulfilled]: (state, action) => {
      state.loading = false;
      state.applied_jobs = action.payload.data.data.rows;
    },
    [getAppliedJobs.rejected]: (state, action) => {
      state.loading = false;
    },
    [getRecommendedJobs.pending]: (state, action) => {
      state.loading = true;
    },
    [getRecommendedJobs.fulfilled]: (state, action) => {
      state.loading = false;
      state.recommended = action.payload.data.data.rows;
    },
    [getRecommendedJobs.rejected]: (state, action) => {
      state.loading = false;
    },
    [getFeaturedCompany.pending]: (state, action) => {
      state.loading = true;
    },
    [getFeaturedCompany.fulfilled]: (state, action) => {
      state.loading = false;
      state.featuredCompany = action.payload.data.data;
    },
    [getFeaturedCompany.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const {} = jobsSlice.actions;

export default jobsSlice.reducer;
