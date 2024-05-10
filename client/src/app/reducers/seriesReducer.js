import {
  SERIES_TRENDING_FAILURE,
  SERIES_TRENDING_REQUEST,
  SERIES_TRENDING_SUCCESS,
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
