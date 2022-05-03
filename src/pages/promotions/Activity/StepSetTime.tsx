import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import ActivityHeader from '../components/ActivityHeader';

const StepSetTime: FC = () => {
  return (
    <>
      <ActivityHeader showButton />
      <Box padding="20px">StepSetTime</Box>
    </>
  );
};

export default StepSetTime;
