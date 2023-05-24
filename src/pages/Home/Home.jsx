import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/API';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const movies = await getTrendingMovies();
        setMovies(movies.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {isLoading ? <Loader /> : <MovieList movies={movies} link={'movies/'} />}
    </div>
  );
}
