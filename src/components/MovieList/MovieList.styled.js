import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 42px;
`;

export const Item = styled.li`
  border: 1px solid #2a8d9c;
  border-radius: 4px;
  :hover {
  box-shadow: 4px 6px 12px #2a8d9c;
`;

export const NavItem = styled(NavLink)`
  color: #000000;
  border-radius: 5px;
  padding: 6px 12px;
  display: inline-block;

  :hover,
  :focus {
    color: #2a8d9c;
  }
`;

export const FilmName = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
  font-size: 16px;
  text-align: center;
`;
