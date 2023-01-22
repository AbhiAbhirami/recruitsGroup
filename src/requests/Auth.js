import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

let userData = JSON.parse(localStorage.getItem("user-information"));
let api_token, refreshToken;
if (userData) {
  api_token = userData.api_token;
  refreshToken = userData.refreshToken;
}

const config = {
  headers: {
    authorization: `Bearer ${api_token}`,
    RefreshToken: refreshToken,
    "Content-Type": "application/json",
  },
};
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

export function login(email, password) {
  return axios.post(
    LOGIN_URL,
    {
      email,
      password,
    },
    config
  );
}

export function googleLogin(code) {
  return axios.get(GOOGLE_URL + "?code=" + code.code, config);
}

export function signUp(data) {
  return axios.post(
    REGISTER_URL,
    {
      email: data.email,
      name: data.name,
      password: data.password,
      password_confirmation: data.password_confirmation,
      joined_on: new Date(),
    },
    config
  );
}

export function getUserByToken(token) {
  return axios.post(
    GET_USER_BY_ACCESS_TOKEN_URL,
    {
      api_token: token.api_token,
      refresh_token: token.refreshToken,
    },
    config
  );
}

export function verifyEmailOtp(otp, email) {
  return axios.put(
    VERIFY_OTP,
    {
      otp,
      email,
    },
    config
  );
}

export function resendOtp(email, newEmail) {
  return axios.put(
    RESEND_OTP,
    {
      email,
      newEmail,
    },
    config
  );
}

export function getUserDataById(id) {
  return axios.get(GET_USER_BY_ID + "/" + id, config);
}

export function resetPassword(email) {
  return axios.post(
    FORGOT_PASSWORD,
    {
      email: email,
    },
    config
  );
}

export function updateUser(id, body) {
  return axios.put(
    UPDATE_USER_DATA + "/" + id,
    {
      ...body,
    },
    config
  );
}

export function checkPassword(email, password) {
  return axios.post(
    CHECK_PASSWORD,
    {
      email: email,
      password: password,
    },
    config
  );
}

export function getUserDocuments(id) {
  return axios.get(GET_USER_DOCS + "/" + id, config);
}

export function deleteDocument(id, type) {
  return axios.put(GET_USER_DOCS + "/" + type + "/" + id, config);
}

export function updateUserDocument(id, type, file) {
  const data = new FormData();
  data.append("file", file);
  return axios.post(GET_USER_DOCS + "/" + type + "/" + id, data);
}
