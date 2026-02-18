import React from "react";
import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const {
    isFavorite,
    addToFavorites,
    removeFromFavorites,
    isWatchLater,
    addToWatchLater,
    removeFromWatchLater,
    isWatched,
    addToWatched,
    removeFromWatched,
  } = useMovieContext();

  const favorite = isFavorite(movie.id);
  const later = isWatchLater(movie.id);
  const watched = isWatched(movie.id);

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

        <div className="movie-overlay">
          <div className="top-buttons">
            <button
              className={`favorite-btn ${favorite ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                favorite
                  ? removeFromFavorites(movie.id)
                  : addToFavorites(movie);
              }}
            >
              ♥
            </button>
            <button
              className={`watchlater-btn ${later ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                later ? removeFromWatchLater(movie.id) : addToWatchLater(movie);
              }}
            >
              ⏱️
            </button>
            <button
              className={`watched-btn ${watched ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                watched ? removeFromWatched(movie.id) : addToWatched(movie);
              }}
            >
              ✔
            </button>
          </div>
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
      <div className="rating-badge">⭐ {movie.vote_average.toFixed(1)}</div>
    </div>
  );
}

export default MovieCard;
