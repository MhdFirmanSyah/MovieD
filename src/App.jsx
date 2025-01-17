import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  // getDataMovies,
  // searchMovie,
  getDataTrending,
} from "./utils/moviesData";
import NotFound from "./pages/Notfound";
import Home from "./pages/Home";

function App() {
  const [movies, setMovies] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    try {
      getDataTrending().then((result) => {
        setTrending(result);
        // console.log(result);
      });
    } catch (err) {
      console.log(err);
    }
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
