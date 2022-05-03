import { FC } from 'react';
import {
  AddIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpDownIcon,
  CalendarIcon,
  DragHandleIcon,
  PhoneIcon,
  SearchIcon,
  SunIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Checkbox,
  Flex,
  Select,
  ChakraProvider,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  CircularProgress,
  IconButton,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Button,
} from '@chakra-ui/react';
import {
  Pagination,
  usePagination,
  PaginationPage,
  PaginationNext,
  PaginationPrevious,
  PaginationPageGroup,
  PaginationContainer,
  PaginationSeparator,
} from '@ajna/pagination';
const TabPanelContent: FC = () => {
  const outerLimit = 2;
  const innerLimit = 2;
  const { currentPage, setCurrentPage, pagesCount, pages } = usePagination({
    total: 123,
    pagesCount: 6,
    limits: {
      outer: outerLimit,
      inner: innerLimit,
    },
    initialState: {
      pageSize: 10,
      isDisabled: false,
      currentPage: 1,
    },
  });

  // handlers
  const handlePageChange = (nextPage: number): void => {
    // -> request new data using the page number
    setCurrentPage(nextPage);
    console.log('request new data with ->', nextPage);
  };

  return (
    <Box>
      <Flex alignItems={'center'} justifyContent="space-between">
        <Flex alignItems="center" w={500}>
          <Checkbox marginRight={30}>全选</Checkbox>
          <Select placeholder="选择动作" flex={1} marginRight={30}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select placeholder="更改状态" flex={1} marginRight={30}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Flex>
        <Flex>
          <Pagination pagesCount={pagesCount} currentPage={currentPage} onPageChange={handlePageChange}>
            <PaginationContainer>
              <PaginationPrevious
                marginRight={'6px'}
                _hover={{
                  bg: 'gray.400',
                }}
                onClick={() => console.log('Im executing my own function along with Previous component functionality')}
              >
                <ArrowLeftIcon w={2.5} h={2.5} />
              </PaginationPrevious>
              <PaginationPageGroup>
                {pages.map((page: number) => (
                  <PaginationPage
                    key={`pagination_page_${page}`}
                    page={page}
                    w={10}
                    bg="gray.100"
                    onClick={() => console.log('Im executing my own function along with Page component functionality')}
                    fontSize="sm"
                    _hover={{
                      bg: 'gray.300',
                    }}
                    _current={{
                      bg: 'gray.300',
                      fontSize: 'sm',
                      w: 10,
                    }}
                  />
                ))}
              </PaginationPageGroup>
              <PaginationNext marginLeft={'6px'}>
                <ArrowRightIcon w={2.5} h={2.5} />
              </PaginationNext>
            </PaginationContainer>
          </Pagination>
        </Flex>
      </Flex>
      <TableContainer borderWidth={1} borderStyle="solid" borderColor="gray.200" borderRadius={6} marginTop={30}>
        <Table variant="simple">
          <Thead color="font.100">
            <Tr>
              <Th></Th>
              <Th></Th>
              <Th>活动名称</Th>
              <Th>状态</Th>
              <Th>
                <Flex alignItems="center">
                  建立时间
                  <ArrowUpDownIcon />
                </Flex>
              </Th>
              <Th>开始时间</Th>
              <Th>结束时间</Th>
              <Th>
                <Box textAlign="center">兑换情形</Box>
              </Th>
              <Th>
                <Box textAlign="center">预算金额</Box>
              </Th>
              <Th isNumeric>动作</Th>
            </Tr>
          </Thead>
          <Tbody color="font.300">
            <Tr>
              <Td>
                <Checkbox />
              </Td>
              <Td>
                <ArrowRightIcon w={2.5} h={2.5} />
              </Td>
              <Td>
                <Box>ID：100</Box>
                <Box>庆祝开幕50元折扣券</Box>
              </Td>
              <Td>
                <Box color="orange.300" fontWeight="bold">
                  进行中
                </Box>
              </Td>
              <Td>
                <Box>2021/12/23</Box>
                <Box>00:00</Box>
              </Td>
              <Td>
                <Box>2021/12/23</Box>
                <Box>00:00</Box>
              </Td>
              <Td>
                <Box>2021/12/23</Box>
                <Box>00:00</Box>
              </Td>
              <Td>
                <Flex flexDirection="column" justifyContent="center" alignItems="center">
                  <CircularProgress value={80} color="green.500" thickness="8px" />
                  <Box>12/20</Box>
                </Flex>
              </Td>
              <Td>
                <Flex flexDirection="column" justifyContent="center" alignItems="center">
                  <CircularProgress value={80} color="purple.300" size="80px" thickness="6px" />
                  <Box textAlign="center">12/20</Box>
                </Flex>
              </Td>
              <Td isNumeric>
                <Menu>
                  <MenuButton as={Button} rightIcon={<DragHandleIcon />}></MenuButton>
                  {/* <IconButton aria-label="Search database" icon={<DragHandleIcon />} /> */}
                  <MenuList>
                    <MenuItem>编辑</MenuItem>
                    <MenuItem>复制</MenuItem>
                    <MenuItem>生产新代码</MenuItem>
                    <MenuItem>删除</MenuItem>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TabPanelContent;
