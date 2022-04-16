import { Box, Center, Collapse, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { FC } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { ChevronRightIcon, StarIcon } from '@chakra-ui/icons';
import { TMenuItem } from './menuConfig';

type TMenuItemProps = {
  isChildren?: boolean;
  menu: TMenuItem;
};

const MenuItem: FC<TMenuItemProps> = ({ isChildren, menu }) => {
  const navigate = useNavigate();
  const iconSize = 4;
  const itemColor = menu.isSelect ? '#0C2161' : '#738094';
  const itemFontWeight = menu.isSelect ? 'bold' : 'normal';
  const handleClick = () => {};
  return (
    <Flex
      alignItems="center"
      bg={menu.isSelect ? (isChildren ? '#F7FAFC' : '#EEF2F6') : '#ffffff'}
      width="240px"
      height="46px"
      paddingLeft={isChildren ? '40px' : '20px'}
      boxSizing="border-box"
      cursor="default"
      onClick={handleClick}
    >
      <Box flex={1} display="flex" alignItems="center">
        <menu.icon w={iconSize} h={iconSize} color={itemColor} />
        <Text paddingLeft="10px" fontSize={14} color={itemColor} fontWeight={itemFontWeight}>
          {menu.title}
        </Text>
      </Box>
      {menu.children && menu.children.length > 0 ? (
        <Box width="30px">
          <ChevronRightIcon w={iconSize} h={iconSize}></ChevronRightIcon>
        </Box>
      ) : null}
    </Flex>
  );
};

export default MenuItem;
