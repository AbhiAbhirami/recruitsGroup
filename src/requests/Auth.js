import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

export const GET_USER_BY_ACCESS_TOKEN_URL = `${API_URL}/verify_token`;
export const LOGIN_URL = `${API_URL}/login`;
export const REGISTER_URL = `${API_URL}/register`;
export const VERIFY_OTP = `${API_URL}/verify-otp`;
export const RESEND_OTP = `${API_URL}/resend-otp`;
export const GET_USER_BY_ID = `${API_URL}/id`;
export const UPDATE_USER_DATA = `${API_URL}/update`;
export const FORGOT_PASSWORD = `${API_URL}/forgot-password`;
export const CHECK_PASSWORD = `${API_URL}/check-password`;

export function login(email, password) {
  return axios.post(LOGIN_URL, {
    email,
    password,
  });
}

export function register(
  email,
  first_name,
  last_name,
  password,
  password_confirmation
) {
  return axios.post(REGISTER_URL, {
    email,
    first_name,
    last_name,
    password,
    password_confirmation,
  });
}

export function getUserByToken(token) {
  return axios.post(GET_USER_BY_ACCESS_TOKEN_URL, {
    api_token: token,
  });
}

export function verifyEmailOtp(otp, email) {
  return axios.put(VERIFY_OTP, {
    otp,
    email,
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
