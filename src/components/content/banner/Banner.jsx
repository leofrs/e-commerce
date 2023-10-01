import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from "../../../images/banner-1.jpg";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2500,
    cssEase: "linear",
  };
  return (
    <div className="border border-red-200 w-full">
      <Slider {...settings}>
        <div>
          <img src={banner1} alt="banner de um carro" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
