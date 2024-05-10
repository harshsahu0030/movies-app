import axios from "axios";
import {
  ALL_TREDING_FAILURE,
  ALL_TREDING_REQUEST,
  ALL_TREDING_SUCCESS,
} from "../constants/allConstant";

// Load User
export const allTrendingAction = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_TREDING_REQUEST });

    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/trending/all/day?language=en-US",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGJjMDc3MTI4NmIzODBmNzdiMTliMmQ1MmM2ZjRkYSIsInN1YiI6IjYzN2QzNjMxMjc5MGJmMDA3Y2U5ZWNiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wDbsXSia1ft_LPwxxCpX_9QJwzACN3my93wNq1Phio0",
      },
    };

    const { data } = await axios.request(options);

    dispatch({ type: ALL_TREDING_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ALL_TREDING_FAILURE,
      payload: error.response.data.message,
    });
  }
};
