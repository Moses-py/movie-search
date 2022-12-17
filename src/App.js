import { useState } from "react";

import { Appbar } from "./components/Appbar";
import { Hero } from "./components/Hero";
import { MovieShowcase } from "./components/MovieShowcase";
import { Searchbar } from "./components/Searchbar";
import { SearchResult } from "./components/SearchResult";
import axios from "axios";
import "./styles/App.css";

function App() {
  const [searchMovieData, setSearchMovieData] = useState();

  async function searchMovie(keyword) {
    await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=30f57678d8753bc45e1c56e1ec4dcdf0&language=en-US&query=${keyword}&page=1&include_adult=false`
      )
      .then((res) => {
        setSearchMovieData(res.data.results);
      });
  }

  return (
    <>
      <Appbar />
      <Hero />
      <Searchbar search={searchMovie} />
      {searchMovieData ? (
        <SearchResult movieData={searchMovieData} />
      ) : (
        <MovieShowcase />
      )}
    </>
  );
}

export default App;
