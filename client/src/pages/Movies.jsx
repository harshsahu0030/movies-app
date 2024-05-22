import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar";
import { useEffect } from "react";
import {
  moviesPopularAction,
  moviesTrendingAction,
  moviesUpcomingAction,
} from "../app/actions/moviesAction";
import LoaderComponent from "../components/LoaderComponent";
import CardsCarousel from "../components/CardsCarousel";
import MobNavbar from "../components/MobNavbar";

const Movies = () => {
  // redux
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.moviesTrending);
  const { data: UpMovies } = useSelector((state) => state.moviesUpcoming);
  const { data: PopMovies } = useSelector((state) => state.moviesPopular);

  useEffect(() => {
    dispatch(moviesTrendingAction());
    dispatch(moviesUpcomingAction());
    dispatch(moviesPopularAction());
  }, [dispatch]);
  return (
    <div className="main_section">
      <MobNavbar />

      <div className="wrapper">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <div className="section_a">
            {loading ? (
              <LoaderComponent />
            ) : (
              <Banner data={data} type="movie" />
            )}
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
