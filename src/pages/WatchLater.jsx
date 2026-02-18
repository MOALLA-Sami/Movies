import React from 'react'
import "../css/Favorites.css"
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'

function WatchLater() {
  const { watchLater } = useMovieContext();

  if (watchLater.length > 0) {
    return (
      <div className='favorites'>
        <h2>Watch Later</h2>
        <div className="movies-grid">
          {watchLater.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className='favorites-empty'>
      <h2>No Movies in Watch Later</h2>
      <p>Add movies to watch later and they will appear here.</p>
    </div>
  );
}

export default WatchLater;
