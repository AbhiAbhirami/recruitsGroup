import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./reducers/jobsReducer";
import profileReducer from "./reducers/profileReducer";
import settingsReducer from "./reducers/settingsReducer";

export default configureStore({
  reducer: {
    jobs: jobsReducer,
    profile: profileReducer,
    settings: settingsReducer,
  },
});
