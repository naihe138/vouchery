import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { QuestionOutlineIcon, BellIcon, StarIcon } from '@chakra-ui/icons';
import Menu from './menu';
const Layout: FC = () => {
  const navigate = useNavigate();
  const iconSize = 5;
  return (
    <Box>
      <Flex
        bg="#0C2161"
        color="#ffffff"
        height="60px"
        w="100%"
        justifyContent="space-between"
        boxShadow="0 0 10px #0C2161"
        padding="0 20px"
        position="relative"
        zIndex={1}
      >
        <Box w="300px" display="flex" alignItems="center" fontSize="30px">
          vouchery
        </Box>
        <Flex justifyContent="center" alignItems="center">
          <QuestionOutlineIcon w={iconSize} height={iconSize} />
          <BellIcon marginLeft="20px" w={iconSize} height={iconSize} />
          <Box display="flex" alignItems="center" marginLeft="20px">
            <StarIcon w={iconSize} height={iconSize} />
            <Text paddingLeft="6px" fontSize={14}>
              Test Name
            </Text>
          </Box>
        </Flex>
      </Flex>
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
