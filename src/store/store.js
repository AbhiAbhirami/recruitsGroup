import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./reducers/jobsReducer";
import profileReducer from "./reducers/profileReducer";
import settingsReducer from "./reducers/settingsReducer";
import notificationsReducer from "./reducers/notificationReducer";

export default configureStore({
  reducer: {
    jobs: jobsReducer,
    profile: profileReducer,
    settings: settingsReducer,
    notifications: notificationsReducer,
  },
});
