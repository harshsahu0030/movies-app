import axios from "axios";
import {
  SERIES_TRENDING_FAILURE,
  SERIES_TRENDING_REQUEST,
  SERIES_TRENDING_SUCCESS,
} from "../constants/seriresConstatnt";

// series trending
export const seriesTrendingAction = () => async (dispatch) => {
  try {
    dispatch({ type: SERIES_TRENDING_REQUEST });

    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGJjMDc3MTI4NmIzODBmNzdiMTliMmQ1MmM2ZjRkYSIsInN1YiI6IjYzN2QzNjMxMjc5MGJmMDA3Y2U5ZWNiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wDbsXSia1ft_LPwxxCpX_9QJwzACN3my93wNq1Phio0",
      },
    };

    const { data } = await axios.request(options);

    dispatch({ type: SERIES_TRENDING_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SERIES_TRENDING_FAILURE,
      payload: error.response.data.message,
    });
  }
};
