import { AddIcon } from '@chakra-ui/icons';
import { Box, ComponentWithAs, Flex, IconProps, Text } from '@chakra-ui/react';
import { FC, ReactElement } from 'react';

type TActive = {
  show: boolean;
  setShow: () => void;
  title: string;
  Icon?: ComponentWithAs<'svg', IconProps>;
};

const ActiveItem: FC<TActive> = (props) => {
  const { show, setShow, title, Icon } = props;

  return (
    <Flex
      bg={show ? 'cyan.800' : ''}
      width="150px"
      height="150px"
      flexDirection={'column'}
      alignItems="center"
      justifyContent="center"
      borderRadius="6px"
      borderWidth="1px"
      borderStyle="solid"
      borderColor={'gray.300'}
      marginRight="30px"
      _hover={{
        bg: 'yellow.400',
        '& svg': { display: 'none' },
        '& .desc': { display: 'none' },
        '& .desc1': { display: 'block' },
      }}
      onClick={setShow}
    >
      {Icon && <Icon w={35} h={35} color={show ? 'white' : 'gray.300'} />}

      <Text marginTop="10px" color={show ? 'white' : 'gray.500'} className="desc" userSelect={'none'} fontWeight="bold">
        {title}
      </Text>
      <Text marginTop="10px" color="white" className="desc1" display={'none'} userSelect={'none'}>
        {show ? '取消新增' + title : '新增' + title}
      </Text>
    </Flex>
  );
};

export default ActiveItem;
