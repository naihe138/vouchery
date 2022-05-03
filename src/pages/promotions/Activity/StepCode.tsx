import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import ActivityHeader from '../components/ActivityHeader';

const StepCode: FC = () => {
  return (
    <>
      <ActivityHeader showButton />
      <Box padding="20px">StepCode</Box>
    </>
  );
};

export default StepCode;
