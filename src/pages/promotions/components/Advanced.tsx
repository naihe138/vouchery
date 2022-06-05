import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Box, Button, Collapse, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { FC, ReactElement } from 'react';
type IAdvanced = {
  children: ReactElement;
  title: string;
};
const Advanced: FC<IAdvanced> = ({ children, title }) => {
  const { isOpen, onToggle } = useDisclosure({
    isOpen: true,
  });
  return (
    <>
      <Flex
        bg="teal.500"
        height="60px"
        justifyContent="space-between"
        padding="0 20px"
        alignItems="center"
        onClick={onToggle}
      >
        <Text color="white" fontWeight="bold" userSelect="none">
          {title}
        </Text>

        {isOpen ? (
          <ChevronUpIcon w="30px" h="30px" color="white" />
        ) : (
          <ChevronDownIcon w="30px" h="30px" color="white" />
        )}
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        {children}
      </Collapse>
    </>
  );
};

export default Advanced;
