import axios from "axios";
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

// movies trending
export const moviesUpcomingAction = () => async (dispatch) => {
  try {
    dispatch({ type: MOVIES_UPCOMING_REQUEST });

    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGJjMDc3MTI4NmIzODBmNzdiMTliMmQ1MmM2ZjRkYSIsInN1YiI6IjYzN2QzNjMxMjc5MGJmMDA3Y2U5ZWNiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wDbsXSia1ft_LPwxxCpX_9QJwzACN3my93wNq1Phio0",
      },
    };

    const { data } = await axios.request(options);

    dispatch({ type: MOVIES_UPCOMING_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: MOVIES_UPCOMING_FAILURE,
      payload: error.response.data.message,
    });
  }
};

// movies popular
export const moviesPopularAction = () => async (dispatch) => {
  try {
    dispatch({ type: MOVIES_POPULAR_REQUEST });

    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGJjMDc3MTI4NmIzODBmNzdiMTliMmQ1MmM2ZjRkYSIsInN1YiI6IjYzN2QzNjMxMjc5MGJmMDA3Y2U5ZWNiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wDbsXSia1ft_LPwxxCpX_9QJwzACN3my93wNq1Phio0",
      },
    };
    const { data } = await axios.request(options);

    dispatch({ type: MOVIES_POPULAR_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: MOVIES_POPULAR_FAILURE,
      payload: error.response.data.message,
    });
  }
};

// movie details
export const moviesDetailsAction = (id, type) => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_DETAILS_REQUEST });

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

    dispatch({ type: MOVIE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: MOVIE_DETAILS_FAILURE,
      payload: error.response.data.message,
    });
  }
};
