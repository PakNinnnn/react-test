import { React, useEffect } from "react";
import "./App.css";
import SearchIcon from "./assets/search.svg";

//API key from OMDBAPI: 4285db42
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=4285db42";

const movie1 = {
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
}

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
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
            value="Spiderman" 
            onChange={() => {}}
        /> 
        <img 
            src={SearchIcon} 
            alt="search" 
            onClick={() => {}}
        /> 
      </div>

      <div className="container">
        
      </div>
    </div>
  );
};

export default App;
