const Card = () => {
  return (
    <div className=" border  rounded-xl shadow-md shadow-white dark:shadow-black relative">
      <img
        className=" h-[43.5vw] sm:h-[40vw] md:h-[26vw] lg:h-[20vw] z-50  bg-black rounded-t-xl"
        src="./src/assets/imgdevstage/poster.jpg"
        alt=""
      />
      {/* <div className="flex"> */}
      <p className=" text-sm text-white text-center p-4 text-wrap">
        venom the last dance
      </p>
      {/* </div> */}
    </div>
  );
};

export default Card;
