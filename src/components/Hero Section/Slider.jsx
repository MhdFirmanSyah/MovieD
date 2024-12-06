import { useState, useEffect } from "react";

const SliderSec = ({ movie }) => {
  const [isBackDropLoaded, setIsBackDropLoaded] = useState(false);
  const [isPosterLoaded, setIsPosterLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = () => {
      const imageBackDrop = new Image();
      imageBackDrop.src = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
      imageBackDrop.onload = () => {
        setIsBackDropLoaded(true);
      };

      const imagePoster = new Image();
      imagePoster.src = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
      imagePoster.onload = () => {
        setIsPosterLoaded(true);
      };
    };

    preloadImages();
  }, [movie.backdrop_path, movie.poster_path]);

  return (
    <>
      {/* {isBackDropLoaded && isPosterLoaded ? ( */}
        <div
          className="bg-white dark:bg-black z-0 justify-center backdrop-opacity-60 w-full h-96 md:h-[70vh] lg:h-[80vh] flex relative bg-cover bg-center sm:justify-normal filter"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          }}
        >
          <img
            className="h-52 md:h-60 lg:h-72 absolute m-auto justify-self-center bottom-[15vw] sm:bottom-0 sm:m-[10vw] drop-shadow-[5px_5px_10px_rgba(0,0,0,1)] dark:shadow-black"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt="Backdrop"
          />
        </div>
      {/* ) : (
        <h1>Loading...</h1>
      )} */}
    </>
  );
};

export default SliderSec;
