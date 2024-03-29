import { React, useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./assets/search.svg";
import MovieCard from "./MovieCard.jsx";

//API key from OMDBAPI: 4285db42
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=4285db42";

const movie1 = {
  Title: "Italian Spiderman",
  Year: "2007",
  imdbID: "tt2705436",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieX</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for a movie"
          value={search}
          onChange={(e) => {setSearch(e.target.value); }}
        />
        <img 
          src={SearchIcon} 
          alt="search" 
          onClick={() => {searchMovies(search)}} />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {
            movies.map((movie) => (
                <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
            <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
