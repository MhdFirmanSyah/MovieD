const genres = {
  28: { name: "Action", link: "https://en.wikipedia.org/wiki/Action_film" },
  12: {
    name: "Adventure",
    link: "https://en.wikipedia.org/wiki/Adventure_film",
  },
  16: {
    name: "Animation",
    link: "https://en.wikipedia.org/wiki/Animated_film",
  },
  35: { name: "Comedy", link: "https://en.wikipedia.org/wiki/Comedy_film" },
  80: { name: "Crime", link: "https://en.wikipedia.org/wiki/Crime_film" },
  99: {
    name: "Documentary",
    link: "https://en.wikipedia.org/wiki/Documentary_film",
  },
  18: { name: "Drama", link: "https://en.wikipedia.org/wiki/Drama_film" },
  10751: { name: "Family", link: "https://en.wikipedia.org/wiki/Family_film" },
  14: { name: "Fantasy", link: "https://en.wikipedia.org/wiki/Fantasy_film" },
  36: {
    name: "History",
    link: "https://en.wikipedia.org/wiki/Historical_film",
  },
  27: { name: "Horror", link: "https://en.wikipedia.org/wiki/Horror_film" },
  10402: { name: "Music", link: "https://en.wikipedia.org/wiki/Musical_film" },
  9648: { name: "Mystery", link: "https://en.wikipedia.org/wiki/Mystery_film" },
  10749: {
    name: "Romance",
    link: "https://en.wikipedia.org/wiki/Romance_film",
  },
  878: {
    name: "Science Fiction",
    link: "https://en.wikipedia.org/wiki/Science_fiction_film",
  },
  10770: {
    name: "TV Movie",
    link: "https://en.wikipedia.org/wiki/Television_film",
  },
  53: { name: "Thriller", link: "https://en.wikipedia.org/wiki/Thriller_film" },
  10752: { name: "War", link: "https://en.wikipedia.org/wiki/War_film" },
  37: {
    name: "Western",
    link: "https://en.wikipedia.org/wiki/Western_(genre)",
  },
};

const getGenre = (genreId) => {
  return genreId ? genres[genreId] : "Unknown";
};

export default getGenre;
