import React, { useState } from "react";

const API_URL = "http://www.omdbapi.com?apikey=f924bdab";

const NavSearchBar = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(searchTerm);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchMovies(searchTerm);
    }
  };

  return (
    <>
      <div
        className="container"
        style={{ maxWidth: "800px", margin: "20px auto" }}
      >
        <div className="search d-flex justify-content-center my-4">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            style={{ maxWidth: "300px" }}
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          {movies?.length > 0 ? (
            movies.map((movie) => (
              <div
                className="card mx-2 my-2"
                style={{ width: "18rem" }}
                key={movie.imdbID}
              >
                <img
                  className="card-img-top"
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "https://via.placeholder.com/400"
                  }
                  alt={movie.Title}
                />
                <div className="card-body">
                  <span>{movie.Type}</span>
                  <h5 className="card-title">{movie.Title}</h5>
                  <p>{movie.Year}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <h2>Search With a Valid Movie Name</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavSearchBar;
