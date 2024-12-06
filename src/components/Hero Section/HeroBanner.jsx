import { Suspense, lazy } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderGlimmer from "./SliderGlimmer"; // Import correctly

const LazySliderSec = lazy(() => import("./Slider")); // Correct import

const HeroBanner = ({ movies, trending }) => {
  if (!trending || trending.length === 0) {
    return <SliderGlimmer />; // Return fallback if no trending movies
  }

  const PrevArrow = ({ onClick }) => (
    <button
      className="nav-button-slider group-hover:shadow-[-13px_0_10px_-2px_rgba(255,255,255,1)] shadow-[-13px_0_10px_-2px_rgba(255,255,255,.5)] dark:hover:shadow-[-13px_0_10px_-2px_rgba(0,0,0,1)] dark:shadow-[-13px_0_10px_-2px_rgba(0,0,0,.5)] rounded-r-xl rounded-l-3xl left-0"
      onClick={onClick}
    >
      <img
        src="../../src/assets/image/prev-arrow.png"
        alt="Previous"
        className="m-auto"
      />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      className="nav-button-slider hover:shadow-[13px_0_10px_-2px_rgba(255,255,255,1)] shadow-[13px_0_10px_-2px_rgba(255,255,255,.5)] dark:hover:shadow-[13px_0_10px_-2px_rgba(0,0,0,1)] dark:shadow-[13px_0_10px_-2px_rgba(0,0,0,.5)] rounded-l-xl rounded-r-3xl right-0"
      onClick={onClick}
    >
      <img
        src="../../src/assets/image/next-arrow.png"
        alt="Next"
        className="m-auto"
      />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    pauseOnHover: true, // Add pauseOnHover for a better user experience
  };

  return (
    <Suspense fallback={<SliderGlimmer />}>
      <div className="relative">
        <Slider {...settings}>
          {trending.map((movie) => (
            <LazySliderSec key={movie.id} movie={movie} />
          ))}
        </Slider>
      </div>
    </Suspense>
  );
};

export default HeroBanner;
