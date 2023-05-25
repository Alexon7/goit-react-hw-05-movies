import { Box, Nav, NavItem } from './AppNav.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const AppNav = () => {
  return (
    <Box>
      <Nav>
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}
      </Nav>
    </Box>
  );
};
