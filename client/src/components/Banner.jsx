import propTypes from "prop-types";
import { IoPlay } from "react-icons/io5";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Banner = ({ data, type }) => {
  const navigate = useNavigate();
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {data && data.length > 0
        ? data.slice(0, 8).map((item, i) => (
            <SwiperSlide key={i}>
              <div className="wrapper">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                  alt="image"
                />
                <div className="overlay">
                  <div className="info">
                    <div className="title">
                      <h4>{item.media_type}</h4>
                      <h2>
                        {item.original_title ? item.original_title : item.name}
                      </h2>
                    </div>
                    <p>{item.overview}</p>

                    <div className="buttons">
                      <button
                        onClick={() =>
                          toast.error("This feature is not added yet")
                        }
                      >
                        <IoPlay /> Play
                      </button>
                      <button
                        onClick={() =>
                          navigate(
                            `/detail/${
                              item.media_type ? item.media_type : type
                            }/${item.id}`,
                            {
                              state: {
                                type: item.media_type ? item.media_type : type,
                              },
                            }
                          )
                        }
                      >
                        More Info
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        : ""}
    </Swiper>
  );
};

Banner.propTypes = {
  data: propTypes.array,
  type: propTypes.string,
};

export default Banner;
