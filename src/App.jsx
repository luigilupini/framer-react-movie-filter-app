import { useState, useEffect } from "react";
import Movie from "./components/Movie";

import "./App.css";

function App() {
  const [movies, setMovies] = useState([]); // original (we don't mutate it)

  const fetchPopular = async () => {
    const url = "https://api.themoviedb.org/3/movie";
    const api = "d0f6a962c312488745b97f69b178e4b5";
    const sortBy = "popular";
    const data = await fetch(
      `${url}/${sortBy}?api_key=${api}&language=en-US&page=1`
    );
    const movies = await data.json();
    setMovies(movies.results);
  };
  useEffect(() => {
    fetchPopular();
  }, []);
  console.log(movies.results);
  return (
    <div className="App">
      <div className="popular-movies">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
