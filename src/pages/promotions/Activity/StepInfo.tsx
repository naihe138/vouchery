import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import ActivityHeader from '../components/ActivityHeader';

const StepInfo: FC = () => {
  return (
    <>
      <ActivityHeader showButton />
      <Box padding="20px">StepInfo</Box>
    </>
  );
};

export default StepInfo;
