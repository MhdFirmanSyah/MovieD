import axios from "axios";

const REACT_APP_BASEURL = "https://api.themoviedb.org/3";
const REACT_APP_BASEIMAGE = "https://image.tmdb.org/t/p/original";
const REACT_APP_APIKEY = "51e9557b562ff60c81ad361696e75489";
const REACT_APP_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWU5NTU3YjU2MmZmNjBjODFhZDM2MTY5NmU3NTQ4OSIsIm5iZiI6MTczMDYwMTM4OS42NDk3NDQzLCJzdWIiOiI2NzI2ZTBhNTJmOTgxNmRjNjdmMDFhZjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-FpGyIguPCiQ3avVcQwAEBpFJyW_U5ojlh6nAErYZ0U";
const REACT_APP_TRENDING = "https://api.themoviedb.org/3/trending/all";
// const REACT_APP_TRENDING = "https://api.themoviedb.org/3/movie/latest";
const BASE_URL = REACT_APP_BASEURL;
const API_KEY = REACT_APP_APIKEY;

// const getDataMovies = async () => {
//   const movies = await axios.get(
//     `${REACT_APP_BASEURL}/movie/popular?api_key=${API_KEY}`
//   );
//   return movies.data.results;
// };
// console.log("data " + (await getDataMovies()));
// const getDataTrendingd = async () => {
//   const trending = await axios.get(
//     `${REACT_APP_BASEURL}/trending/all/day?api_key=${API_KEY}`
//   );
//   return trending.data.results;
// };

// const searchMovie = async () => {
//   const search = await axios.get("");
//   return;
// };

const getDataTrending = async () => {
  try {
    const response = await fetch(
      `${REACT_APP_TRENDING}/day?api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Can't get data: " + response.status);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};
// export { getDataMovies, searchMovie, getDataTrending };
export { getDataTrending };
