import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Card = ({ data, type }) => {
  const navigate = useNavigate();

  return (
    <div
      className="card_section"
      onClick={() =>
        navigate(
          `/detail/${data.media_type ? data.media_type : type}/${data.id}`,
          {
            state: {
              type: data.media_type ? data.media_type : type,
            },
          }
        )
      }
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
        alt="poster"
      />
    </div>
  );
};

Card.propTypes = {
  data: propTypes.object,
  type: propTypes.string,
};

export default Card;
