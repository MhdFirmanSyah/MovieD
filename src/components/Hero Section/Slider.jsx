import { useState, useEffect } from "react";
import Ratings from './Ratings'

const SliderSec = ({ movie }) => {
  const [isBackDropLoaded, setIsBackDropLoaded] = useState(false);
  const [isPosterLoaded, setIsPosterLoaded] = useState(false);
  const [isOpenInfo, setOpenInfo] = useState(false)
  const [isOpenRating, setRatingOpen] = useState(false)
  useEffect(() => {
    const preloadImages = () => {
      const imageBackDrop = new Image();
      imageBackDrop.src = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
      imageBackDrop.onload = () => {
        setIsBackDropLoaded(true);
      };

      const imagePoster = new Image();
      imagePoster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
      imagePoster.onload = () => {
        setIsPosterLoaded(true);
      };
    };

    preloadImages();
  }, [movie.backdrop_path, movie.poster_path]);




  return (
    <>
      <div
        className="bg-white dark:bg-black z-0 justify-center backdrop-opacity-60 w-full h-96 md:h-[70vh] lg:h-[80vh] flex relative bg-cover bg-center sm:justify-normal"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        }}
      >
        {/*poster  */}
        <img
          className="h-52 md:h-[30vw] lg:h-[20rem]  m-auto justify-self-center bottom-[17vw] sm:bottom-0 sm:m-[10vw] lg:mx-auto lg:ml-[12vw]  drop-shadow-[5px_5px_10px_rgba(0,0,0,1)] dark:shadow-black hover:z-50 hover:scale-110 hover:bottom-[17vw] sm:hover:bottom-0  tansition-all"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="Backdrop"
        />
        {/* title and rating */}
        <div className=" container text-white absolute sm:bottom-[10vw] bottom-[5vw] xl:m-auto sm:left-[35vw] md:left-[33vw] lg:left-[25rem]    justify-center items-center content-center sm:content-start sm:items-start sm:justify-start mx-auto flex flex-col gap-2 md:gap-3">
          {/* title */}
          <h1 className="text-[1.4rem] drop-shadow-[-5px_-5px_3px_rgba(0,0,0,1)] font-black z-50 mb-[2.5vw] sm:mb-1 w-max px-3 rounded-full backdrop-blur-sm sm:text-[1.7rem]">
            {movie.name ?? movie.title}
          </h1>
          {isOpenInfo && <Overview movie={movie} />}

          {/* rating and info */}
          <section className="flex z-50 gap-2  sm:flex-col flex-row">
            <div className="hidden sm:block">
              <span className="side-about">{movie.media_type}</span>
              <span className="side-about">
                {movie.first_air_date ?? movie.release_date}
              </span>
            </div>

            <span className="side-about sm:hidden">{movie.media_type}</span>
            <span className="side-about sm:hidden order-last">
              {movie.first_air_date ?? movie.release_date}
            </span>
            <div
              className={`flex flex-row w-max py-1 px-3 rounded-lg m-auto sm:m-0 content-center justify-center gap-2 items-center backdrop-blur-lg bg-white/25 dark:bg-black/25 drop-shadow-[-5px_-5px_3px_rgba(0,0,0,1)] z-50 ${
                isOpenRating ? "open-rating" : ""
              }`}
            >
              {isOpenRating && (
                <span className="absolute z-50 top-[-27px] text-[12px] dark:text-white text-black">
                  {parseFloat(movie.vote_average.toFixed(1))}
                </span>
              )}

              <Ratings
                setRatingOpen={setRatingOpen}
                rating={movie.vote_average}
              />
              <img
                onClick={() => setOpenInfo(!isOpenInfo)}
                className="drop-shadow-[0_0_5px_rgba(0,0,0,1)] dark:drop-shadow-[0_0_5px_rgba(255,255,255,1)] w-[20px] cursor-pointer hover:scale-105 "
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
      <div
        className="overviewscrollbar sm:m-0 z-10  sm:block bg-white/25  w-1/2 m-auto bottom-[10vw]   p-4 rounded-md backdrop-blur-2xl text-justify overflow-auto max-h-[30vw] sm:max-h-[20vw] shadow-2xl shadow-black"
      >
        <p>{`${movie.overview}`}</p>
      </div>
    );
  };




export default SliderSec;
