import { useMemo } from "react";
import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { seriesTrendingAction } from "../app/actions/seriesAction";
import LoaderComponent from "../components/LoaderComponent";

const Series = () => {
  // redux
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.seriesTrending);

  useMemo(() => {
    dispatch(seriesTrendingAction());
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
        </div>
      </div>
    </div>
  );
};

export default Series;
