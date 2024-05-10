import { configureStore } from "@reduxjs/toolkit";
import { resendOTPReducer, userReducer } from "./reducers/userReducer";
import { allTrendingReducer } from "./reducers/allReducer";
import { moviesTrendingReducer } from "./reducers/moviesReducer";
import { seriesTrendingReducer } from "./reducers/seriesReducer";

export const store = configureStore({
  reducer: {
    //user
    user: userReducer,
    resendOTP: resendOTPReducer,

    //all
    allTrending: allTrendingReducer,

    //movies
    moviesTrending: moviesTrendingReducer,

    //series
    seriesTrending: seriesTrendingReducer,
  },
});
