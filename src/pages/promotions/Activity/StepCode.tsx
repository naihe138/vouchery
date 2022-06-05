import { AddIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
} from '@chakra-ui/react';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import Advanced from '../components/Advanced';
import FootStep from '../components/FootStep';
import ActiveItem from './ActiveItem';

const StepCode: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm();
  const [buildCondition, setBuildCondition] = useState('member');
  const [codeType, setCodeType] = useState('common');
  const [auto, setAuto] = useState(false);
  const [manual, setManual] = useState(false);

  const [maxExchange, setMaxExchange] = useState('unlimited');
  const [codeComposition, setCodeComposition] = useState('englishDigital');
  const [maximumValue, setMaximumValue] = useState('englishDigital');
  const [exchangeTime, setExchangeTime] = useState('unlimited');

  const [codeDistribution, setCodeDistribution] = useState('unlimited');

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

  return (
    <>
      <Box padding="40px">
        <Text fontWeight={'bold'} fontSize={'2xl'}>
          4.生成代碼
        </Text>
        <Text marginTop="30px" marginBottom="10px" color="font.100" fontWeight="bold">
          *生成方式
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
              show={auto}
              setShow={() => {
                setManual(false);
                setAuto(!auto);
              }}
              title="自動生成"
            />
            <ActiveItem
              show={manual}
              setShow={() => {
                setManual(!manual);
                setAuto(false);
              }}
              title="手動生成"
            />
          </Flex>
          {/* 自動生成 */}
          {auto ? (
            <Box>
              <Flex marginTop="30px">
                <Box color="font.100" textAlign="left" marginRight="10px">
                  *生成條件
                </Box>
                <Box flex={1}>
                  <RadioGroup value={buildCondition} onChange={setBuildCondition}>
                    <Flex alignItems={'center'}>
                      <Radio value="member">會員點數門檻</Radio>
                      <Select width={'200px'} size="sm" marginLeft="10px">
                        <option value="option1">大於或等於</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </Select>
                      <Input w="300px" size="sm" marginLeft="10px" />
                      <Box color="font.100" marginLeft="10px">
                        點
                      </Box>
                    </Flex>
                    <Box marginTop="20px">
                      <Flex>
                        <Radio value="client">客戶群標籤為</Radio>
                        <Button
                          leftIcon={<AddIcon />}
                          colorScheme="yellow"
                          variant="solid"
                          size={'xs'}
                          color={'white'}
                          marginLeft="10px"
                        >
                          新增產品標籤
                        </Button>
                      </Flex>
                      <HStack spacing="6px" paddingLeft={'24px'} marginTop="20px">
                        <Tag borderRadius="full" variant="solid" colorScheme="gray">
                          <TagLabel>10月特價品</TagLabel>
                          <TagCloseButton />
                        </Tag>
                        <Tag borderRadius="full" variant="solid" colorScheme="gray">
                          <TagLabel>10月特價品</TagLabel>
                          <TagCloseButton />
                        </Tag>
                      </HStack>
                    </Box>
                  </RadioGroup>
                </Box>
              </Flex>
            </Box>
          ) : null}

          {/* 手動生成 */}
          {manual ? (
            <Box>
              <Flex marginTop="30px">
                <Box marginLeft={'100px'}>
                  <RadioGroup value={codeType} onChange={setCodeType}>
                    <Flex>
                      <Radio value="common">通用代碼</Radio>
                      <Radio value="independent" marginLeft={'100px'}>
                        獨立代碼
                      </Radio>
                    </Flex>
                  </RadioGroup>
                </Box>
              </Flex>
            </Box>
          ) : null}
        </Box>
        <Text marginTop="30px" marginBottom="10px" color="font.100" fontWeight="bold">
          代碼設定
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
          <HStack alignItems={'flex-start'} spacing="24px">
            <Box w="200px" color="font.100" textAlign={'right'}>
              *前綴詞
            </Box>
            <Box>
              <Input size={'sm'} />
              <Text color={'font.100'}>創造一個識別您活動的前綴詞，請輸入英數字</Text>
            </Box>
          </HStack>
          <HStack spacing="24px" marginTop={'40px'}>
            <Box w="200px" color="font.100" textAlign={'right'}>
              *代碼組成
            </Box>
            <Box>
              <RadioGroup value={codeComposition} onChange={setCodeComposition}>
                <Flex>
                  <Radio value="englishDigital">英數字混合</Radio>
                  <Radio value="english" marginLeft={'50px'}>
                    僅英文字母
                  </Radio>
                  <Radio value="digital" marginLeft={'50px'}>
                    僅數字
                  </Radio>
                </Flex>
              </RadioGroup>
            </Box>
          </HStack>
          <HStack spacing="24px" alignItems={'flex-start'} marginTop={'40px'}>
            <Box w="200px" color="font.100" textAlign={'right'}>
              *末端隨機碼長度
            </Box>
            <Box>
              <Input size={'sm'} />
              <Text color={'font.100'}>長度至少為3</Text>
            </Box>
          </HStack>
          <HStack spacing="24px" marginTop={'40px'}>
            <Box w="200px" color="font.100" textAlign={'right'}>
              上傳自訂代碼
            </Box>
            <Box>
              <Button colorScheme="teal" size="xs">
                上傳csv.檔
              </Button>
            </Box>
          </HStack>
        </Box>

        <Text marginTop="30px" marginBottom="10px" color="font.100" fontWeight="bold">
          代碼限制
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
          <HStack spacing="24px">
            <Box w="200px" color="font.100" textAlign={'right'}>
              *每個代碼最大兌換次數
            </Box>
            <Box>
              <RadioGroup value={maxExchange} onChange={setMaxExchange}>
                <Flex>
                  <Radio value="unlimited">無限</Radio>
                  <Flex alignItems={'center'}>
                    <Radio value="limited" marginLeft={'100px'}>
                      設定次數
                    </Radio>
                    <Select width={'100px'} size="sm" marginLeft="10px">
                      <option value="option1">全部</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                    <Input w="100px" size="sm" marginLeft="10px" />
                    <Box color="font.100" marginLeft="10px">
                      次
                    </Box>
                  </Flex>
                </Flex>
              </RadioGroup>
            </Box>
          </HStack>
          <HStack spacing="24px" marginTop={'40px'}>
            <Box w="200px" color="font.100" textAlign={'right'}>
              *每個代碼最大價值
            </Box>
            <Box>
              <RadioGroup value={maximumValue} onChange={setMaximumValue}>
                <Flex alignItems={'center'}>
                  <Radio value="unlimited">無限</Radio>
                  <Flex alignItems={'center'}>
                    <Radio value="maximumValue" marginLeft={'100px'}>
                      最大價值
                    </Radio>
                    <Select width={'100px'} size="sm" marginLeft="10px">
                      <option value="option1">全部</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                    <Box color="font.100" marginLeft="10px">
                      NT$
                    </Box>
                    <Input w="100px" size="sm" marginLeft="10px" />
                  </Flex>
                </Flex>
              </RadioGroup>
            </Box>
          </HStack>
          <HStack spacing="24px" alignItems={'flex-start'} marginTop={'40px'}>
            <Box w="200px" color="font.100" textAlign={'right'}>
              *代碼兌換期限
            </Box>
            <Box>
              <RadioGroup value={exchangeTime} onChange={setExchangeTime}>
                <Box>
                  <Radio value="same">與促銷活動相同</Radio>
                </Box>
                <Flex marginTop="20px" alignItems={'center'}>
                  <Radio value="afterGeneration">生成後</Radio>
                  <Input w="100px" size="sm" marginLeft="10px" />
                  <Box color="font.100" marginLeft="10px">
                    天
                  </Box>
                  <Input w="100px" size="sm" marginLeft="10px" />
                  <Box color="font.100" marginLeft="10px">
                    小時
                  </Box>
                  <Input w="100px" size="sm" marginLeft="10px" />
                  <Box color="font.100" marginLeft="10px">
                    分
                  </Box>
                  <Box color="font.200" marginLeft="10px">
                    內維持有效
                  </Box>
                </Flex>
                <Box marginTop="20px">
                  <Radio value="setEndTime">时间段</Radio>
                  <Flex paddingLeft={'26px'}>
                    <Box>
                      <Text>開始時間</Text>
                      <Input size={'sm'}></Input>
                    </Box>
                    <Box marginLeft={'100px'}>
                      <Text>結束時間</Text>
                      <Input size={'sm'}></Input>
                    </Box>
                  </Flex>
                </Box>
              </RadioGroup>
            </Box>
          </HStack>
        </Box>
        <Text marginTop="30px" marginBottom="10px" color="font.100" fontWeight="bold">
          代碼分發
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
          <Box paddingLeft={'224px'}>
            <RadioGroup value={codeDistribution} onChange={setCodeDistribution}>
              <Flex alignItems={'center'}>
                <Radio value="unlimited">無限</Radio>
                <Button colorScheme="teal" size={'xs'} marginLeft="10px">
                  上傳名單
                </Button>
              </Flex>
              <Flex alignItems={'center'} marginTop="50px">
                <Radio value="tags">會員群標籤為</Radio>
                <Button
                  leftIcon={<AddIcon />}
                  colorScheme="yellow"
                  variant="solid"
                  size={'xs'}
                  color={'white'}
                  marginLeft="10px"
                >
                  新增產品標籤
                </Button>
              </Flex>
              <HStack spacing="6px" paddingLeft={'24px'} marginTop="10px">
                <Tag borderRadius="full" variant="solid" colorScheme="gray">
                  <TagLabel>10月特價品</TagLabel>
                  <TagCloseButton />
                </Tag>
                <Tag borderRadius="full" variant="solid" colorScheme="gray">
                  <TagLabel>10月特價品</TagLabel>
                  <TagCloseButton />
                </Tag>
              </HStack>
            </RadioGroup>
          </Box>
        </Box>
      </Box>

      <FootStep current={4} previous={handlePrevious} next={handleNext} />
    </>
  );
};

export default StepCode;
