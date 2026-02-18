import React from 'react'
import "../css/Favorites.css"
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'

function Watched() {
  const { watched } = useMovieContext();

  if (watched.length > 0) {
    return (
      <div className='favorites'>
        <h2>Watched Movies</h2>
        <div className="movies-grid">
          {watched.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className='favorites-empty'>
      <h2>No Watched Movies Yet</h2>
      <p>Mark movies as watched and they will appear here.</p>
    </div>
  );
}

export default Watched;
