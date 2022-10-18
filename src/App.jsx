import { useState, useEffect } from "react";
/* # AnimatePresence: 
It enables the animation of components that have been removed from the tree.
When adding/removing more than a single child, every child must have a unique
key prop. Any `motion` components that have an `exit` property will animate out
when removed from the tree. See example snippet below:
```jsx
export const Items = ({ items }) => (
  <AnimatePresence>
    {items.map(item => (
      <motion.div
        key={item.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    ))}
  </AnimatePresence>
)
```
You can sequence exit animations throughout a tree using variants.
*/
import { motion, AnimatePresence } from "framer-motion";

import "./App.css";

import Filter from "./components/Filter";
import Movie from "./components/Movie";

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
      <motion.div className="popular-movies" layout>
        {filterList.map((movie) => (
          <AnimatePresence>
            <Movie key={movie.id} movie={movie} />
          </AnimatePresence>
        ))}
      </motion.div>
    </div>
  );
}

export default App;
