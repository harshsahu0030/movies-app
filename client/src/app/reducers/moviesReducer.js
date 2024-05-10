import {
  MOVIES_TRENDING_FAILURE,
  MOVIES_TRENDING_REQUEST,
  MOVIES_TRENDING_SUCCESS,
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
