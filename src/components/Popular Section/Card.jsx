const Card = () => {
  return (
    <a className="border rounded-xl shadow-md shadow-white dark:shadow-black flex flex-col md:max-w-[17vw] lg:max-w-[13vw] ">
      <div className="w-full lg:max-w-[13vw]">
        <img
          className="h-[42.5vw] sm:h-[39vw] md:h-[25vw] md:w-[17vw] lg:h-[19vw] lg:w-[13vw] z-50 bg-black rounded-t-xl "
          src="./src/assets/imgdevstage/poster.jpg"
          alt=""
        />
      </div>
      <div className="flexbox-title text-wrap text-center dark:text-white max-w-[25vw] text-[.7rem]">
        venom the last dancsdsdsssssssssssssssssss
      </div>
    </a>
  );
};

export default Card;
