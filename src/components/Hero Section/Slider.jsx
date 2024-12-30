import { useState, useEffect } from "react";
import Ratings from "./Ratings";

const SliderSec = ({ movie }) => {
  const [isBackDropLoaded, setIsBackDropLoaded] = useState(false);
  const [isPosterLoaded, setIsPosterLoaded] = useState(false);
  const [isOpenInfo, setOpenInfo] = useState(false);
  const [isOpenRating, setRatingOpen] = useState(false);
  // console.log(movie);
  const resolutionBackdrop = "original";
  const resolutionPoster = "w500";
  useEffect(() => {
    const backdropImg = new Image();
    backdropImg.onload = () => setIsBackDropLoaded(true);
    backdropImg.src = `https://image.tmdb.org/t/p/${resolutionBackdrop}/${movie.backdrop_path}`;

    const posterImg = new Image();
    posterImg.onload = () => setIsPosterLoaded(true);
    posterImg.src = `https://image.tmdb.org/t/p/${resolutionPoster}/${movie.poster_path}`;
    resolutionBackdrop;
  }, [movie.backdrop_path, movie.poster_path]);

  return (
    <>
      <div
        className="bg-white   dark:bg-black justify-center backdrop-opacity-60 w-full h-96 md:h-[25rem] lg:h-[500px] xl:h-[580px] 2xl:h-[700px] flex relative bg-cover bg-center sm:justify-normal"
        style={{
          // backgroundImage: "url(src/assets/imgdevstage/backdrop.jpg)",
          backgroundImage: `url(https://image.tmdb.org/t/p/${resolutionBackdrop}/${movie.backdrop_path})`,
        }}
      >
        {/*poster*/}
        {/*title and rating*/}
        <img
          className="h-52 lg:h-[20rem] xl:h-[22rem] 2xl:h-[30rem] m-auto justify-self-center bottom-[17vw] sm:bottom-0 sm:h-[15rem] sm:m-[10vw] md:h-[18rem] md:my-auto lg:m-auto lg:ml-[12vw] drop-shadow-[5px_5px_10px_rgba(0,0,0,1)] dark:shadow-black hover:z-10 hover:scale-110 hover:bottom-[17vw] sm:hover:bottom-0 transition-all rounded"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          // src="src/assets/imgdevstage/poster.jpg"
          alt="Backdrop"
        />
        <div className="container m-auto text-white absolute sm:bottom-[10vw] bottom-[5vw] md:bottom-[5vw] xl:bottom-[9vw] 2xl:bottom-[6vw] lg:bottom-[8vw] xl:m-auto sm:left-[37vw] md:left-[20rem] 2xl:left-[42rem] lg:left-[25rem] xl:left-[30rem] justify-center items-center content-center sm:content-start sm:items-start sm:justify-start mx-auto flex flex-col gap-2 md:gap-3">
          {/*title*/}
          <h1 className="text-[1.2rem] xl:text-[2rem] max-w-[80%] sm:max-w-[50%] md:max-w-[45%] drop-shadow-[-5px_-5px_3px_rgba(0,0,0,1)] font-black z-10 mb-[2.5vw] sm:mb-1 w-max px-3 rounded-full backdrop-blur-sm sm:text-[1.7rem] 2xl:text-[4rem]">
            {movie.name ?? movie.title}
          </h1>
          {isOpenInfo && <Overview movie={movie} />}

          {/*rating and info*/}
          <section className="flex z-10 gap-2 sm:flex-col flex-row">
            <div className="hidden sm:flex">
              <span className="side-about w-fit mr-2">{movie.media_type}</span>
              <span className="side-about w-max ">
                {movie.first_air_date ?? movie.release_date}
              </span>
            </div>

            <span className="side-about sm:hidden">{movie.media_type}</span>
            <span className="side-about sm:hidden order-last">
              {movie.first_air_date ?? movie.release_date}
            </span>
            <div
              className={`flex flex-row w-max py-1 px-3 rounded-lg m-auto sm:m-0 content-center justify-center gap-2 items-center backdrop-blur-lg bg-white/25 dark:bg-black/25 drop-shadow-[-5px_-5px_3px_rgba(0,0,0,1)] z-10 ${
                isOpenRating ? "open-rating" : ""
              }`}
            >
              {isOpenRating && (
                <span className="absolute z-10 top-[-27px] text-[12px] dark:text-white text-black">
                  {parseFloat(movie.vote_average.toFixed(1))}
                </span>
              )}
              <Ratings
                setRatingOpen={setRatingOpen}
                rating={movie.vote_average}
              />
              <img
                onClick={() => setOpenInfo(!isOpenInfo)}
                className="drop-shadow-[0_0_5px_rgba(0,0,0,1)] dark:drop-shadow-[0_0_5px_rgba(255,255,255,1)] w-[20px] cursor-pointer hover:scale-105"
                src="../../src/assets/image/info.png"
                alt=""
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

const Overview = ({ movie }) => {
  return (
    <div className="overviewscrollbar sm:m-0 z-10  sm:block bg-white/25  w-1/2 m-auto bottom-[10vw] xl:text-lg 2xl:text-2xl  p-4 rounded-md backdrop-blur-2xl text-justify overflow-auto max-h-[30vw] md:max-h-[20rem] sm:max-h-[20vw] shadow-2xl shadow-black">
      <p>{`${movie.overview}`}</p>
    </div>
  );
};

export default SliderSec;
