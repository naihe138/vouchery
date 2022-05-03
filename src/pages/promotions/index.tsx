import { AddIcon, CalendarIcon, PhoneIcon, SearchIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import TabPanelContent from './components/TabPanelContent';

const Promotions: FC = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Flex bg={'white'} height="90px" alignItems={'center'} justifyContent="space-between" padding="0 30px 0 20px">
        <Flex color={'blue.900'} alignItems={'center'}>
          <SunIcon boxSize={6} />
          <Text fontSize="xl" fontWeight={'bold'} marginLeft="10px">
            促销活动
          </Text>
        </Flex>
        <Button
          leftIcon={<AddIcon />}
          colorScheme="yellow"
          color={'white'}
          variant="solid"
          onClick={() => {
            navigate('/active');
          }}
        >
          建立新的活动
        </Button>
      </Flex>
      <Grid templateColumns="repeat(12, 1fr)" gap={4} bg={'white'} margin="10px 20px" padding={'3'} borderRadius="10">
        <GridItem colSpan={2} h="10">
          <Select>
            <option value="option1">全部活动类型</option>
            <option value="option2">折价券</option>
            <option value="option3">赠品券</option>
            <option value="option3">礼品卡</option>
            <option value="option3">会员礼</option>
          </Select>
        </GridItem>
        <GridItem colSpan={2} h="10">
          <Select>
            <option value="option1">全部管道</option>
            <option value="option2">全部管道 2</option>
            <option value="option3">全部管道 3</option>
          </Select>
        </GridItem>
        <GridItem colStart={5} colEnd={10} h="10">
          <Flex alignItems={'center'} justifyContent="flex-end">
            <Box width={'200px'} color="font.100" textAlign={'right'} paddingRight="10px">
              开始时间
            </Box>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<CalendarIcon color="gray.300" />} />
              <Input type="tel" placeholder="开始时间" />
            </InputGroup>
            <Box>-</Box>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<CalendarIcon color="gray.300" />} />
              <Input type="tel" placeholder="结束时间" />
            </InputGroup>
          </Flex>
        </GridItem>
        <GridItem colStart={10} colEnd={13} h="10">
          <InputGroup>
            <Input placeholder="活动名称/ID" />
            <InputRightElement children={<SearchIcon color="gray.300" />} />
          </InputGroup>
        </GridItem>
      </Grid>
      <Box bg={'white'} margin="10px 20px" borderRadius="10">
        <Tabs isManual variant="enclosed" size="sm">
          <TabList bg={'#F7FAFC'} color="gray.500">
            <Tab _selected={{ color: 'blue.900', bg: 'white', fontWeight: 'bold' }} padding="12px 30px">
              全部(99+)
            </Tab>
            <Tab _selected={{ color: 'blue.900', bg: 'white', fontWeight: 'bold' }}>进行中(92)</Tab>
            <Tab _selected={{ color: 'blue.900', bg: 'white', fontWeight: 'bold' }}>暂停中(2)</Tab>
            <Tab _selected={{ color: 'blue.900', bg: 'white', fontWeight: 'bold' }}>预定(3)</Tab>
            <Tab _selected={{ color: 'blue.900', bg: 'white', fontWeight: 'bold' }}>已结束(33)</Tab>
            <Tab _selected={{ color: 'blue.900', bg: 'white', fontWeight: 'bold' }}>草稿(45)</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <TabPanelContent />
            </TabPanel>
            <TabPanel>
              <TabPanelContent />
            </TabPanel>
            <TabPanel>
              <TabPanelContent />
            </TabPanel>
            <TabPanel>
              <TabPanelContent />
            </TabPanel>
            <TabPanel>
              <TabPanelContent />
            </TabPanel>
            <TabPanel>
              <TabPanelContent />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default Promotions;
