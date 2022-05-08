import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, ComponentWithAs, Flex, Grid, GridItem, IconProps, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { TagIcon } from '~/config/icon';

type TProps = {
  Icon: ComponentWithAs<'svg', IconProps>;
  title: string;
  describe: string;
  text: string;
  type: string;
};

const CreateActivityItem: FC<TProps> = (props) => {
  const { Icon, title, describe, text, type } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/active/info?type=${type}`);
  };
  return (
    <GridItem
      w="100%"
      h="450"
      bg={'white'}
      borderRadius={6}
      borderWidth="1px"
      borderStyle="solid"
      borderColor="gray.200"
      cursor="default"
      position="relative"
      _hover={{
        bg: 'yellow.400',
        '& .title': { color: 'white' },
        '& svg': { color: 'white' },
        '& .desc': { display: 'none' },
        '& .desc1': { display: 'block' },
      }}
      onClick={handleClick}
    >
      <Flex alignItems="center" justifyContent="center" width="100%" height="100%" flexDirection="column">
        <Icon w={35} h={35} color="cyan.900"></Icon>
        <Box className="title" color="font.100" fontWeight="bold" fontSize={24}>
          {title}
        </Box>
        <Box className="desc" fontSize={14} boxSizing="border-box" padding="0 26px" marginTop={10}>
          {describe}
        </Box>
        <Box
          className="desc1"
          display="none"
          color="white"
          fontSize={14}
          boxSizing="border-box"
          padding="0 26px"
          marginTop={10}
        >
          <Text fontWeight="bold">活動目的： </Text>
          {text}
        </Box>

        <Flex alignItems="center" color="white" position="absolute" right="26px" bottom="26px">
          我要建立 <ArrowForwardIcon />
        </Flex>
      </Flex>
    </GridItem>
  );
};

export default CreateActivityItem;
