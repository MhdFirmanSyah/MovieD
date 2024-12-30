import { Suspense, lazy, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HeroSkeleton from "./../Skeleton Elements/HeroSkeleton";

const ContentSlider = lazy(() => import("./Slider"));

const HeroBanner = ({ trending }) => {
  const [trend, setTrend] = useState([]); // Inisialisasi dengan array kosong
  const [isLoading, setIsLoading] = useState(true); // Tambahkan state loading

  useEffect(() => {
    setIsLoading(true); // Mulai loading
    if (trending && trending.length > 0) {
      setTrend(trending.slice(0, 8));
      setIsLoading(false); // Akhiri loading
    }
  }, [trending]);

  if (isLoading) {
    return <HeroSkeleton />; // Tampilkan loading saat data belum siap
  }

  // if (!trend || trend.length === 0) {
  //   return <div>Tidak ada data trending.</div>; // Pesan error yang lebih informatif
  // }

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
        src={`src/assets/image/${direction}-arrow.png`}
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
    autoplay: true,
    autoplaySpeed: 7000,
    prevArrow: <ArrowButton direction="prev" />,
    nextArrow: <ArrowButton direction="next" />,
    pauseOnHover: true,
  };

  return (
    <Suspense fallback={<HeroSkeleton />}>
      <div className=" h-full w-full fixed mt-14 sm:mt-[3.7rem] md:mt-[4rem] lg:mt-[5rem] bg-white dark:bg-black ">
        <Slider {...settings}>
          {trend.map((movie) => (
            <ContentSlider key={movie.id} movie={movie} />
          ))}
        </Slider>
      </div>
    </Suspense>
  );
};

export default HeroBanner;
