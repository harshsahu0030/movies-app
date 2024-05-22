import { useDispatch, useSelector } from "react-redux";
import Poster from "../components/Poster";
import Sidebar from "../components/Sidebar";
import { useEffect } from "react";
import { moviesDetailsAction } from "../app/actions/moviesAction";
import { useParams } from "react-router-dom";
import { seriesDetailsAction } from "../app/actions/seriesAction";
import Information from "../components/Information";
import LoaderComponent from "../components/LoaderComponent";
import MobNavbar from "../components/MobNavbar";

const Details = () => {
  const { type, id } = useParams();

  //redux
  const dispatch = useDispatch();
  const { data: movieDt, loading: movieLd } = useSelector(
    (state) => state.movieDetails
  );
  const { data: seriesDt, loading: seriesLd } = useSelector(
    (state) => state.seriesDetails
  );

  //useEffect
  useEffect(() => {
    if (type) {
      if (type === "movie") {
        dispatch(moviesDetailsAction(id, type));
      } else {
        dispatch(seriesDetailsAction(id, type));
      }
    }
  }, [dispatch, id, type]);

  return (
    <div className="main_section">
      <MobNavbar />
      <div className="wrapper">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <div className="section_c">
            {movieLd || seriesLd ? (
              <LoaderComponent />
            ) : (
              <Poster data={movieDt ? movieDt : seriesDt} />
            )}
          </div>
          <div className="section_b">
            {movieLd || seriesLd ? (
              <LoaderComponent />
            ) : (
              <Information data={movieDt ? movieDt : seriesDt} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
