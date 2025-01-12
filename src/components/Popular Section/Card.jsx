const Card = () => {
  return (
    <div className=" border  rounded-md shadow-md shadow-white dark:shadow-black relative size-">
      <img
        className=" h-[18rem] z-50  bg-black rounded-t-md"
        src="./src/assets/imgdevstage/poster.jpg"
        alt=""
      />
      <div className="">
        <p className=" text-sm max-w-min ">venom the last dance</p>
      </div>
    </div>
  );
};

export default Card;
