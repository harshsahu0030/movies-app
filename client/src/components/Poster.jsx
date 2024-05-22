import propTypes from "prop-types";
import { IoPlay } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import LoaderComponent from "./LoaderComponent";

const Poster = ({ data }) => {
  const { type } = useParams();
  return (
    <div className="poster_section">
      {data ? (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
            alt="image"
          />
          <div className="overlay">
            <div className="info">
              <div className="title">
                <h4>{type}</h4>
                <h2>{data.original_title ? data.original_title : data.name}</h2>
                <p>{data.tagline && data.tagline}</p>
              </div>

              <p>{data.overview && data.overview}</p>

              <div className="genres">
                {data.genres.map((item, i) => (
                  <div key={item.id}>
                    {data.genres.length - 1 > i ? (
                      <>
                        <span>{item.name}</span> |
                      </>
                    ) : (
                      <span>{item.name}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="buttons">
                <button
                  onClick={() => toast.error("This feature is not added yet")}
                >
                  <IoPlay /> Play
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
};

Poster.propTypes = {
  data: propTypes.object,
};

export default Poster;
