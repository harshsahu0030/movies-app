import axios from "axios";
import {
  MOVIES_TRENDING_FAILURE,
  MOVIES_TRENDING_REQUEST,
  MOVIES_TRENDING_SUCCESS,
} from "../constants/moviesConstant";

// movies trending
export const moviesTrendingAction = () => async (dispatch) => {
  try {
    dispatch({ type: MOVIES_TRENDING_REQUEST });
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGJjMDc3MTI4NmIzODBmNzdiMTliMmQ1MmM2ZjRkYSIsInN1YiI6IjYzN2QzNjMxMjc5MGJmMDA3Y2U5ZWNiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wDbsXSia1ft_LPwxxCpX_9QJwzACN3my93wNq1Phio0",
      },
    };

    const { data } = await axios.request(options);

    dispatch({ type: MOVIES_TRENDING_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: MOVIES_TRENDING_FAILURE,
      payload: error.response.data.message,
    });
  }
};
