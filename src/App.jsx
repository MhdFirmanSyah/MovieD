import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getDataMovies,
  searchMovie,
  getDataTrending,
} from "./utils/moviesData";
import NotFound from "./pages/Notfound";
import Home from "./pages/Home";

function App() {
  const [movies, setMovies] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    try {
      getDataTrending().then((res) => {
        setTrending(res);
        console.log(res)
      });
    } catch(err){
      console.log(err)
    }

    // getDataMovies().then((result) => {
    //   setMovies(result);
    // });
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home trending={trending} movies={movies} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
