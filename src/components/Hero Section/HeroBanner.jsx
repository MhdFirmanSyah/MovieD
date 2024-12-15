import { Suspense, lazy } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HeroSkeleton from "./../Skeleton Elements/HeroSkeleton";

const ContentSlider = lazy(() => import("./Slider"));

const HeroBanner = ({ trending }) => {
  if (!trending || trending.length === 0) {
    return <HeroSkeleton />;
  }

  const ArrowButton = ({ onClick, direction }) => (
    <button
      className={`nav-button-slider ${
        direction === "prev"
          ? "left-0 rounded-r-xl rounded-l-3xl"
          : "right-0 rounded-l-xl rounded-r-3xl"
      } hover:shadow-[13px_0_10px_-2px_rgba(255,255,255,1)] shadow-[13px_0_10px_-2px rgba(255,255,255,.5)] dark:hover:shadow-[13px_0_10px_-2px rgba(0,0,0,1)] dark:shadow-[13px_0_10px_-2px rgba(0,0,0,.5)]`}
      onClick={onClick}
    >
      <img
        src={`../../src/assets/image/${direction}-arrow.png`}
        alt={direction === "prev" ? "Previous" : "Next"}
        className="m-auto"
      />
    </button>
  );

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <ArrowButton direction="prev" />,
    nextArrow: <ArrowButton direction="next" />,
    pauseOnHover: true,
  };

  return (
    <Suspense fallback={<HeroSkeleton />}>
      <div className="relative before:h-10 before:w-full before:bg-white before:z-50">
        <span className="bg-gradient-to-b from-white to-black z-50 h-10 w-full "></span>
        <Slider {...settings}>
          {trending.map((movie) => (
            <ContentSlider key={movie.id} movie={movie} />
          ))}
        </Slider>
      </div>
    </Suspense>
  );
};

export default HeroBanner;
