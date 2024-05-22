import propTypes from "prop-types";
import LoaderComponent from "./LoaderComponent";

const Information = ({ data }) => {
  return (
    <div className="information_section">
      {data ? (
        <div className="wrapper">
          <div className="left">
            <img
              src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
              alt="image"
            />
          </div>
          <div className="right">
            <table>
              <tbody>
                {data.release_date && (
                  <tr>
                    <td className="label">Released Date :</td>
                    <td className="value">{data.release_date}</td>
                  </tr>
                )}
                {data.status && (
                  <tr>
                    <td className="label">Status :</td>
                    <td className="value">{data.status}</td>
                  </tr>
                )}
                {data.runtime && (
                  <tr>
                    <td className="label">Runtime :</td>
                    <td className="value">{data.runtime} minutes</td>
                  </tr>
                )}
                {data.type && (
                  <tr>
                    <td className="label">Type :</td>
                    <td className="value">{data.type}</td>
                  </tr>
                )}
                {data.adult && (
                  <tr>
                    <td className="label">Adult :</td>
                    <td className="value">{data.adult ? "true" : "false"}</td>
                  </tr>
                )}
                {data.vote_average && (
                  <tr>
                    <td className="label">Average Votes :</td>
                    <td className="value">
                      {data.vote_average.toFixed(1)} Out of 10
                    </td>
                  </tr>
                )}
                {data.spoken_languages && (
                  <tr>
                    <td className="label">Languages :</td>
                    {data.spoken_languages.map((item, i) => (
                      <td className="value" key={i}>
                        {data.spoken_languages.length - 1 > i ? (
                          <>
                            <span key={item.id}>{item.name}</span>,
                          </>
                        ) : (
                          <span key={item.id}>{item.name}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                )}
                {data.production_companies && (
                  <tr>
                    <td className="label">Production Companies :</td>
                    {data.production_companies.map((item, i) => (
                      <td className="value" key={i}>
                        {data.production_companies.length - 1 > i ? (
                          <>
                            <span key={item.id}> {item.name}</span>,
                          </>
                        ) : (
                          <span key={item.id}> {item.name}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                )}
                {data.production_countries && (
                  <tr>
                    <td className="label">Production Countries :</td>
                    {data.production_countries.map((item, i) => (
                      <td className="value" key={i}>
                        {data.production_countries.length - 1 > i ? (
                          <>
                            <span key={item.id}> {item.name}</span>,
                          </>
                        ) : (
                          <span key={item.id}> {item.name}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                )}
                {data.seasons && (
                  <tr>
                    <td className="label">No. of Seasons :</td>
                    <td className="value">{data.number_of_seasons}</td>
                  </tr>
                )}
                {data.number_of_episodes && (
                  <tr>
                    <td className="label">No. of Episodes :</td>
                    <td className="value">{data.number_of_episodes}</td>
                  </tr>
                )}
                {data.last_episode_to_air && (
                  <tr>
                    <td className="label">Last Episode To Air :</td>
                    <td className="value">
                      {data.last_episode_to_air.air_date}
                    </td>
                  </tr>
                )}
                {data.next_episode_to_air && (
                  <tr>
                    <td className="label">Next Episode To Air :</td>
                    <td className="value">
                      {data.next_episode_to_air.air_date}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
};

Information.propTypes = {
  data: propTypes.object,
};

export default Information;
