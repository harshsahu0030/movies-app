import {
  CLEAR_ERRORS,
  CLEAR_MESSAGES,
  TEST_FAILURE,
  TEST_REQUEST,
  TEST_SUCCESS,
} from "../constants/userConstant";

export const testReducer = (state = {}, action) => {
  switch (action.type) {
    case TEST_REQUEST:
      return {
        loading: true,
      };

    case TEST_SUCCESS:
      return {
        loading: false,
        message: action.payload.message,
      };

    case TEST_FAILURE:
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
