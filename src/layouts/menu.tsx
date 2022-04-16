import { Box, Center, Collapse, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { menuConfig, TMenuItem } from './menuConfig';
import MenuItem from './menuItem';
const Menu: FC = () => {
  const navigate = useNavigate();
  const [menuOptions, setMenuOptions] = useState(menuConfig);
  const clickMene = (item: TMenuItem, parentKey: string | undefined) => {
    setSelect(menuOptions);
    if (parentKey) {
      const parentMenu = menuOptions.find((menu) => menu.key === parentKey);
      if (parentMenu && parentMenu.children) {
        parentMenu.isSelect = true;
      }
    }
    if (!item.url && item.children && item.children.length > 0) {
      item.isOpen = !item.isOpen;
    }
    item.isSelect = true;

    setMenuOptions([...menuOptions]);
    if (item.url) {
      navigate(item.url);
    }
  };
  function setSelect(menu: TMenuItem[]) {
    menu.forEach((item) => {
      item.isSelect = false;
      if (item.children && item.children.length > 0) {
        setSelect(item.children);
      }
    });
  }
  return (
    <Box
      w={240}
      bg="#ffffff"
      borderRight="1px solid #cccccc"
      boxSizing="border-box"
      overflowX="hidden"
      overflowY="auto"
      paddingTop="20px"
      userSelect="none"
    >
      {menuOptions.map((menu) => (
        <Box key={menu.key}>
          <MenuItem menu={menu} onClick={clickMene} />
          {menu.children && menu.children.length > 0 ? (
            <Collapse in={menu.isOpen} animateOpacity>
              {menu.children.map((item) => (
                <MenuItem
                  menu={item}
                  key={item.key}
                  parentKey={menu.key}
                  isParentSelect={menu.isSelect}
                  onClick={clickMene}
                />
              ))}
            </Collapse>
          ) : null}
        </Box>
      ))}
    </Box>
  );
};

export default Menu;
