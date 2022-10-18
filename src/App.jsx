import { useState, useEffect } from "react";
import Movie from "./components/Movie";

import "./App.css";
import Filter from "./components/Filter";

const api = "d0f6a962c312488745b97f69b178e4b5";

function App() {
  const [popular, setPopular] = useState([]);
  const fetchPopular = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=en-US&page=1`
    );
    const movies = await data.json();
    setPopular(movies.results);
  };
  useEffect(() => {
    fetchPopular();
  }, []);
  console.log(popular.results);
  return (
    <div className="App">
      <Filter />
      <div className="popular-movies">
        {popular.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;
