import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import ActivityHeader from '../components/ActivityHeader';

const StepContent: FC = () => {
  return (
    <>
      <ActivityHeader showButton />
      <Box padding="20px">StepContent</Box>
    </>
  );
};

export default StepContent;
