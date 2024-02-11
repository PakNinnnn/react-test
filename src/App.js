import { React, useEffect } from "react";

//API key from OMDBAPI: 4285db42
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=4285db42';

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
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

export default App;
