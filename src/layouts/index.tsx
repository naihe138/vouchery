import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { QuestionOutlineIcon, BellIcon, StarIcon } from '@chakra-ui/icons';
import Menu from './components/Menu';
import Header from './components/Header';
const Layout: FC = () => {
  return (
    <Box>
      <Header />
      <Flex height={window.innerHeight - 60}>
        <Menu></Menu>
        <Box flex={1}>
          <Outlet />
        </Box>
      </Flex>
    </Box>
  );
};

export default Layout;
