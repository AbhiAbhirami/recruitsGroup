import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getCountOfNotification,
  getNotification,
  markAllNotificationsRead,
} from "../../requests/Auth";

export const getAllNotifications = createAsyncThunk(
  "notifications/all",
  async (data) => {
    try {
      const response = await getNotification(data);
      if (response?.status === 200) {
        return response;
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }
);

export const getCountOfNewNotifications = createAsyncThunk(
  "countNotifications/get",
  async (data) => {
    try {
      const response = await getCountOfNotification(data);
      if (response?.status === 200) {
        debugger;
        return response;
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }
);

export const markAllAsRead = createAsyncThunk(
  "markAllAsRead/all",
  async (id) => {
    try {
      const response = await markAllNotificationsRead(id);
      if (response?.status === 200) {
        getAllNotifications(id);
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }
);


export const notificationSlice = createSlice({
  name: "notifications",
  initialState: {
    loading: false,
    notifications: [],
    countNew: 0,
  },
  reducers: {},
  extraReducers: {
    [getAllNotifications.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllNotifications.fulfilled]: (state, action) => {
      state.loading = false;
      state.notifications = action.payload.data.message;
    },
    [getAllNotifications.rejected]: (state, action) => {
      state.loading = false;
    },
    [getCountOfNewNotifications.pending]: (state, action) => {
      state.loading = true;
    },
    [getCountOfNewNotifications.fulfilled]: (state, action) => {
      state.loading = false;
      state.countNew = action.payload.data.message;
    },
    [getCountOfNewNotifications.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const {} = notificationSlice.actions;

export default notificationSlice.reducer;
