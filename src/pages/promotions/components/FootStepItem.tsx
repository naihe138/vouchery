import { Box, Button, Flex, FormControl, FormErrorMessage, Input, Select, Text, Textarea } from '@chakra-ui/react';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

type IFootStepItemProps = {
  order: number;
  title: string;
  hasLine?: boolean;
  active?: boolean;
};

const FootStepItem: FC<IFootStepItemProps> = ({ order, title, hasLine, active }) => {
  return (
    <>
      {hasLine ? (
        <Box flex={1} opacity={0.5}>
          <Box width="100%" height="4px" bg="blue.900" marginTop="40px"></Box>
        </Box>
      ) : null}
      <Box width="100px" opacity={active ? 1 : 0.5}>
        <Box
          width="40px"
          height="40px"
          bg="blue.900"
          borderRadius="20px"
          textAlign="center"
          lineHeight="40px"
          color="white"
          margin="0 auto 6px auto"
        >
          {order}
        </Box>
        <Text color={'blue.900'} textAlign="center">
          {title}
        </Text>
      </Box>
    </>
  );
};

export default FootStepItem;
