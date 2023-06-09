import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCast } from 'services/API';
import { Loader } from 'components/Loader/Loader';
import { List, Item, Img, Text } from './Cast.styled';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchCast = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieCast(movieId);
        setCast([...data]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {cast.length > 0 ? (
        <List>
          {cast.map(({ profile_path, character, original_name, id }) => {
            return (
              <Item key={id}>
                <Img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : 'https://m.media-amazon.com/images/I/51dCwRZxtLL.jpg'
                  }
                  alt={original_name}
                />
                <Text>{original_name}</Text>
                <Text>"{character}"</Text>
              </Item>
            );
          })}
        </List>
      ) : (
        <p>Sorry, there is no information</p>
      )}
    </>
  );
}
