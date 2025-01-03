import getGenre from "../../utils/getGenre";
const Genre = ({ id }) => {
  const genre = getGenre(id);

  return (
    <a
      className="bg-white/30 backdrop-blur-sm dark:bg-black/30 text-black dark:text-white text-sm sm:text-md md:text-[1rem]  rounded-md px-1 md:px-2 md:py-1 hover:scale-[1.10]"
      href={genre && genre.link}
      target="blank"
    >
      {genre && genre.name}
    </a>
  );
};

export default Genre;
