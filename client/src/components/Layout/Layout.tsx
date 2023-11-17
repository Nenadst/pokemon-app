import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from 'src/components/Header/Header';

const Layout: FC = () => (
  <Box>
    <Header />
    <Outlet />
  </Box>
);

export default Layout;
