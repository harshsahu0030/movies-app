import {
  ALL_SEARCH_FAILURE,
  ALL_SEARCH_REQUEST,
  ALL_SEARCH_SUCCESS,
  ALL_TREDING_FAILURE,
  ALL_TREDING_REQUEST,
  ALL_TREDING_SUCCESS,
} from "../constants/allConstant";
import { CLEAR_ERRORS, CLEAR_MESSAGES } from "../constants/userConstant";

export const allTrendingReducer = (state = {}, action) => {
  switch (action.type) {
    case ALL_TREDING_REQUEST:
      return {
        loading: true,
      };

    case ALL_TREDING_SUCCESS:
      return {
        loading: false,
        data: action.payload.results,
      };

    case ALL_TREDING_FAILURE:
      return {
        loading: false,
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

export const allSearchReducer = (state = {}, action) => {
  switch (action.type) {
    case ALL_SEARCH_REQUEST:
      return {
        loading: true,
      };

    case ALL_SEARCH_SUCCESS:
      return {
        loading: false,
        data: action.payload.results,
      };

    case ALL_SEARCH_FAILURE:
      return {
        loading: false,
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
