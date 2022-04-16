import { Box, Center, Collapse, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { menuConfig } from './menuConfig';
import MenuItem from './menuItem';
const Menu: FC = () => {
  const navigate = useNavigate();
  const [menuOptions, setMenuOptions] = useState(menuConfig);
  return (
    <Box
      w={240}
      bg="#ffffff"
      borderRight="1px solid #cccccc"
      boxSizing="border-box"
      overflowX="hidden"
      overflowY="auto"
      paddingTop="20px"
    >
      {menuOptions.map((menu) => (
        <Box key={menu.key}>
          <MenuItem menu={menu} />
          {menu.children && menu.children.length > 0 ? (
            <Collapse in={menu.isOpen} animateOpacity>
              {menu.children.map((item) => (
                <MenuItem isChildren menu={item} key={item.key} />
              ))}
            </Collapse>
          ) : null}
        </Box>
      ))}
    </Box>
  );
};

export default Menu;
