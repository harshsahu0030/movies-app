import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar";
import { useMemo } from "react";
import { moviesTrendingAction } from "../app/actions/moviesAction";
import LoaderComponent from "../components/LoaderComponent";

const Movies = () => {
  // redux
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.moviesTrending);

  useMemo(() => {
    dispatch(moviesTrendingAction());
  }, [dispatch]);
  return (
    <div className="movies_section">
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

export default Movies;
