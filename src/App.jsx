import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from './components/MovieList';
import Loading from './components/Loading';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://dummyapi.online/api/movies')
      .then((response) => {
        if (Array.isArray(response.data)) {
          setMovies(response.data); 
        } else {
          setError('Invalid data format');
        }
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Movie Database</h1>
      {loading ? (
        <Loading />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default App;
