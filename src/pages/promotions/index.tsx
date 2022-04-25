import { AddIcon, SearchIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Input,
  InputGroup,
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

const Promotions: FC = () => (
  <Box>
    <Flex bg={'white'} height="100px" alignItems={'center'} justifyContent="space-between" padding="0 30px 0 20px">
      <Flex color={'blue.900'} alignItems={'center'}>
        <SunIcon boxSize={6} />
        <Text fontSize="xl" fontWeight={'bold'} marginLeft="10px">
          促销活动
        </Text>
      </Flex>
      <Button leftIcon={<AddIcon />} colorScheme="yellow" color={'white'} variant="solid">
        建立新的活动
      </Button>
    </Flex>
    <Grid templateColumns="repeat(6, 1fr)" gap={4} bg={'white'} margin="10px 20px" padding={'3'} borderRadius="10">
      <GridItem colSpan={1} h="10">
        <Select placeholder="全部活动类型">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </GridItem>
      <GridItem colSpan={1} h="10">
        <Select placeholder="全部管道">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </GridItem>
      <GridItem colStart={3} colEnd={5} h="10" />
      <GridItem colStart={5} colEnd={7} h="10">
        <InputGroup>
          <Input placeholder="活动名称/ID" />
          <InputRightElement children={<SearchIcon />} />
        </InputGroup>
      </GridItem>
    </Grid>
    <Box bg={'white'} margin="10px 20px" borderRadius="10" overflow={'hidden'}>
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
            <p>全部!</p>
          </TabPanel>
          <TabPanel>
            <p>进行中!</p>
          </TabPanel>
          <TabPanel>
            <p>暂停中!</p>
          </TabPanel>
          <TabPanel>
            <p>预定!</p>
          </TabPanel>
          <TabPanel>
            <p>已结束!</p>
          </TabPanel>
          <TabPanel>
            <p>草稿!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  </Box>
);

export default Promotions;
