import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Menu from './components/Menu';
import Header from './components/Header';
const Layout: FC = () => {
  return (
    <>
      <Header />
      <Flex height={window.innerHeight - 60}>
        <Menu></Menu>
        <Box flex={1}>
          <Outlet />
        </Box>
      </Flex>
    </>
  );
};

export default Layout;
