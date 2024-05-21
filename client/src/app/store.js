import { configureStore } from "@reduxjs/toolkit";
import { resendOTPReducer, userReducer } from "./reducers/userReducer";
import { allTrendingReducer } from "./reducers/allReducer";
import {
  movieDetailsReducer,
  moviesPopularReducer,
  moviesTrendingReducer,
  moviesUpcomingReducer,
} from "./reducers/moviesReducer";
import {
  seriesDetailsReducer,
  seriesPopularReducer,
  seriesTrendingReducer,
  seriesUpcomingReducer,
} from "./reducers/seriesReducer";

export const store = configureStore({
  reducer: {
    //user
    user: userReducer,
    resendOTP: resendOTPReducer,

    //all
    allTrending: allTrendingReducer,

    //movies
    moviesTrending: moviesTrendingReducer,
    moviesUpcoming: moviesUpcomingReducer,
    moviesPopular: moviesPopularReducer,
    movieDetails: movieDetailsReducer,

    //series
    seriesTrending: seriesTrendingReducer,
    seriesUpcoming: seriesUpcomingReducer,
    seriesPopular: seriesPopularReducer,
    seriesDetails: seriesDetailsReducer,
  },
});
