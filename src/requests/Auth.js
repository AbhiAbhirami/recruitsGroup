import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

export const GET_USER_BY_ACCESS_TOKEN_URL = `${API_URL}/verify-token`;
export const LOGIN_URL = `${API_URL}/login`;
export const REGISTER_URL = `${API_URL}/register`;
export const VERIFY_OTP = `${API_URL}/verify-otp`;
export const RESEND_OTP = `${API_URL}/resend-otp`;
export const GET_USER_BY_ID = `${API_URL}/id`;
export const UPDATE_USER_DATA = `${API_URL}/update`;
export const FORGOT_PASSWORD = `${API_URL}/forgot-password`;
export const CHECK_PASSWORD = `${API_URL}/check-password`;
export const GET_USER_DOCS = `${API_URL}/document`;
export const GOOGLE_URL = `${API_URL}/google/login`;
export const UPDATE_USER_IMAGE = `${API_URL}/profile`;
export const GET_ALL_JOBS = `${API_URL}/jobs`;
export const APPLIED_JOBS = `${API_URL}/applied`;
export const SAVED_JOBS = `${API_URL}/saved`;
export const RECOMMENDED_JOBS = `${API_URL}/recommended-jobs`;
export const SEARCHED_JOBS = `${API_URL}/jobs/search`;
export const FEATURED_COMPANY = `${API_URL}/company`;

export const USER_UPDATE = `${API_URL}/update/`;
export const EDUCATION = `${API_URL}/education`;
export const CAREER_PROFILE = `${API_URL}/career-profile`;
export const UPDATE_EMAIL = `${API_URL}/update-email`;
export const NOTIFICATIONS = `${API_URL}/notifications`;
export const NEW_NOTIFICATIONS = `${API_URL}/new-notifications`;

export function login(email, password) {
  return axios.post(LOGIN_URL, {
    email,
    password,
  });
}

export function googleLogin(code) {
  return axios.get(GOOGLE_URL + "?code=" + code.code);
}

export function signUp(data) {
  return axios.post(REGISTER_URL, {
    email: data.email,
    name: data.name,
    password: data.password,
    password_confirmation: data.password_confirmation,
    joined_on: new Date(),
  });
}

export function getUserByToken(token) {
  return axios.post(GET_USER_BY_ACCESS_TOKEN_URL, {
    api_token: token.api_token,
    refresh_token: token.refreshToken,
  });
}

export function verifyEmailOtp(otp, email) {
  return axios.put(VERIFY_OTP, {
    otp,
    ...email,
  });
}

export function resendOtp(email, newEmail) {
  return axios.put(RESEND_OTP, {
    email,
    newEmail,
  });
}

export function getUserDataById(id) {
  return axios.get(GET_USER_BY_ID + "/" + id);
}

export function resetPassword(email) {
  return axios.post(FORGOT_PASSWORD, {
    email: email,
  });
}

export function updateUser(id, body) {
  return axios.put(UPDATE_USER_DATA + "/" + id, {
    ...body,
  });
}

export function checkPassword(email, password) {
  return axios.post(CHECK_PASSWORD, {
    email: email,
    password: password,
  });
}

export function getUserDocuments(id) {
  return axios.get(GET_USER_DOCS + "/" + id);
}

export function deleteDocument(id, type) {
  return axios.put(GET_USER_DOCS + "/" + type + "/" + id);
}

export function updateUserDocument(id, type, file, options) {
  const data = new FormData();
  data.append("file", file);
  return axios.post(`${GET_USER_DOCS}/${type}/${id}`, data, options);
}

export function updateUserImage(id, image) {
  const data = new FormData();
  data.append("image", image);
  return axios.post(UPDATE_USER_IMAGE + "/" + id, data);
}

export function deleteUserImage(id) {
  return axios.put(UPDATE_USER_IMAGE + "/" + id);
}

export function getJobs() {
  return axios.get(GET_ALL_JOBS);
}

export function updateAppliedjobs(id, userId) {
  return axios.put(APPLIED_JOBS + "/" + id, userId);
}

export function getAppliedjobs(userId) {
  return axios.get(APPLIED_JOBS + "/" + userId);
}

export function updateSavedjobs(id, userId) {
  return axios.put(SAVED_JOBS + "/" + id, userId);
}

export function getSavedjobs(userId) {
  return axios.get(SAVED_JOBS + "/" + userId);
}

export function getSearchedJob(title, location) {
  return axios.get(
    SEARCHED_JOBS + `?title=${title ?? ""}&location=${location ?? ""}`
  );
}

export function getRecommendedJobsApi(userId) {
  return axios.get(`${RECOMMENDED_JOBS}/${userId}`);
}

export function getFeaturedCompanyApi(userId) {
  return axios.get(`${FEATURED_COMPANY}/${userId}`);
}
//profile
//skills
export function updateKeySkillsApi(userId, skills) {
  return axios.put(`${USER_UPDATE}${userId}`, skills);
}

//education
export function getEducationApi(userId) {
  return axios.get(`${EDUCATION}/${userId}`);
}

export function addEducationApi(userId, education) {
  return axios.post(EDUCATION, { ...education, userId: userId });
}

export function updateEducationApi(id, education) {
  return axios.put(`${EDUCATION}/${id}`, education);
}

export function deleteEducationApi(id) {
  return axios.delete(`${EDUCATION}/${id}`);
}

//career-profile

export function getCareerProfileApi(userId) {
  return axios.get(`${CAREER_PROFILE}/${userId}`);
}

export function addCareerProfileApi(userId, education) {
  return axios.post(CAREER_PROFILE, { ...education, userId: userId });
}

export function updateCareerProfileApi(id, education) {
  return axios.put(`${CAREER_PROFILE}/${id}`, education);
}

export function deleteCareerProfileApi(id) {
  return axios.delete(`${CAREER_PROFILE}/${id}`);
}

export function getUserDetailsApi() {
  return axios.post(GET_USER_BY_ACCESS_TOKEN_URL);
}

//settings
export function updateEmailApi(email) {
  return axios.put(`${UPDATE_EMAIL}`, email);
}

export function changePassword(email, password) {
  return axios.put(CHECK_PASSWORD, {
    id: email,
    password: password,
  });
}
export function updatePassword(userId, password) {
  return axios.put(`${USER_UPDATE}${userId}`, {
    password: password,
    id: userId,
  });
}

export function getNotification(id) {
  return axios.get(NOTIFICATIONS + "/" + id);
}

export function getCountOfNotification(id) {
  return axios.get(NEW_NOTIFICATIONS + "/" + id);
}

export function markAllNotificationsRead(id) {
  return axios.put(NOTIFICATIONS + "/" + id);
}
