import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/API';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { Box } from 'pages/MovieDetail/MovieDetail.styled';

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
    <Box>
      {/* <Title>Trending today</Title> */}
      {isLoading ? <Loader /> : <MovieList movies={movies} link={'movies/'} />}
    </Box>
  );
}
