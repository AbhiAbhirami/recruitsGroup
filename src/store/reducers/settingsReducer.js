import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import { getUser } from "../../core/AuthHelpers";
import {
  updateEmailApi,
  updatePassword,
  verifyEmailOtp,
} from "../../requests/Auth";

const user = getUser();

const covertToJSON = (data) => {
  return JSON.parse(JSON.stringify(data));
};

export const updateEmailAddress = createAsyncThunk(
  "settings/updateEmail",
  async (data) => {
    try {
      const response = await updateEmailApi(data?.email);
      if (response?.status === 200) {
        toast.success(response?.data?.message);
        data?.closeModal();
        return response;
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "settings/varifyOtp",
  async (data) => {
    console.log(data);
    try {
      const response = await verifyEmailOtp(data?.otp, data?.email);
      if (response?.status === 200) {
        toast.success(response?.data?.message);
        data.closeConfirmModal();
        data.closeModal();
        return data?.email;
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }
);

export const updateCurrentPassword = createAsyncThunk(
  "settings/updatePassword",
  async (data) => {
    try {
      const response = await updatePassword(user?.id, data?.password);
      if (response?.status === 200) {
        toast.success(response?.data?.message);
        data.closeModal();
        return response;
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }
);

//slice start
export const settingsSlice = createSlice({
  name: "profile",
  initialState: {
    loading: false,
    email: {},
    passwoard: {},
    settings: {},
  },
  reducers: {},
  extraReducers: {
    //update email
    [updateEmailAddress.pending]: (state, action) => {
      state.loading = true;
    },
    [updateEmailAddress.fulfilled]: (state, action) => {
      state.loading = false;
      const jsonState = covertToJSON(state);
      state.email = {};
    },
    [updateEmailAddress.rejected]: (state, action) => {
      state.loading = false;
    },
    //verify otp
    [verifyOtp.pending]: (state, action) => {
      state.loading = true;
    },
    [verifyOtp.fulfilled]: (state, action) => {
      state.loading = false;
      const jsonState = covertToJSON(state);
      state.email = action.payload;
    },
    [verifyOtp.rejected]: (state, action) => {
      state.loading = false;
    },

    //change password
    [updateCurrentPassword.pending]: (state, action) => {
      state.loading = true;
    },
    [updateCurrentPassword.fulfilled]: (state, action) => {
      state.loading = false;
      const jsonState = covertToJSON(state);
      state.passwoard = {};
    },
    [updateCurrentPassword.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const {} = settingsSlice.actions;

export default settingsSlice.reducer;
