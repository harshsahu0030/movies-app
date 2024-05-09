import axios from "axios";
import {
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_VERIFIED_FAILURE,
  FORGOT_PASSWORD_VERIFIED_REQUEST,
  FORGOT_PASSWORD_VERIFIED_SUCCESS,
  LOAD_USER_FAILURE,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGIN_CODE_FAILURE,
  LOGIN_CODE_REQUEST,
  LOGIN_CODE_SUCCESS,
  LOGIN_CODE_VERIFIED_FAILURE,
  LOGIN_CODE_VERIFIED_REQUEST,
  LOGIN_CODE_VERIFIED_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTER_RESEND_OTP_FAILURE,
  REGISTER_RESEND_OTP_REQUEST,
  REGISTER_RESEND_OTP_SUCCESS,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  RESEND_OTP_FAILURE,
  RESEND_OTP_REQUEST,
  RESEND_OTP_SUCCESS,
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  USER_EXIST_FAILURE,
  USER_EXIST_REQUEST,
  USER_EXIST_SUCCESS,
  VERIFIED_REGISTER_USER_FAILURE,
  VERIFIED_REGISTER_USER_REQUEST,
  VERIFIED_REGISTER_USER_SUCCESS,
} from "../constants/userConstant";

// user exist
export const userExistAction = (email) => async (dispatch) => {
  try {
    dispatch({ type: USER_EXIST_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`/api/v1/user/exist`, { email }, config);

    dispatch({ type: USER_EXIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_EXIST_FAILURE,
      payload: error.response.data.message,
    });
  }
};

// register
export const registerUserAction = (signupForm) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`/api/v1/register`, signupForm, config);

    dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAILURE,
      payload: error.response.data.message,
    });
  }
};

// register resend otp
export const registerResendOTPAction = (id, email) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_RESEND_OTP_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `/api/v1/register/resend-otp/${id}`,
      { email },
      config
    );

    dispatch({ type: REGISTER_RESEND_OTP_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REGISTER_RESEND_OTP_FAILURE,
      payload: error.response.data.message,
    });
  }
};

// register verified
export const verifiedRegisterUserAction =
  (id, otpNumber, userData) => async (dispatch) => {
    try {
      dispatch({ type: VERIFIED_REGISTER_USER_REQUEST });

      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        withCredentials: true,
        crossorigin: true,
        credentials: "include",
        "Access-Control-Allow-Origin": "*",
      };

      const { data } = await axios.post(
        `/api/v1/register/${id}`,
        {
          ...userData,
          otp: otpNumber,
        },
        config
      );
      dispatch({ type: VERIFIED_REGISTER_USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: VERIFIED_REGISTER_USER_FAILURE,
        payload: error.response.data.message,
      });
    }
  };

// Login
export const loginUserAction = (loginForm) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      withCredentials: true,
      crossorigin: true,
      credentials: "include",
      "Access-Control-Allow-Origin": "*",
    };

    const { data } = await axios.post(`/api/v1/login`, loginForm, config);

    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.response.data.message });
  }
};

// Login code
export const loginUserCodeAction = (email) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_CODE_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`/api/v1/login/code`, { email }, config);

    dispatch({ type: LOGIN_CODE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: LOGIN_CODE_FAILURE,
      payload: error.response.data.message,
    });
  }
};

// Login code verified
export const loginUserCodeVerifiedAction = (id, otp) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_CODE_VERIFIED_REQUEST });

    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      withCredentials: true,
      crossorigin: true,
      credentials: "include",
      "Access-Control-Allow-Origin": "*",
    };

    const { data } = await axios.post(
      `/api/v1/login/code/${id}`,
      { otp },
      config
    );

    dispatch({ type: LOGIN_CODE_VERIFIED_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: LOGIN_CODE_VERIFIED_FAILURE,
      payload: error.response.data.message,
    });
  }
};

//  resend otp
export const resendOTPAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: RESEND_OTP_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.get(`/api/v1/resend-otp/${id}`, config);

    dispatch({ type: RESEND_OTP_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: RESEND_OTP_FAILURE,
      payload: error.response.data.message,
    });
  }
};

// Load User
export const loadUserAction = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const config = {
      withCredentials: true,
    };

    const { data } = await axios.get(`/api/v1/load`, config);

    dispatch({ type: LOAD_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAILURE, payload: error.response.data.message });
  }
};

// Logout User
export const logoutUserAction = () => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT_REQUEST });

    const { data } = await axios.get(`/api/v1/logout`);

    dispatch({ type: LOGOUT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGOUT_FAILURE, payload: error.response.data.message });
  }
};

// forgot password
export const forgotPasswordAction = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `/api/v1/password/forgot`,
      { email },
      config
    );

    dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAILURE,
      payload: error.response.data.message,
    });
  }
};

// forgot password verified
export const forgotPasswordVerifiedAction = (id, otp) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_VERIFIED_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `/api/v1/password/forgot/${id}`,
      { otp },
      config
    );

    dispatch({ type: FORGOT_PASSWORD_VERIFIED_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_VERIFIED_FAILURE,
      payload: error.response.data.message,
    });
  }
};

// reset password
export const resetPasswordAction =
  (id, resetPasswordForm) => async (dispatch) => {
    try {
      dispatch({ type: RESET_PASSWORD_REQUEST });

      const config = { headers: { "Content-Type": "application/json" } };

      const { data } = await axios.put(
        `/api/v1/password/reset/${id}`,
        resetPasswordForm,
        config
      );

      dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: RESET_PASSWORD_FAILURE,
        payload: error.response.data.message,
      });
    }
  };
