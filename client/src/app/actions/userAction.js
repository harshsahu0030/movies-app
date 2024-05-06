import axios from "axios";
import {
  TEST_FAILURE,
  TEST_REQUEST,
  TEST_SUCCESS,
} from "../constants/userConstant";

export const testAction = () => async (dispatch) => {
  try {
    dispatch({ type: TEST_REQUEST });

    const config = {
      withCredentials: true,
    };

    const { data } = await axios.get(`/api/v1/`, config);

    dispatch({ type: TEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TEST_FAILURE, payload: error.response.data.message });
  }
};
