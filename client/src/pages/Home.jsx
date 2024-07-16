import { Helmet } from "react-helmet";
import AskedQue from "../components/AskedQue";
import HomeFeatures from "../components/HomeFeatures";
import HomeSection01 from "../components/HomeSection01";
import { homeData } from "../data/homeData";

const Home = () => {
  return (
    <div className="home-section">
      <Helmet>
        <title>Nextflix</title>
      </Helmet>
      <HomeSection01 />
      <hr />
      {homeData && homeData.features
        ? homeData.features.map((data, i) => (
            <div key={i}>
              <HomeFeatures data={data} />
              <hr />
            </div>
          ))
        : ""}
      <AskedQue />
      <hr />
    </div>
  );
};

export default Home;
