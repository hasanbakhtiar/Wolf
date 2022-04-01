import React from "react";
import ReactDOM from "react-dom";
import AddMovies from "./AddMovies";
import { MovieProvider } from "./MovieContext";
import MovieList from "./MovieList";
import Nav from "./Nav";

const App = () => {
  return (
    <MovieProvider>
      <Nav />
      <AddMovies />
      <MovieList />
    </MovieProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
