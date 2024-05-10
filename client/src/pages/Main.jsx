import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar";
import { useMemo } from "react";
import { allTrendingAction } from "../app/actions/allAction";
import LoaderComponent from "../components/LoaderComponent";

const Main = () => {
  //redux
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.allTrending);

  useMemo(() => {
    dispatch(allTrendingAction());
  }, [dispatch]);

  return (
    <div className="main_section">
      <div className="wrapper">
        <div className="left">
          <Sidebar />
          <h1></h1>
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

export default Main;
