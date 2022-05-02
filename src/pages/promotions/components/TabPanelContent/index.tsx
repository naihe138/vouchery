import { FC } from 'react';
import { AddIcon, ArrowLeftIcon, ArrowRightIcon, CalendarIcon, PhoneIcon, SearchIcon, SunIcon } from '@chakra-ui/icons';
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
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TabPanelContent;
