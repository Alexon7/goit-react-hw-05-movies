import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Item, NavItem, FilmName } from './MovieList.styled';

export const MovieList = ({ movies, link }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ poster_path, name, title, id }) => {
        return (
          <Item key={id}>
            <NavItem to={`${link}${id}`} state={{ from: location }}>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                width={300}
              />
              <FilmName>{name || title}</FilmName>
            </NavItem>
          </Item>
        );
      })}
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      title: PropTypes.string,
    }).isRequired
  ).isRequired,
  link: PropTypes.string,
};
