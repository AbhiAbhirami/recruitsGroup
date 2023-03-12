import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { toast } from "react-toastify";
import { getUser } from "../../core/AuthHelpers";
import { addEducationApi, deleteEducationApi, getEducationApi, updateEducationApi, updateKeySkillsApi } from "../../requests/Auth";

const API_URL = process.env.REACT_APP_API_URL;

export const CAREERPROFILE = `${API_URL}/career-profile`;
const user = getUser();

const covertToJSON = (data) => {
  return JSON.parse(JSON.stringify(data))
}

//api
//skills
export const updateKeySkills = createAsyncThunk(
  "profile/skills",
  async (data) => {
    try {
      const response = await updateKeySkillsApi(user?.id, {
        skills: data.skills
      });
      if (response?.status === 200) {
        data?.closeModal()
        toast.success("Saved");
        return response.data
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }
)

//education
export const getEducation = createAsyncThunk(
  "profile/education",
  async () => {
    try {
      const response = await getEducationApi(user?.id);
      if (response?.status === 200) {
        toast.success("Saved");
        return response.data
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }
)

export const addEducation = createAsyncThunk(
  "profile/addEducation",
  async (data) => {
    try {
      const response = await addEducationApi(user?.id, data?.education);
      if (response?.status === 200) {
        toast.success("Saved");
        data?.closeModal()
        return response.data
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }
)

export const updateEducation = createAsyncThunk(
  "profile/updateEducation",
  async (data) => {
    try {
      const response = await updateEducationApi(data?.educationId, data?.education);
      if (response?.status === 200) {
        toast.success("Saved");
        data?.closeModal()
        return { ...data.education, id: data?.educationId }
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }
)

export const deleteEducation = createAsyncThunk(
  "profile/deleteEducation",
  async (data) => {
    try {
      const response = await deleteEducationApi(data?.educationId);
      if (response?.status === 200) {
        toast.success("Saved");
        data?.closeModal()
        return { ...data.education, id: data?.educationId }
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }
)

//career-profile //todo
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
