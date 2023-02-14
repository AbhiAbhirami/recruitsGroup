import { combineReducers } from "redux";
import { getJobsInfo, getUser } from "../core/AuthHelpers";

const ALL_JOBS = "GET_ALL_JOBS";
const APPLIED_JOBS = "GET_APPLIED_JOBS";
// const USERS = "GET_USER_DATA";

export function getAllJobs(jobs) {
  return {
    type: ALL_JOBS,
    jobs,
  };
}

// export function getUserData(user) {
//   return {
//     type: USERS,
//     user,
//   }
// }

const initialJobs = getJobsInfo();
const user = getUser();
function jobsReducer(state = initialJobs, action) {
  debugger;
  switch (action.type) {
    case ALL_JOBS:
      return state;
    case APPLIED_JOBS:
      const jobs = state.filter((item) => user.applied_jobs.includes(item.id));
      return jobs;
    default:
      return state;
  }
}

const jobState = combineReducers({
  jobsReducer,
});

export default jobState;
