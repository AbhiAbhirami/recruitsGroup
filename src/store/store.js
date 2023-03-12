import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./reducers/jobsReducer";
import profileReducer from "./reducers/profileReducer";

export default configureStore({
  reducer: {
    jobs: jobsReducer,
    profile: profileReducer
  },
});
