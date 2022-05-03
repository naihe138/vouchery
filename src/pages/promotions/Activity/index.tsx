import { AddIcon, ArrowBackIcon, ChevronLeftIcon, PlusSquareIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useRoutes } from 'react-router-dom';
import ActivityHeader from '../components/ActivityHeader';

const Activity: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    setShowButton(location.pathname !== '/active');
  }, [location]);
  return (
    <>
      <Flex bg={'white'} height="90px" alignItems={'center'} justifyContent="space-between" padding="0 30px 0 20px">
        <Flex color={'blue.900'} alignItems={'center'}>
          <ArrowBackIcon
            boxSize={6}
            color="gray.400"
            onClick={() => {
              navigate(-1);
            }}
          />
          <PlusSquareIcon boxSize={6} marginLeft="10px" />
          <Text fontSize="xl" fontWeight={'bold'} marginLeft="4px">
            建立新的活动
          </Text>
        </Flex>
        {showButton ? (
          <Box>
            <Button variant="outline" colorScheme="teal" marginRight="10px">
              取消建立
            </Button>
            <Button colorScheme="teal" color={'white'} variant="solid">
              存储草稿
            </Button>
          </Box>
        ) : null}
      </Flex>
      <Box padding="20px">
        <Outlet />
      </Box>
    </>
  );
};

export default Activity;
