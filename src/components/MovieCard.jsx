import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className='details'>
      <h3>{movie.movie}</h3>
      <p>Rating: {movie.rating}</p>
      </div>
      <div className="button-container">
       <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">
        View on IMDb
      </a> 
      </div>
      
    </div>
  );
};

export default MovieCard;
