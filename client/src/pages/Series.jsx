import { useMemo } from "react";
import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  seriesPopularAction,
  seriesTrendingAction,
  seriesUpcomingAction,
} from "../app/actions/seriesAction";
import LoaderComponent from "../components/LoaderComponent";
import CardsCarousel from "../components/CardsCarousel";

const Series = () => {
  // redux
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.seriesTrending);
  const { data: UpSeries } = useSelector((state) => state.seriesUpcoming);
  const { data: PopSeries } = useSelector((state) => state.seriesPopular);

  useMemo(() => {
    dispatch(seriesTrendingAction());
    dispatch(seriesUpcomingAction());
    dispatch(seriesPopularAction());
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
              title="Trending"
              url="/series/trending"
              data={data}
            />
          </div>
          <div className="section_b">
            <CardsCarousel
              title="On The Air"
              url="/series/ontheair"
              data={UpSeries}
            />
          </div>
          <div className="section_b">
            <CardsCarousel
              title="Popular"
              url="/series/popular"
              data={PopSeries}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Series;
