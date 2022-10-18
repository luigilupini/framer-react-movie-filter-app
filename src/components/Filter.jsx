import { useEffect } from "react";

export default function Filter({
  movies,
  setFilterList,
  activeGenre,
  setActiveGenre,
}) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFilterList(movies);
      return;
    }
    const filterMovies = movies.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFilterList(filterMovies);
  }, [activeGenre]);
  return (
    <div className="filter-container">
      <button
        onClick={() => setActiveGenre(0)}
        className={activeGenre === 0 ? "active" : ""}
      >
        All
      </button>
      <button
        onClick={() => setActiveGenre(35)}
        className={activeGenre === 35 ? "active" : ""}
      >
        Comedy
      </button>
      <button
        onClick={() => setActiveGenre(28)}
        className={activeGenre === 28 ? "active" : ""}
      >
        Action
      </button>
    </div>
  );
}
