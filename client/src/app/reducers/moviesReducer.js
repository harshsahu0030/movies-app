import {
  MOVIES_POPULAR_FAILURE,
  MOVIES_POPULAR_REQUEST,
  MOVIES_POPULAR_SUCCESS,
  MOVIES_TRENDING_FAILURE,
  MOVIES_TRENDING_REQUEST,
  MOVIES_TRENDING_SUCCESS,
  MOVIES_UPCOMING_FAILURE,
  MOVIES_UPCOMING_REQUEST,
  MOVIES_UPCOMING_SUCCESS,
  MOVIE_DETAILS_FAILURE,
  MOVIE_DETAILS_REQUEST,
  MOVIE_DETAILS_SUCCESS,
} from "../constants/moviesConstant";
import { CLEAR_ERRORS, CLEAR_MESSAGES } from "../constants/userConstant";

export const moviesTrendingReducer = (state = {}, action) => {
  switch (action.type) {
    case MOVIES_TRENDING_REQUEST:
      return {
        loading: true,
      };

    case MOVIES_TRENDING_SUCCESS:
      return {
        loading: false,
        data: action.payload.results,
      };

    case MOVIES_TRENDING_FAILURE:
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

export const moviesUpcomingReducer = (state = {}, action) => {
  switch (action.type) {
    case MOVIES_UPCOMING_REQUEST:
      return {
        loading: true,
      };

    case MOVIES_UPCOMING_SUCCESS:
      return {
        loading: false,
        data: action.payload.results,
      };

    case MOVIES_UPCOMING_FAILURE:
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

export const moviesPopularReducer = (state = {}, action) => {
  switch (action.type) {
    case MOVIES_POPULAR_REQUEST:
      return {
        loading: true,
      };

    case MOVIES_POPULAR_SUCCESS:
      return {
        loading: false,
        data: action.payload.results,
      };

    case MOVIES_POPULAR_FAILURE:
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

export const movieDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case MOVIE_DETAILS_REQUEST:
      return {
        loading: true,
      };

    case MOVIE_DETAILS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };

    case MOVIE_DETAILS_FAILURE:
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
