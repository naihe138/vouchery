import { Box, Center, Collapse, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { FC } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { ChevronRightIcon, StarIcon } from '@chakra-ui/icons';
import { TMenuItem } from './menuConfig';

type TMenuItemProps = {
  isChildren?: boolean;
  menu: TMenuItem;
  onClick: (item: TMenuItem, parentKey: string | undefined) => void;
  parentKey?: string;
  isParentSelect?: boolean;
};

const MenuItem: FC<TMenuItemProps> = ({ parentKey, menu, onClick, isParentSelect }) => {
  const navigate = useNavigate();
  const iconSize = 4;
  const itemColor = menu.isSelect ? '#0C2161' : '#738094';
  const itemFontWeight = menu.isSelect ? 'bold' : 'normal';
  const handleClick = () => {
    onClick(menu, parentKey);
  };

  function setItemBg(): string {
    let bgColor = '';
    if (parentKey) {
      if (!parentKey) {
        bgColor = '#F7FAFC';
      } else {
        bgColor = '#EEF2F6';
      }
    } else {
    }

    return bgColor;
  }

  return (
    <Flex
      alignItems="center"
      backgroundColor={
        parentKey
          ? menu.isSelect
            ? '#EEF2F6'
            : isParentSelect
            ? '#F7FAFC'
            : '#ffffff'
          : menu.isSelect
          ? '#F7FAFC'
          : '#ffffff'
      }
      width="240px"
      height="46px"
      paddingLeft={parentKey ? '40px' : '20px'}
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
