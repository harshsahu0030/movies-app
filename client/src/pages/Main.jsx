import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar";
import { useMemo } from "react";
import { allTrendingAction } from "../app/actions/allAction";
import LoaderComponent from "../components/LoaderComponent";
import CardsCarousel from "../components/CardsCarousel";
import { moviesUpcomingAction } from "../app/actions/moviesAction";
import { seriesUpcomingAction } from "../app/actions/seriesAction";
import MobNavbar from "../components/MobNavbar";

const Main = () => {
  //redux
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.allTrending);
  const { data: UpMovies } = useSelector((state) => state.moviesUpcoming);
  const { data: UpSeries } = useSelector((state) => state.seriesUpcoming);

  useMemo(() => {
    dispatch(allTrendingAction());
    dispatch(moviesUpcomingAction());
    dispatch(seriesUpcomingAction());
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
            {loading ? <LoaderComponent /> : <Banner data={data} />}
          </div>
          <div className="section_b">
            <CardsCarousel
              title="Trending Now"
              url="/all/trending"
              data={data}
            />
          </div>
          <div className="section_b">
            <CardsCarousel
              title="UpComing Movies"
              url="/movies/upcoming"
              type="movie"
              data={UpMovies}
            />
          </div>
          <div className="section_b">
            <CardsCarousel
              title="On The Air Series"
              url="/series/ontheair"
              type="tv"
              data={UpSeries}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
