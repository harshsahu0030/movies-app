import {
  SERIES_DETAILS_FAILURE,
  SERIES_DETAILS_REQUEST,
  SERIES_DETAILS_SUCCESS,
  SERIES_POPULAR_FAILURE,
  SERIES_POPULAR_REQUEST,
  SERIES_POPULAR_SUCCESS,
  SERIES_TRENDING_FAILURE,
  SERIES_TRENDING_REQUEST,
  SERIES_TRENDING_SUCCESS,
  SERIES_UPCOMING_FAILURE,
  SERIES_UPCOMING_REQUEST,
  SERIES_UPCOMING_SUCCESS,
} from "../constants/seriresConstatnt";
import { CLEAR_ERRORS, CLEAR_MESSAGES } from "../constants/userConstant";

export const seriesTrendingReducer = (state = {}, action) => {
  switch (action.type) {
    case SERIES_TRENDING_REQUEST:
      return {
        loading: true,
      };

    case SERIES_TRENDING_SUCCESS:
      return {
        loading: false,
        data: action.payload.results,
      };

    case SERIES_TRENDING_FAILURE:
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

export const seriesUpcomingReducer = (state = {}, action) => {
  switch (action.type) {
    case SERIES_UPCOMING_REQUEST:
      return {
        loading: true,
      };

    case SERIES_UPCOMING_SUCCESS:
      return {
        loading: false,
        data: action.payload.results,
      };

    case SERIES_UPCOMING_FAILURE:
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

export const seriesPopularReducer = (state = {}, action) => {
  switch (action.type) {
    case SERIES_POPULAR_REQUEST:
      return {
        loading: true,
      };

    case SERIES_POPULAR_SUCCESS:
      return {
        loading: false,
        data: action.payload.results,
      };

    case SERIES_POPULAR_FAILURE:
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

export const seriesDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case SERIES_DETAILS_REQUEST:
      return {
        loading: true,
      };

    case SERIES_DETAILS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };

    case SERIES_DETAILS_FAILURE:
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
