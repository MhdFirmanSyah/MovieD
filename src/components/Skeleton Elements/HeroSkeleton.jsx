import "./HeroSkeleton.css";
import * as React from "react";
import { useMediaQuery } from "@react-hook/media-query";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const SliderGlimmer = () => {
  const isXL = useMediaQuery("(min-width: 1352px)");

  return (
    // container
    <div className="slider-container loading bg-[#ffff] dark:bg-[#000000]  justify-center w-full h-96 md:h-[25rem] lg:h-[500px] xl:h-[580px] 2xl:h-[700px] flex relative  bg-center sm:justify-normal">
      {/* img/poster */}
      <div className="poster-skeleton  shimmer size-[9rem] sm:size-[9.6rem] md:size-[11rem] lg:size-[13rem] xl:size-[15rem] 2xl:size-[20rem] h-52 lg:h-[20rem] xl:h-[22rem] 2xl:h-[30rem] m-auto justify-self-center bottom-[17vw] sm:bottom-0 sm:h-[15rem] sm:m-[10vw] md:h-[18rem] md:my-auto lg:m-auto lg:ml-[12vw] z-50 rounded-md"></div>
      {/* info, title, rating */}
      <div className="info-container container m-auto absolute sm:bottom-[10vw] bottom-[5vw] md:bottom-[5vw] xl:bottom-[9vw] 2xl:bottom-[6vw] lg:bottom-[8vw] xl:m-auto sm:left-[37vw] md:left-[20rem] 2xl:left-[42rem] lg:left-[25rem] xl:left-[30rem] justify-center items-center content-center sm:content-start sm:items-start sm:justify-start mx-auto flex flex-col gap-2 md:gap-3 ">
        <div className="title-skeleton  shimmer text-transparent text-[1.2rem] xl:text-[2rem] max-w-[80%] sm:max-w-[50%] md:max-w-[45%]  mb-[vw] sm:mb-1 w-max px-3 rounded-full backdrop-blur-sm sm:text-[1.7rem] 2xl:text-[4rem]">
          Title Movies
        </div>
        {/*rating and info*/}

        <section className="overview-skeleton flex z-50 gap-2 sm:flex-col flex-row">
          <div className="details-skeleton hidden sm:block">
            <span className="detail-item  side-about-skeleton shadow-none shimmer">
              Rating
            </span>
            <span className="detail-item side-about-skeleton  shadow-none shimmer">
              Media
            </span>
          </div>

          <span className="rating-bar side-about sm:hidden  shadow-none shimmer">
            Rating
          </span>
          <span className="info-icon side-about sm:hidden order-last shadow-none shimmer">
            Media
          </span>
          {/* <div className="info-icon"> lorem</div> */}
          <div className="flex flex-row w-max py-1 px-3 rounded-lg m-auto sm:m-0 content-center justify-center gap-2 items-center backdrop-blur-lg bg-white/25 dark:bg-black/25 drop-shadow-[-5px_-5px_3px_rgba(0,0,0,1)] z-50 shimmer">
            <Stack spacing={1} alt="half-rating">
              <Rating
                className="rating-style"
                name="half-rating-read"
                // defaultValue=6
                size={isXL ? "large" : ""}
                precision={0.1}
                readOnly
              />
            </Stack>
            <span className="w-[20px] size-5 bg-white rounded-full  " />
          </div>
        </section>
      </div>
    </div>
  );
};

export default SliderGlimmer;
