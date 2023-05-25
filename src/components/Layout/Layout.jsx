import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { AppNav } from 'components/AppNav/AppNav';
import { Box } from './Layout.styled';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <Box>
      <AppNav />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
}
