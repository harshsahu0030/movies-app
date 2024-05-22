import propTypes from "prop-types";
import { IoPlay } from "react-icons/io5";
import { useParams } from "react-router-dom";

const Poster = ({ data }) => {
  const { type } = useParams();
  return (
    data && (
      <div className="poster_section">
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
                <>
                  {data.genres.length - 1 > i ? (
                    <>
                      <span key={item.id}>{item.name}</span> |
                    </>
                  ) : (
                    <span key={item.id}>{item.name}</span>
                  )}
                </>
              ))}
            </div>

            <div className="buttons">
              <button>
                <IoPlay /> Play
              </button>
              <button>More Info</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

Poster.propTypes = {
  data: propTypes.object,
};

export default Poster;
