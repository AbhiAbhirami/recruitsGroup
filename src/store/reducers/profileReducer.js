import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { getUser } from "../../core/AuthHelpers";

const API_URL = process.env.REACT_APP_API_URL;

export const UPDATE_KEYSKILLS = `${API_URL}/update/`;
export const EDUCATION = `${API_URL}/education`;
export const CAREERPROFILE = `${API_URL}/career-profile`;

const user = getUser();

const covertToJSON = (data) => {
  return JSON.parse(JSON.stringify(data))
}

//api
//skils
export const updateKeySkills = createAsyncThunk(
  "profile/skills",
  async (data) => {
    const response = await axios.put(UPDATE_KEYSKILLS + `${user?.id}`, {
      skills: data.skills
    })
    if (response?.status === 200) {
      data?.closeModal()
      return response.data
    }
  }
)

//education
export const getEducation = createAsyncThunk(
  "profile/education",
  async () => {
    const response = await axios.get(`${EDUCATION}/${user?.id}`)
    return response.data
  }
)
export const addEducation = createAsyncThunk(
  "profile/addEducation",
  async (data) => {
    const response = await axios.post(EDUCATION, {
      ...data?.education, userId: user.id
    })
    if (response?.status === 200) {
      data?.closeModal()
      return response.data
    }
  }
)

export const updateEducation = createAsyncThunk(
  "profile/updateEducation",
  async (data) => {
    const response = await axios.put(`${EDUCATION}/${data?.educationId}`, {
      ...data?.education
    })
    if (response?.status === 200) {
      data?.closeModal()
      return { ...data.education, id: data?.educationId }
    }
  }
)

export const deleteEducation = createAsyncThunk(
  "profile/deleteEducation",
  async (data) => {
    const response = await axios.delete(`${EDUCATION}/${data?.id}`, {
      ...data
    })
    if (response?.status === 200) {
      return data
    }
  }
)

//career-profile
export const getCareerProfile = createAsyncThunk(
  "profile/career",
  async () => {
    const response = await axios.get(`${CAREERPROFILE}/${user?.id}`)
    return response.data
  }
)

export const addCareerProfile = createAsyncThunk(
  "profile/addCareer",
  async (data) => {
    const response = await axios.post(CAREERPROFILE, {
      ...data?.career, userId: user.id
    })
    if (response?.status === 200) {
      data?.closeModal()
      return response.data
    }
  }
)

export const updateCareerProfile = createAsyncThunk(
  "profile/updateCareer",
  async (data) => {
    const response = await axios.put(`${CAREERPROFILE}/${data?.careerId}`, {
      ...data?.career
    })
    if (response?.status === 200) {
      data?.closeModal()
      return { ...data.career, id: data?.careerId }
    }
  }
)

export const deleteCareerProfile = createAsyncThunk(
  "profile/deleteCareer",
  async (data) => {
    const response = await axios.delete(`${CAREERPROFILE}/${data?.id}`, {
      ...data
    })
    if (response?.status === 200) {
      return data
    }
  }
)


//slice start
export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    loading: false,
    skills: [],
    Education: [],
    careerProfile: {}
  },
  reducers: {},
  extraReducers: {
    //skils
    [updateKeySkills.pending]: (state, action) => {
      state.loading = true;
    },
    [updateKeySkills.fulfilled]: (state, action) => {
      state.loading = false;
      state.skills = action.payload;
    },
    [updateKeySkills.rejected]: (state, action) => {
      state.loading = false;
    },

    //education
    //get educations
    [getEducation.pending]: (state, action) => {
      state.loading = true;
    },
    [getEducation.fulfilled]: (state, action) => {
      state.loading = false;
      state.Education = action.payload;
    },
    [getEducation.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload
    },

    //add education
    [addEducation.pending]: (state, action) => {
      state.loading = true;
    },
    [addEducation.fulfilled]: (state, action) => {
      state.loading = false;
      state.Education = action.payload;
    },
    [addEducation.rejected]: (state, action) => {
      state.loading = false;
    },

    //update education
    [updateEducation.pending]: (state, action) => {
      state.loading = true;
    },
    [updateEducation.fulfilled]: (state, action) => {
      state.loading = false;
      const jsonState = covertToJSON(state)
      state.Education = {
        ...jsonState?.Education,
        data: {
          ...jsonState?.Education?.data,
          rows: jsonState?.Education?.data?.rows?.map(i => i.id === action.payload.id ? action.payload : i)
        }
      }
    },
    [updateEducation.rejected]: (state, action) => {
      state.loading = false;
    },

    //delete education
    [deleteEducation.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteEducation.fulfilled]: (state, action) => {
      state.loading = false;
      const jsonState = covertToJSON(state)
      state.Education = {
        ...jsonState?.Education,
        data: {
          ...jsonState?.Education?.data,
          rows: jsonState?.Education?.data?.rows?.filter(i => i.id !== action.payload.id)
        }
      }
    },
    [deleteEducation.rejected]: (state, action) => {
      state.loading = false;
    },

    //CareerProfile
    //get careerProfile
    [getCareerProfile.pending]: (state, action) => {
      state.loading = true;
    },
    [getCareerProfile.fulfilled]: (state, action) => {
      state.loading = false;
      state.careerProfile = action.payload;
    },
    [getCareerProfile.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload
    },

    //add careerProfile
    [addCareerProfile.pending]: (state, action) => {
      state.loading = true;
    },
    [addCareerProfile.fulfilled]: (state, action) => {
      state.loading = false;
      state.careerProfile = action.payload;
    },
    [addCareerProfile.rejected]: (state, action) => {
      state.loading = false;
    },

    //update careerProfile
    [updateCareerProfile.pending]: (state, action) => {
      state.loading = true;
    },
    [updateCareerProfile.fulfilled]: (state, action) => {
      state.loading = false;
      const jsonState = covertToJSON(state)
      state.careerProfile = {}
    },
    [updateCareerProfile.rejected]: (state, action) => {
      state.loading = false;
    },

    //delete education
    [deleteCareerProfile.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteCareerProfile.fulfilled]: (state, action) => {
      state.loading = false;
      const jsonState = covertToJSON(state)
      state.careerProfile = {}
    },
    [deleteCareerProfile.rejected]: (state, action) => {
      state.loading = false;
    },
  }
});

export const { } = profileSlice.actions;

export default profileSlice.reducer;
