import {
  CLEAR_ERRORS,
  CLEAR_MESSAGES,
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

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_EXIST_REQUEST:
    case REGISTER_USER_REQUEST:
    case VERIFIED_REGISTER_USER_REQUEST:
    case LOGIN_REQUEST:
    case LOAD_USER_REQUEST:
    case LOGIN_CODE_REQUEST:
    case LOGIN_CODE_VERIFIED_REQUEST:
    case FORGOT_PASSWORD_REQUEST:
    case FORGOT_PASSWORD_VERIFIED_REQUEST:
    case RESET_PASSWORD_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };

    case LOGOUT_REQUEST:
      return {
        loading: true,
        isAuthenticated: true,
      };

    case LOGOUT_SUCCESS:
      return {
        loading: false,
        isAuthenticated: false,
        message: action.payload.message,
        user: null,
      };

    case REGISTER_USER_SUCCESS:
    case LOGIN_CODE_SUCCESS:
    case FORGOT_PASSWORD_SUCCESS:
    case FORGOT_PASSWORD_VERIFIED_SUCCESS:
    case RESET_PASSWORD_SUCCESS:
      return {
        loading: false,
        isAuthenticated: false,
        message: action.payload.message,
        otp: action.payload.otp,
      };

    case USER_EXIST_SUCCESS:
      return {
        loading: false,
        isAuthenticated: false,
        message: action.payload.message,
        email: action.payload.email,
      };

    case VERIFIED_REGISTER_USER_SUCCESS:
    case LOGIN_SUCCESS:
    case LOAD_USER_SUCCESS:
    case LOGIN_CODE_VERIFIED_SUCCESS:
      return {
        loading: false,
        isAuthenticated: true,
        message: action.payload.message,
        user: action.payload.user,
      };

    case USER_EXIST_FAILURE:
    case REGISTER_USER_FAILURE:
    case VERIFIED_REGISTER_USER_FAILURE:
    case LOGIN_FAILURE:
    case LOAD_USER_FAILURE:
    case LOGIN_CODE_FAILURE:
    case LOGIN_CODE_VERIFIED_FAILURE:
    case FORGOT_PASSWORD_FAILURE:
    case FORGOT_PASSWORD_VERIFIED_FAILURE:
    case RESET_PASSWORD_FAILURE:
      return {
        loading: false,
        isAuthenticated: false,
        error: action.payload,
      };

    case LOGOUT_FAILURE:
      return {
        loading: false,
        isAuthenticated: true,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    case CLEAR_MESSAGES:
      return {
        ...state,
        message: null,
      };
    default:
      return state;
  }
};

export const resendOTPReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_RESEND_OTP_REQUEST:
    case RESEND_OTP_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };

    case REGISTER_RESEND_OTP_SUCCESS:
    case RESEND_OTP_SUCCESS:
      return {
        loading: false,
        isAuthenticated: false,
        message: action.payload.message,
      };

    case REGISTER_RESEND_OTP_FAILURE:
    case RESEND_OTP_FAILURE:
      return {
        loading: false,
        isAuthenticated: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    case CLEAR_MESSAGES:
      return {
        ...state,
        message: null,
      };
    default:
      return state;
  }
};
