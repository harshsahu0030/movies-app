import propTypes from "prop-types";

const HomeFeatures = ({ data }) => {
  return (
    <div className="home_features_section">
      <div className={data.direction === "left" ? "wrapper left" : "wrapper"}>
        <div className="info">
          <h2>{data.title}</h2>
          <h3>{data.desc}</h3>
        </div>
        <div className="image">
          <img src={data.url} alt="image" />
        </div>
      </div>
    </div>
  );
};

HomeFeatures.propTypes = {
  data: propTypes.object,
};

export default HomeFeatures;
