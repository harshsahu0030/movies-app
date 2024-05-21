import axios from "axios";
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

// series upcoming
export const seriesUpcomingAction = () => async (dispatch) => {
  try {
    dispatch({ type: SERIES_UPCOMING_REQUEST });

    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGJjMDc3MTI4NmIzODBmNzdiMTliMmQ1MmM2ZjRkYSIsInN1YiI6IjYzN2QzNjMxMjc5MGJmMDA3Y2U5ZWNiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wDbsXSia1ft_LPwxxCpX_9QJwzACN3my93wNq1Phio0",
      },
    };

    const { data } = await axios.request(options);

    dispatch({ type: SERIES_UPCOMING_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SERIES_UPCOMING_FAILURE,
      payload: error.response.data.message,
    });
  }
};

// series popular
export const seriesPopularAction = () => async (dispatch) => {
  try {
    dispatch({ type: SERIES_POPULAR_REQUEST });

    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGJjMDc3MTI4NmIzODBmNzdiMTliMmQ1MmM2ZjRkYSIsInN1YiI6IjYzN2QzNjMxMjc5MGJmMDA3Y2U5ZWNiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wDbsXSia1ft_LPwxxCpX_9QJwzACN3my93wNq1Phio0",
      },
    };

    const { data } = await axios.request(options);

    dispatch({ type: SERIES_POPULAR_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SERIES_POPULAR_FAILURE,
      payload: error.response.data.message,
    });
  }
};

// series details
export const seriesDetailsAction = (id, type) => async (dispatch) => {
  try {
    dispatch({ type: SERIES_DETAILS_REQUEST });

    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/${type}/${id}?language=en-US`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGJjMDc3MTI4NmIzODBmNzdiMTliMmQ1MmM2ZjRkYSIsInN1YiI6IjYzN2QzNjMxMjc5MGJmMDA3Y2U5ZWNiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wDbsXSia1ft_LPwxxCpX_9QJwzACN3my93wNq1Phio0",
      },
    };

    const { data } = await axios.request(options);

    dispatch({ type: SERIES_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SERIES_DETAILS_FAILURE,
      payload: error.response.data.message,
    });
  }
};
