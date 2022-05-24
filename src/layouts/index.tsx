import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Menu from './components/Menu';
import Header from './components/Header';
const Layout: FC = () => {
  return (
    <>
      <Header />
      <Flex height={'calc(100vh - 60px)'} overflow="hidden">
        <Menu></Menu>
        <Box flex={1} height={'calc(100vh - 60px)'} overflowY="auto">
          <Outlet />
        </Box>
      </Flex>
    </>
  );
};

export default Layout;
