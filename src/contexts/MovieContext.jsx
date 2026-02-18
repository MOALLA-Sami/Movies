import React, { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [watchLater, setWatchLater] = useState([]);
  const [watched, setWatched] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    const storedLater = localStorage.getItem("watchLater");
    const storedWatched = localStorage.getItem("watched");

    if (storedFavs) setFavorites(JSON.parse(storedFavs));
    if (storedLater) setWatchLater(JSON.parse(storedLater));
    if (storedWatched) setWatched(JSON.parse(storedWatched));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    localStorage.setItem("watchLater", JSON.stringify(watchLater));
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [favorites, watchLater, watched]);

  // FAVORITES functions
  const addToFavorites = (movie) => setFavorites((prev) => [...prev, movie]);
  const removeFromFavorites = (movieId) =>
    setFavorites((prev) => prev.filter((m) => m.id !== movieId));
  const isFavorite = (movieId) =>
    favorites.some((m) => m.id === movieId);

  // WATCH LATER functions
  const addToWatchLater = (movie) =>
    setWatchLater((prev) => [...prev, movie]);
  const removeFromWatchLater = (movieId) =>
    setWatchLater((prev) => prev.filter((m) => m.id !== movieId));
  const isWatchLater = (movieId) =>
    watchLater.some((m) => m.id === movieId);

  // WATCHED functions
  const addToWatched = (movie) =>
    setWatched((prev) => [...prev, movie]);
  const removeFromWatched = (movieId) =>
    setWatched((prev) => prev.filter((m) => m.id !== movieId));
  const isWatched = (movieId) =>
    watched.some((m) => m.id === movieId);

  return (
    <MovieContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,

        watchLater,
        addToWatchLater,
        removeFromWatchLater,
        isWatchLater,

        watched,
        addToWatched,
        removeFromWatched,
        isWatched,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
