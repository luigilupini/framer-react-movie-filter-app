import { useState, useEffect } from "react";
import Movie from "./components/Movie";

import "./App.css";
import Filter from "./components/Filter";

function App() {
  // We keep the original (we don't mutate it) we render the filtered list.
  const [movies, setMovies] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  const fetchPopular = async () => {
    const url = "https://api.themoviedb.org/3/movie";
    const api = "d0f6a962c312488745b97f69b178e4b5";
    const sortBy = "popular";
    const data = await fetch(
      `${url}/${sortBy}?api_key=${api}&language=en-US&page=1`
    );
    const movies = await data.json();
    setMovies(movies.results);
    setFilterList(movies.results);
  };
  useEffect(() => {
    fetchPopular();
  }, []);
  console.log(movies.results);
  return (
    <div className="App">
      <Filter
        movies={movies}
        setFilterList={setFilterList}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <div className="popular-movies">
        {filterList.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
