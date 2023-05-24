import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { StyledLink, Container, Nav } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="movies">Movies</StyledLink>
      </Nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
