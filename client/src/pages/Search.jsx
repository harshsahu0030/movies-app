import { useEffect, useState } from "react";
import MobNavbar from "../components/MobNavbar";
import Sidebar from "../components/Sidebar";
import { FiArrowUpRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_ERRORS } from "../app/constants/userConstant";
import { toast } from "react-toastify";
import { useDebounce } from "../utils/useDebounce";
import { allSearchAction, allTrendingAction } from "../app/actions/allAction";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { Helmet } from "react-helmet";
import Loader from "../components/Loader";

const Search = () => {
  const navigate = useNavigate();

  //redux
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.allSearch);
  const { data: recData, loading: recLoading } = useSelector(
    (state) => state.allTrending
  );

  //state
  const [search, setSearch] = useState("");

  //hook
  const debouncedSearch = useDebounce(search);

  //useEffect
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: CLEAR_ERRORS });
    }
  }, [dispatch, error]);

  //useEffect
  useEffect(() => {
    dispatch(allTrendingAction());
    dispatch(allSearchAction(debouncedSearch));
  }, [dispatch, debouncedSearch]);

  return (
    <div className="search_section">
      <Helmet>
        <title>Nextflix | Search</title>
      </Helmet>
      <MobNavbar />

      <div className="wrapper">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <div className="left">
            <div className="input_container">
              <input
                type="search"
                className="input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button disabled={loading}>Search</button>
            </div>
            <hr />

            {loading
              ? "Loading..."
              : data && data.length > 0
              ? data.map((item, i) => (
                  <div
                    className="search_links"
                    key={i}
                    onClick={() =>
                      navigate(`/detail/${item.media_type}/${item.id}`, {
                        state: {
                          type: item.media_type,
                        },
                      })
                    }
                  >
                    <FiArrowUpRight />
                    <span>
                      {item.original_title ? item.original_title : item.name}
                    </span>
                  </div>
                ))
              : "No Result Found"}
          </div>
          <div className="right">
            <h2>Recomandations</h2>
            <div className="wrapper">
              {recLoading ? (
                <Loader />
              ) : recData && recData.length > 0 ? (
                recData.map((item, i) => <Card key={i} data={item} />)
              ) : (
                "Not Found"
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
