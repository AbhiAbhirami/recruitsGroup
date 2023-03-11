import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./reducers/jobsReducer";
export default configureStore({
  reducer: {
    jobs: jobsReducer,
  },
});
