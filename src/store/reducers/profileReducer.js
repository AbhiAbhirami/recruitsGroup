import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import { getUser } from "../../core/AuthHelpers";
import {
  addCareerProfileApi,
  addEducationApi,
  deleteCareerProfileApi,
  deleteEducationApi,
  getCareerProfileApi,
  getEducationApi,
  getUserDetailsApi,
  updateCareerProfileApi,
  updateEducationApi,
  updateKeySkillsApi,
} from "../../requests/Auth";

const user = getUser();

const useConvertToJson = (data) => {
  return JSON.parse(JSON.stringify(data));
};

//skills
export const updateKeySkills = createAsyncThunk(
  "profile/skills",
  async (data) => {
    try {
      console.log("user :", user);

      const response = await updateKeySkillsApi(user?.id, {
        skills: data.skills,
      });
      if (response?.status === 200) {
        data?.closeModal();
        toast.success(response?.data?.message);
        return response.data;
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }
);

//education
export const getEducation = createAsyncThunk("profile/education", async () => {
  try {
    const response = await getEducationApi(user?.id);
    if (response?.status === 200) {
      return response.data;
    }
  } catch (e) {
    toast.error(e.response.data.message);
  }
});

export const addEducation = createAsyncThunk(
  "profile/addEducation",
  async (data) => {
    try {
      const response = await addEducationApi(user?.id, data?.education);
      if (response?.status === 200) {
        toast.success(response?.data?.message);
        data?.closeModal();
        return response.data;
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }
);

export const updateEducation = createAsyncThunk(
  "profile/updateEducation",
  async (data) => {
    try {
      const response = await updateEducationApi(
        data?.educationId,
        data?.education
      );
      if (response?.status === 200) {
        toast.success(response?.data?.message);
        data?.closeModal();
        return { ...data.education, id: data?.educationId };
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }
);

export const deleteEducation = createAsyncThunk(
  "profile/deleteEducation",
  async (data) => {
    try {
      const response = await deleteEducationApi(data?.education?.id);
      if (response?.status === 200) {
        toast.success(response?.data?.message);
        data?.closeModal();
        return { ...data.education, id: data?.education?.id };
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }
);

//career-profile
export const getCareerProfile = createAsyncThunk("profile/career", async () => {
  try {
    const response = await getCareerProfileApi(user?.id);
    if (response?.status === 200) {
      return response.data;
    }
  } catch (e) {
    toast.error(e.response.data.message);
  }
});

export const addCareerProfile = createAsyncThunk(
  "profile/addCareer",
  async (data) => {
    try {
      const response = await addCareerProfileApi(user?.id, data?.career);
      if (response?.status === 200) {
        toast.success(response?.data?.message);
        data?.closeModal();
        return response.data;
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }
);

export const updateCareerProfile = createAsyncThunk(
  "profile/updateCareer",
  async (data) => {
    try {
      const response = await updateCareerProfileApi(
        data?.careerId,
        data?.career
      );
      if (response?.status === 200) {
        toast.success(response?.data?.message);
        data?.closeModal();
        return { ...data.career, id: data?.careerId };
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }
);

export const deleteCareerProfile = createAsyncThunk(
  "profile/deleteCareer",
  async (data) => {
    try {
      const response = await deleteCareerProfileApi(data?.id);
      if (response?.status === 200) {
        toast.success(response?.data?.message);
        data?.closeModal();
        return { ...data.education, id: data?.education?.id };
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }
);

export const getCurrentUserDetails = createAsyncThunk(
  "profile/userDetails",
  async (data) => {
    try {
      const response = await getUserDetailsApi(data);
      if (response?.status === 200) {
        return response.data?.data;
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }
);

//slice start
export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    loading: false,
    Education: [],
    careerProfile: {},
    profile: {},
    verifiedUser: {},
  },
  reducers: {},
  extraReducers: {
    //user_details
    [getCurrentUserDetails.pending]: (state, action) => {
      state.loading = true;
    },
    [getCurrentUserDetails.fulfilled]: (state, action) => {
      state.loading = false;
      state.verifiedUser = action.payload;
      state.profile = { data: action.payload };
    },
    [getCurrentUserDetails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //skill
    [updateKeySkills.pending]: (state, action) => {
      state.loading = true;
    },
    [updateKeySkills.fulfilled]: (state, action) => {
      state.loading = false;
      state.profile = action.payload;
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
      state.Education = action.payload.data?.rows;
    },
    [getEducation.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //add education
    [addEducation.pending]: (state, action) => {
      state.loading = true;
    },
    [addEducation.fulfilled]: (state, action) => {
      state.loading = false;
      const jsonState = useConvertToJson(state);
      state.Education = [...jsonState?.Education, action?.payload?.data];
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
      const jsonState = useConvertToJson(state);
      state.Education = jsonState?.Education?.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
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
      const jsonState = useConvertToJson(state);
      state.Education = jsonState?.Education?.filter(
        (i) => i.id !== action.payload.id
      );
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
      state.error = action.payload;
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
      const jsonState = useConvertToJson(state);
      state.careerProfile = {
        ...jsonState.careerProfile,
        data: action.payload,
      };
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
      // const jsonState = useConvertToJson(state);
      state.careerProfile = {};
    },
    [deleteCareerProfile.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

// export const { } = profileSlice.actions;

export default profileSlice.reducer;
