import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  Grid,
  GridItem,
  HStack,
  Icon,
  Input,
  Radio,
  RadioGroup,
  Select,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  useBoolean,
} from '@chakra-ui/react';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  DollarIcon,
  DiscountIcon,
  PercentIcon,
  ExchangesPersonIcon,
  MiniConsumptionIcon,
  OrderContentConditionsIcon,
  CustomerConditionsIcon,
} from '~/config/icon';
import Advanced from '../components/Advanced';
import FootStep from '../components/FootStep';
import ActiveItem from './ActiveItem';

type IWeek = {
  select: boolean;
  title: string;
};
const weekText: string[] = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
const weeks: IWeek[] = weekText.map((text) => ({
  select: false,
  title: text,
}));
const StepContent: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm();
  const [endValue, setEndValue] = useState('endTime');
  const [maxDiscount, setMaxDiscount] = useState('unlimited');
  const [totalBudget, setTotalBudget] = useState('unlimited');
  const [exchangeCount, setExchangeCount] = useState('unlimited');
  const [discountProduct, setDiscountProduct] = useState('any');

  const [singleMaxDiscount, setSingleMaxDiscount] = useState('unlimited');
  const [prevDiscount, setPrevDiscount] = useState('all');

  const [weeksValue, setWeeksValue] = useState(weeks);
  const [discount, setDiscount] = useState(false);
  const [discountPercent, setDiscountPercent] = useState(false);
  const [productDiscount, setProductDiscount] = useState(false);

  const [exchangesPerson, setExchangesPerson] = useBoolean(false);
  const [miniConsumption, setMiniConsumption] = useBoolean(false);
  const [orderContentConditions, setOrderContentConditions] = useBoolean(false);
  const [customerConditions, setCustomerConditions] = useBoolean(false);

  const navigate = useNavigate();
  const location = useLocation();
  function onSubmit(values: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve(1);
      }, 3000);
    });
  }
  const handlePrevious = () => {
    console.log('handlePrevious');
  };
  const handleNext = () => {
    navigate(`/active/code${location.search}`);
  };
  const handleWeeks = (index: number) => {
    weeksValue[index].select = !weeksValue[index].select;
    setWeeksValue([...weeksValue]);
  };
  return (
    <>
      <Box padding="40px">
        <Text fontWeight={'bold'} fontSize={'2xl'}>
          3. 活動內容
        </Text>
        <Text marginTop="30px" marginBottom="10px" color="font.100" fontWeight="bold">
          活動規則
        </Text>
        <Box
          bg={'white'}
          padding="40px"
          borderRadius="8px"
          borderColor="gray.200"
          borderWidth="1px"
          borderStyle="solid"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid templateColumns="repeat(1, 1fr)" gap="20px">
              <GridItem>
                <FormControl>
                  <Flex>
                    <Box width="200px" color="font.100" textAlign="right" marginRight="10px">
                      *動總預算
                    </Box>
                    <Box flex={1}>
                      <RadioGroup value={totalBudget} onChange={setTotalBudget}>
                        <Box>
                          <Radio value="unlimited">無限制</Radio>
                        </Box>
                        <Box marginTop="20px">
                          <Radio value="limited">預算限制</Radio>
                        </Box>
                      </RadioGroup>
                    </Box>
                  </Flex>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <Flex>
                    <Box width="200px" color="font.100" textAlign="right" marginRight="10px">
                      *活動總兌換次數
                    </Box>
                    <Box flex={1}>
                      <RadioGroup value={exchangeCount} onChange={setExchangeCount}>
                        <Box>
                          <Radio value="unlimited">無限制</Radio>
                        </Box>
                        <Box marginTop="20px">
                          <Radio value="limited">預算限制</Radio>
                        </Box>
                      </RadioGroup>
                    </Box>
                  </Flex>
                </FormControl>
              </GridItem>
            </Grid>
          </form>
        </Box>
        <Text marginTop="30px" marginBottom="10px" color="font.100" fontWeight="bold">
          *選擇折扣項目
        </Text>
        <Box
          bg={'white'}
          padding="40px"
          borderTopLeftRadius="8px"
          borderTopRightRadius="8px"
          borderColor="gray.200"
          borderWidth="1px"
          borderStyle="solid"
        >
          <Flex>
            <ActiveItem
              show={discount}
              setShow={() => {
                setDiscountPercent(false);
                setProductDiscount(false);
                setDiscount(!discount);
              }}
              title="折扣金额"
              Icon={DollarIcon}
            />
            <ActiveItem
              show={discountPercent}
              setShow={() => {
                setDiscountPercent(!discountPercent);
                setDiscount(false);
                setProductDiscount(false);
              }}
              title="折扣％數"
              Icon={PercentIcon}
            />
            <ActiveItem
              show={productDiscount}
              setShow={() => {
                setProductDiscount(!productDiscount);
                setDiscount(false);
                setDiscountPercent(false);
              }}
              title="產品折扣"
              Icon={DiscountIcon}
            />
          </Flex>
          {/* 折扣金額 */}
          {discount ? (
            <Box>
              <Flex alignItems={'center'} marginTop="30px">
                <Box color="font.100" textAlign="left" marginRight="10px">
                  *折扣金額 NT$
                </Box>
                <Box flex={1}>
                  <Input
                    w="360px"
                    {...register('discountNumber', {
                      required: '请填写折扣金額',
                    })}
                  />
                </Box>
              </Flex>
            </Box>
          ) : null}

          {/* 折扣％數 */}
          {discountPercent ? (
            <Box>
              <Flex alignItems={'center'} marginTop="30px">
                <Box color="font.100" w="150px" textAlign={'right'} marginRight="10px">
                  *折扣金額 NT$
                </Box>
                <Box>
                  <Input
                    w="360px"
                    {...register('discountPercentNumber', {
                      required: '请填写折扣金額',
                    })}
                  />
                </Box>
                <Text color={'font.100'} paddingLeft="6px">
                  ％
                </Text>
              </Flex>
              <Flex marginTop="30px">
                <Box color="font.100" w="150px" textAlign={'right'} marginRight="10px">
                  *單筆折扣最高金額
                </Box>
                <Box>
                  <RadioGroup value={maxDiscount} onChange={setMaxDiscount}>
                    <Box>
                      <Radio value="unlimited">無限制</Radio>
                    </Box>
                    <Box marginTop="20px">
                      <Radio value="limited">限制最高折扣金額</Radio>
                    </Box>
                    {maxDiscount === 'limited' ? (
                      <Flex alignItems={'center'} marginTop="30px">
                        <Box color="font.100" marginRight="10px">
                          NT$
                        </Box>
                        <Box>
                          <Input w="300px" />
                        </Box>
                      </Flex>
                    ) : null}
                  </RadioGroup>
                </Box>
              </Flex>
            </Box>
          ) : null}

          {/* 产品折扣 */}
          {productDiscount ? (
            <Box>
              <Flex marginTop="30px">
                <Box color="font.100" w="150px" textAlign={'right'} marginRight="10px">
                  *折扣的產品 <br />
                  (選擇一項)
                </Box>
                <RadioGroup value={discountProduct} onChange={setDiscountProduct}>
                  <Flex>
                    <Box>
                      <Radio value="any">任何產品</Radio>
                    </Box>
                    <Box marginLeft={'100px'}>
                      <Box>
                        <Radio value="specify">指定產品</Radio>
                        <Box marginLeft="30px">
                          <Input type="text" size={'sm'} placeholder="指定產品名称" marginTop="10px" />
                          <Button
                            size={'xs'}
                            leftIcon={<AddIcon />}
                            marginTop="10px"
                            colorScheme="yellow"
                            variant="solid"
                            color={'white'}
                          >
                            新增产品
                          </Button>
                        </Box>
                      </Box>
                      <Box marginTop="20px">
                        <Radio value="exclude">不包含的產品</Radio>
                        <Box marginLeft="30px">
                          <Input type="text" size={'sm'} placeholder="不包含的產品名称" marginTop="10px" />
                          <Button
                            size={'xs'}
                            leftIcon={<AddIcon />}
                            marginTop="10px"
                            colorScheme="yellow"
                            variant="solid"
                            color={'white'}
                          >
                            新增产品
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Flex>
                </RadioGroup>
              </Flex>

              <Flex alignItems={'center'} marginTop="30px">
                <Box color="font.100" w="150px" textAlign={'right'} marginRight="10px">
                  *折扣產品％數
                </Box>
                <Box>
                  <Input
                    w="360px"
                    {...register('discountProductNumber', {
                      required: '请填写折扣金額',
                    })}
                  />
                </Box>
              </Flex>
              <Flex marginTop="30px">
                <Box color="font.100" w="150px" textAlign={'right'} marginRight="10px">
                  *單筆折扣最高金額
                </Box>
                <Box>
                  <RadioGroup value={singleMaxDiscount} onChange={setSingleMaxDiscount}>
                    <Box>
                      <Radio value="unlimited">無限制</Radio>
                    </Box>
                    <Box marginTop="20px">
                      <Radio value="limited">限制最高折扣金額</Radio>
                    </Box>
                    {singleMaxDiscount === 'limited' ? (
                      <Flex alignItems={'center'} marginTop="20px">
                        <Box color="font.100" marginRight="10px">
                          NT$
                        </Box>
                        <Box>
                          <Input w="300px" />
                        </Box>
                      </Flex>
                    ) : null}
                  </RadioGroup>
                </Box>
              </Flex>
              <Flex marginTop="30px">
                <Box color="font.100" w="150px" textAlign={'right'} marginRight="10px">
                  *欲折扣的產品
                </Box>
                <Box>
                  <RadioGroup value={prevDiscount} onChange={setPrevDiscount}>
                    <Box>
                      <Radio value="all">所有符合條件的產品</Radio>
                    </Box>
                    <Box marginTop="20px">
                      <Radio value="low">符合折扣的產品中價格最低者(一項產品)</Radio>
                    </Box>
                    <Box marginTop="20px">
                      <Radio value="height">符合折扣的產品價格最高者(一項產品)</Radio>
                    </Box>
                  </RadioGroup>
                </Box>
              </Flex>
            </Box>
          ) : null}
        </Box>
        <Text marginTop="30px" marginBottom="10px" color="font.100" fontWeight="bold">
          进阶设定
        </Text>
        <Box
          bg={'white'}
          padding="40px"
          borderTopLeftRadius="8px"
          borderTopRightRadius="8px"
          borderColor="gray.200"
          borderWidth="1px"
          borderStyle="solid"
        >
          <Flex>
            <ActiveItem
              show={exchangesPerson}
              setShow={setExchangesPerson.toggle}
              title="每人兌換次數"
              Icon={ExchangesPersonIcon}
            />
            <ActiveItem
              show={miniConsumption}
              setShow={setMiniConsumption.toggle}
              title="最低消費"
              Icon={MiniConsumptionIcon}
            />
            <ActiveItem
              show={orderContentConditions}
              setShow={setOrderContentConditions.toggle}
              title="訂單內容條件"
              Icon={OrderContentConditionsIcon}
            />
            <ActiveItem
              show={customerConditions}
              setShow={setCustomerConditions.toggle}
              title="客戶條件"
              Icon={CustomerConditionsIcon}
            />
          </Flex>
        </Box>
        {/* 每人兌換次數 */}
        {exchangesPerson ? (
          <Box>
            <Advanced title="每人兌換次數">
              <Box
                bg={'white'}
                padding="40px"
                borderBottomLeftRadius="8px"
                borderBottomRightRadius="8px"
                borderColor="gray.200"
                borderWidth="1px"
                borderStyle="solid"
              >
                <Text color="font.100">請設定每人(每個ID)可兌換優惠代碼的次數限制，無設定此項目即為無限制次數</Text>
                <Flex alignItems={'center'} marginTop="30px">
                  <Input type="text" w={'200px'} />
                  <Text marginLeft={'10px'} color={'font.100'}>
                    次
                  </Text>
                </Flex>
              </Box>
            </Advanced>
          </Box>
        ) : null}

        {/* 最低消費 */}
        {miniConsumption ? (
          <Box>
            <Advanced title="最低消費">
              <Box
                bg={'white'}
                padding="40px"
                borderBottomLeftRadius="8px"
                borderBottomRightRadius="8px"
                borderColor="gray.200"
                borderWidth="1px"
                borderStyle="solid"
              >
                <Text color="font.100">
                  請設定每筆訂單的最低消費額。訂單金額需大於或等於設定之最低消費額才能夠於結帳時使用代碼。
                </Text>

                <Flex alignItems={'center'} marginTop="30px">
                  <Text marginRight={'10px'} color={'font.100'}>
                    NT$
                  </Text>
                  <Input type="text" w={'200px'} />
                </Flex>
              </Box>
            </Advanced>
          </Box>
        ) : null}

        {/* 訂單內容條件 */}
        {orderContentConditions ? (
          <Box>
            <Advanced title="訂單內容條件">
              <Box
                bg={'white'}
                padding="40px"
                borderBottomLeftRadius="8px"
                borderBottomRightRadius="8px"
                borderColor="gray.200"
                borderWidth="1px"
                borderStyle="solid"
              >
                <Text color="font.100">請添加與設定訂單內容條件（可複選）</Text>

                <Box marginTop={'40px'}>
                  <Checkbox>訂單內容包含：</Checkbox>
                  <HStack paddingLeft={'24px'} marginTop={'10px'} spacing="1px">
                    <Box w={'150px'} color={'font.100'}>
                      產品
                    </Box>
                    <Box w={'250px'}></Box>
                    <Box w={'200px'} color={'font.100'}>
                      產品規格
                    </Box>
                    <Box w={'150px'} color={'font.100'}>
                      狀態
                    </Box>
                    <Box w={'150px'} color={'font.100'}>
                      数量
                    </Box>
                    <Box w={'40px'} color={'font.100'}></Box>
                  </HStack>
                  <HStack paddingLeft={'24px'} marginBottom="10px" spacing="1px">
                    <Box w={'150px'}>
                      <Select placeholder="請選擇產品名稱" size={'sm'}>
                        <option value="option1">產品名稱</option>
                        <option value="option2">產品ID</option>
                        <option value="option3">產品主貨號</option>
                      </Select>
                    </Box>
                    <Box w={'250px'}>
                      <Input placeholder="請輸入" size="sm" />
                    </Box>
                    <Box w={'200px'}>
                      <Select placeholder="請選擇產品規格" size={'sm'}>
                        <option value="option1">不限</option>
                        <option value="option2">小杯</option>
                        <option value="option3">中杯</option>
                      </Select>
                    </Box>
                    <Box w={'150px'}>
                      <Select placeholder="請選擇產品狀態" size={'sm'}>
                        <option value="option1">數量不限</option>
                        <option value="option2">等於</option>
                        <option value="option3">小於</option>
                        <option value="option3">大於等於</option>
                      </Select>
                    </Box>
                    <Box w={'150px'}>
                      <Input placeholder="請輸入" size="sm" />
                    </Box>
                    <Box w={'40px'} color={'font.100'}>
                      <Icon as={CloseIcon} marginLeft="10px" />
                    </Box>
                  </HStack>
                  <HStack paddingLeft={'24px'} spacing="1px">
                    <Box w={'150px'}>
                      <Button leftIcon={<AddIcon />} colorScheme="yellow" variant="solid" size={'xs'} color={'white'}>
                        新增產品
                      </Button>
                    </Box>
                  </HStack>

                  {/* 产品标签 */}
                  <HStack paddingLeft={'24px'} marginTop={'40px'} spacing="1px">
                    <Box w={'150px'} color={'font.100'}>
                      產品標籤
                    </Box>
                  </HStack>
                  <HStack spacing="6px" paddingLeft={'24px'}>
                    <Tag borderRadius="full" variant="solid" colorScheme="gray">
                      <TagLabel>10月特價品</TagLabel>
                      <TagCloseButton />
                    </Tag>
                    <Tag borderRadius="full" variant="solid" colorScheme="gray">
                      <TagLabel>10月特價品</TagLabel>
                      <TagCloseButton />
                    </Tag>
                  </HStack>
                  <HStack paddingLeft={'24px'} spacing="1px" marginTop={'10px'}>
                    <Box w={'150px'}>
                      <Button leftIcon={<AddIcon />} colorScheme="yellow" variant="solid" size={'xs'} color={'white'}>
                        新增產品標籤
                      </Button>
                    </Box>
                  </HStack>
                </Box>

                <Box marginTop={'100px'}>
                  <Checkbox>訂單內容不包含：</Checkbox>
                  <HStack paddingLeft={'24px'} marginTop={'10px'} spacing="1px">
                    <Box w={'150px'} color={'font.100'}>
                      產品
                    </Box>
                    <Box w={'250px'}></Box>
                    <Box w={'200px'} color={'font.100'}>
                      產品規格
                    </Box>
                    <Box w={'150px'} color={'font.100'}>
                      狀態
                    </Box>
                    <Box w={'150px'} color={'font.100'}>
                      数量
                    </Box>
                    <Box w={'40px'} color={'font.100'}></Box>
                  </HStack>
                  <HStack paddingLeft={'24px'} marginBottom="10px" spacing="1px">
                    <Box w={'150px'}>
                      <Select placeholder="請選擇產品名稱" size={'sm'}>
                        <option value="option1">產品名稱</option>
                        <option value="option2">產品ID</option>
                        <option value="option3">產品主貨號</option>
                      </Select>
                    </Box>
                    <Box w={'250px'}>
                      <Input placeholder="請輸入" size="sm" />
                    </Box>
                    <Box w={'200px'}>
                      <Select placeholder="請選擇產品規格" size={'sm'}>
                        <option value="option1">不限</option>
                        <option value="option2">小杯</option>
                        <option value="option3">中杯</option>
                      </Select>
                    </Box>
                    <Box w={'150px'}>
                      <Select placeholder="請選擇產品狀態" size={'sm'}>
                        <option value="option1">數量不限</option>
                        <option value="option2">等於</option>
                        <option value="option3">小於</option>
                        <option value="option3">大於等於</option>
                      </Select>
                    </Box>
                    <Box w={'150px'}>
                      <Input placeholder="請輸入" size="sm" />
                    </Box>
                    <Box w={'40px'} color={'font.100'}>
                      <Icon as={CloseIcon} marginLeft="10px" />
                    </Box>
                  </HStack>
                  <HStack paddingLeft={'24px'} spacing="1px">
                    <Box w={'150px'}>
                      <Button leftIcon={<AddIcon />} colorScheme="yellow" variant="solid" size={'xs'} color={'white'}>
                        新增產品
                      </Button>
                    </Box>
                  </HStack>

                  {/* 产品标签 */}

                  <HStack paddingLeft={'24px'} marginTop={'40px'} spacing="1px">
                    <Box w={'150px'} color={'font.100'}>
                      產品標籤
                    </Box>
                  </HStack>
                  <HStack spacing="6px" paddingLeft={'24px'}>
                    <Tag borderRadius="full" variant="solid" colorScheme="gray">
                      <TagLabel>10月特價品</TagLabel>
                      <TagCloseButton />
                    </Tag>
                    <Tag borderRadius="full" variant="solid" colorScheme="gray">
                      <TagLabel>10月特價品</TagLabel>
                      <TagCloseButton />
                    </Tag>
                  </HStack>
                  <HStack paddingLeft={'24px'} spacing="1px" marginTop={'10px'}>
                    <Box w={'150px'}>
                      <Button leftIcon={<AddIcon />} colorScheme="yellow" variant="solid" size={'xs'} color={'white'}>
                        新增產品標籤
                      </Button>
                    </Box>
                  </HStack>
                </Box>
              </Box>
            </Advanced>
          </Box>
        ) : null}

        {/* 客戶條件 */}
        {customerConditions ? (
          <Box>
            <Advanced title="客戶條件">
              <Box
                bg={'white'}
                padding="40px"
                borderBottomLeftRadius="8px"
                borderBottomRightRadius="8px"
                borderColor="gray.200"
                borderWidth="1px"
                borderStyle="solid"
              >
                <Text color="font.100">請添加與設定可兌換此代碼的客戶條件（可複選）</Text>

                <Box marginTop={'40px'}>
                  <Checkbox>客戶包含：</Checkbox>
                  {/* 产品标签 */}
                  <HStack paddingLeft={'24px'} marginTop={'10px'} spacing="1px">
                    <Box w={'150px'} color={'font.100'}>
                      產品標籤
                    </Box>
                  </HStack>
                  <HStack spacing="6px" paddingLeft={'24px'}>
                    <Tag borderRadius="full" variant="solid" colorScheme="gray">
                      <TagLabel>10月特價品</TagLabel>
                      <TagCloseButton />
                    </Tag>
                    <Tag borderRadius="full" variant="solid" colorScheme="gray">
                      <TagLabel>10月特價品</TagLabel>
                      <TagCloseButton />
                    </Tag>
                  </HStack>
                  <HStack paddingLeft={'24px'} spacing="1px" marginTop={'10px'}>
                    <Box w={'150px'}>
                      <Button leftIcon={<AddIcon />} colorScheme="yellow" variant="solid" size={'xs'} color={'white'}>
                        新增產品標籤
                      </Button>
                    </Box>
                  </HStack>
                </Box>

                <Box marginTop={'50px'}>
                  <Checkbox>客戶不包含：</Checkbox>
                  {/* 产品标签 */}
                  <HStack paddingLeft={'24px'} marginTop={'10px'} spacing="1px">
                    <Box w={'150px'} color={'font.100'}>
                      產品標籤
                    </Box>
                  </HStack>
                  <HStack spacing="6px" paddingLeft={'24px'}>
                    <Tag borderRadius="full" variant="solid" colorScheme="gray">
                      <TagLabel>10月特價品</TagLabel>
                      <TagCloseButton />
                    </Tag>
                    <Tag borderRadius="full" variant="solid" colorScheme="gray">
                      <TagLabel>10月特價品</TagLabel>
                      <TagCloseButton />
                    </Tag>
                  </HStack>
                  <HStack paddingLeft={'24px'} spacing="1px" marginTop={'10px'}>
                    <Box w={'150px'}>
                      <Button leftIcon={<AddIcon />} colorScheme="yellow" variant="solid" size={'xs'} color={'white'}>
                        新增產品標籤
                      </Button>
                    </Box>
                  </HStack>
                </Box>
              </Box>
            </Advanced>
          </Box>
        ) : null}
      </Box>

      <FootStep current={3} previous={handlePrevious} next={handleNext} />
    </>
  );
};

export default StepContent;
