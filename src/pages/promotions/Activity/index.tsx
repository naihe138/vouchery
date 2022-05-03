import { AddIcon, ArrowBackIcon, ChevronLeftIcon, PlusSquareIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { Outlet, useLocation, useRoutes } from 'react-router-dom';
import ActivityHeader from '../components/ActivityHeader';

const Activity: FC = () => {
  return <Outlet />;
};

export default Activity;
