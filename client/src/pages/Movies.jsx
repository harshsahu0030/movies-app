import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar";
import { useMemo } from "react";
import {
  moviesPopularAction,
  moviesTrendingAction,
  moviesUpcomingAction,
} from "../app/actions/moviesAction";
import LoaderComponent from "../components/LoaderComponent";
import CardsCarousel from "../components/CardsCarousel";

const Movies = () => {
  // redux
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.moviesTrending);
  const { data: UpMovies } = useSelector((state) => state.moviesUpcoming);
  const { data: PopMovies } = useSelector((state) => state.moviesPopular);

  useMemo(() => {
    dispatch(moviesTrendingAction());
    dispatch(moviesUpcomingAction());
    dispatch(moviesPopularAction());
  }, [dispatch]);
  return (
    <div className="main_section">
      <div className="wrapper">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <div className="section_a">
            {loading ? <LoaderComponent /> : <Banner data={data} />}
          </div>
          <div className="section_b">
            <CardsCarousel
              title="Trending Movies"
              url="/movies/trending"
              data={data}
            />
          </div>
          <div className="section_b">
            <CardsCarousel
              title="UpComing"
              url="/movies/upcoming"
              data={UpMovies}
            />
          </div>
          <div className="section_b">
            <CardsCarousel
              title="Popular"
              url="/movies/popular"
              data={PopMovies}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
