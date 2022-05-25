import { AddIcon, CalendarIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  Grid,
  GridItem,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Radio,
  RadioGroup,
  Select,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { SingleDatePicker } from 'react-dates';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import Advanced from '../components/Advanced';
import FootStep from '../components/FootStep';

type IWeek = {
  select: boolean;
  title: string;
};
const weekText: string[] = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
const weeks: IWeek[] = weekText.map((text) => ({
  select: false,
  title: text,
}));
const StepSetTime: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm();
  const [startValue, setStartValue] = useState('startTime');
  const [endValue, setEndValue] = useState('endTime');
  const [weeksValue, setWeeksValue] = useState(weeks);
  const [addAdvanced, setAdvanced] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [focus, setFocus] = useState(false);
  const [endTime, setEndTime] = useState(null);
  const [endFocus, setEndFocus] = useState(false);
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
    navigate(`/active/content${location.search}`);
  };
  const handleWeeks = (index: number) => {
    weeksValue[index].select = !weeksValue[index].select;
    setWeeksValue([...weeksValue]);
  };
  const handleAddAdvanced = () => {
    setAdvanced(!addAdvanced);
  };
  return (
    <>
      <Box padding="40px">
        <Text fontWeight={'bold'} fontSize={'2xl'}>
          2. 时间设定
        </Text>
        <Box
          bg={'white'}
          padding="40px"
          borderRadius="8px"
          borderColor="gray.200"
          borderWidth="1px"
          borderStyle="solid"
          marginTop="30px"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid templateColumns="repeat(2, 1fr)" gap="20px">
              <GridItem>
                <FormControl>
                  <Flex>
                    <Box width="200px" color="font.100" textAlign="right" marginRight="10px">
                      *開始時間
                    </Box>
                    <Box flex={1}>
                      <RadioGroup value={startValue} onChange={setStartValue}>
                        <Box>
                          <Radio value="startTime">建立完成後即開始</Radio>
                        </Box>
                        <Box marginTop="20px">
                          <Radio value="setStartTime">預定時程</Radio>
                        </Box>
                        <Box marginTop="20px" display={startValue === 'setStartTime' ? 'block' : 'none'}>
                          {/* <InputGroup>
                            <InputLeftElement pointerEvents="none" children={<CalendarIcon color="gray.300" />} />
                            <Input type="tel" placeholder="开始时间" />
                          </InputGroup> */}
                          <SingleDatePicker
                            id="startTime"
                            date={startTime} // momentPropTypes.momentObj or null
                            onDateChange={(date: any) => setStartTime(date)} // PropTypes.func.isRequired
                            focused={focus} // PropTypes.bool
                            onFocusChange={({ focused }: { focused: any }) => setFocus(focused)} // PropTypes.func.isRequired
                            numberOfMonths={1}
                            placeholder="預定時程"
                            displayFormat="YYYY-MM-DD"
                            monthFormat="YYYY[年]MM[月]"
                            showClearDate={true}
                            isOutsideRange={() => false}
                            phrases={{ closeDatePicker: '关闭', clearDate: '清除日期' }}
                          />
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
                      *結束時間
                    </Box>
                    <Box flex={1}>
                      <RadioGroup value={endValue} onChange={setEndValue}>
                        <Box>
                          <Radio value="endTime">無期限</Radio>
                        </Box>
                        <Box marginTop="20px">
                          <Radio value="setEndTime">設定期限</Radio>
                        </Box>
                        <Box marginTop="20px" width="80%" display={endValue === 'setEndTime' ? 'block' : 'none'}>
                          {/* <InputGroup>
                            <InputLeftElement pointerEvents="none" children={<CalendarIcon color="gray.300" />} />
                            <Input type="tel" placeholder="结束时间" />
                          </InputGroup> */}
                          <SingleDatePicker
                            id="endTime"
                            date={endTime} // momentPropTypes.momentObj or null
                            onDateChange={(date: any) => setEndTime(date)} // PropTypes.func.isRequired
                            focused={endFocus} // PropTypes.bool
                            onFocusChange={({ focused }: any) => setEndFocus(focused)} // PropTypes.func.isRequired
                            numberOfMonths={1}
                            placeholder="選擇日期"
                            displayFormat="YYYY-MM-DD"
                            monthFormat="YYYY[年]MM[月]"
                            showClearDate={true}
                            isOutsideRange={() => false}
                            phrases={{ closeDatePicker: '关闭', clearDate: '清除日期' }}
                          />
                        </Box>
                      </RadioGroup>
                    </Box>
                  </Flex>
                </FormControl>
              </GridItem>
            </Grid>
            <Grid templateColumns="repeat(2, 1fr)" gap="20px">
              <GridItem>
                <FormControl marginTop="30px" isInvalid={errors.charge}>
                  <Flex alignItems="center">
                    <Box width="200px" color="font.100" textAlign="right" marginRight="10px">
                      *参照时区
                    </Box>
                    <Select
                      placeholder="请选择参照时区"
                      {...register('timeZone', {
                        required: '请填写参照时区',
                      })}
                    >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </Flex>
                  <FormErrorMessage paddingLeft="180px">{errors.name && errors.name.message}</FormErrorMessage>
                </FormControl>
              </GridItem>
            </Grid>
          </form>
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
          <Flex
            bg={addAdvanced ? 'cyan.800' : ''}
            width="200px"
            height="200px"
            flexDirection={'column'}
            alignItems="center"
            justifyContent="center"
            borderRadius="6px"
            borderWidth="1px"
            borderStyle="solid"
            borderColor={'gray.300'}
            _hover={{
              bg: 'yellow.400',
              '& svg': { display: 'none' },
              '& .desc': { display: 'none' },
              '& .desc1': { display: 'block' },
            }}
            onClick={handleAddAdvanced}
          >
            <AddIcon w={35} h={35} color={addAdvanced ? 'white' : 'gray.300'} />
            <Text marginTop="10px" color={addAdvanced ? 'white' : 'gray.500'} className="desc" userSelect={'none'}>
              于特定时间进行
            </Text>
            <Text marginTop="10px" color="white" className="desc1" display={'none'} userSelect={'none'}>
              {addAdvanced ? '取消新增设定' : '新增设定'}
            </Text>
          </Flex>
        </Box>
        {addAdvanced ? (
          <Box>
            <Advanced title="于特定时间进行">
              <Box
                bg={'white'}
                padding="40px"
                borderBottomLeftRadius="8px"
                borderBottomRightRadius="8px"
                borderColor="gray.200"
                borderWidth="1px"
                borderStyle="solid"
              >
                <Text color="font.100">请选择每周重复进行活动的日子</Text>
                <HStack spacing="24px" marginTop={'30px'}>
                  {weeksValue.map((item, index) => (
                    <Box
                      w="100px"
                      h="150px"
                      lineHeight="150px"
                      borderWidth="1px"
                      borderStyle={'solid'}
                      borderColor="gray.400"
                      borderRadius={'6px'}
                      textAlign="center"
                      fontSize={'lg'}
                      fontWeight="bold"
                      color={item.select ? 'white' : 'font.100'}
                      bg={item.select ? 'cyan.800' : ''}
                      transition="0.3s"
                      key={item.title}
                      onClick={() => handleWeeks(index)}
                      userSelect="none"
                    >
                      {item.title}
                    </Box>
                  ))}
                </HStack>
                <Text color="font.100" marginTop={'100px'}>
                  请选择每周重复进行活动的时间段
                </Text>
                <Flex alignItems={'center'} marginTop="30px">
                  <Box>
                    <Text color="font.100" marginBottom={'10px'}>
                      开始时间
                    </Text>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none" children={<CalendarIcon color="gray.300" />} />
                      <Input type="tel" placeholder="结束时间" />
                    </InputGroup>
                  </Box>
                  <Box w="100px" h={'2px'} bg="cyan.800" margin="30px 20px 0 20px"></Box>
                  <Box>
                    <Text color="font.100" marginBottom={'10px'}>
                      结束时间
                    </Text>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none" children={<CalendarIcon color="gray.300" />} />
                      <Input type="tel" placeholder="结束时间" />
                    </InputGroup>
                  </Box>
                </Flex>
              </Box>
            </Advanced>
          </Box>
        ) : null}
      </Box>
      <FootStep current={2} previous={handlePrevious} next={handleNext} />
    </>
  );
};

export default StepSetTime;
