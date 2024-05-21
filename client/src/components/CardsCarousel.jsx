import { MdOutlineArrowForwardIos } from "react-icons/md";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import propTypes from "prop-types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import LoaderComponent from "./LoaderComponent";
import Card from "./Card";

const CardsCarousel = ({ data, title, url, type }) => {
  //state
  const [inWidth, setInWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setInWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="card_carousel_section">
      <h3>
        {title} <MdOutlineArrowForwardIos />
      </h3>
      <Swiper
        slidesPerView={inWidth && inWidth > 1024 ? 6 : inWidth > 800 ? 4 : 2}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {!data ? (
          <LoaderComponent />
        ) : (
          data.map((item, i) => (
            <SwiperSlide key={i}>
              <Card data={item} type={type} />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};

CardsCarousel.propTypes = {
  data: propTypes.array,
  title: propTypes.string,
  url: propTypes.string,
  type: propTypes.string,
};

export default CardsCarousel;
