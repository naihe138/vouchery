import { Box, Button, Flex, FormControl, FormErrorMessage, Input, Select, Text, Textarea } from '@chakra-ui/react';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import FootStep from '../components/FootStep';

const StepInfo: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
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
    console.log('handleNext');
    navigate(`/active/setTime${location.search}`);
  };
  return (
    <>
      <Box padding="40px">
        <Text fontWeight={'bold'} fontSize={'2xl'}>
          1. 促销活動資訊
        </Text>
        <Box
          bg={'white'}
          padding="40px 20px"
          borderRadius="8px"
          borderColor="gray.200"
          borderWidth="1px"
          borderStyle="solid"
          marginTop="30px"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.name}>
              <Flex alignItems="center">
                <Box width="200px" color="font.100" textAlign="right" marginRight="10px">
                  *促銷活動名稱
                </Box>
                <Input
                  w="360px"
                  placeholder="请填写促銷活動名稱"
                  {...register('name', {
                    required: '请填写促銷活動名稱',
                  })}
                />
              </Flex>
              <FormErrorMessage paddingLeft="180px">{errors.name && errors.name.message}</FormErrorMessage>
            </FormControl>
            <FormControl marginTop="30px">
              <Flex alignItems="center">
                <Box width="200px" color="font.100" textAlign="right" marginRight="10px">
                  促銷活動描述
                </Box>
                <Textarea w="360px" placeholder="请填写促銷活動描述" {...register('describe')} />
              </Flex>
              <Text color="font.100" fontSize="12px" paddingLeft="210px" paddingTop="10px">
                您對顧客描述此促銷活動的內容與規則，讓顧客更加了解此活動如何運行。
              </Text>
            </FormControl>
            <FormControl marginTop="30px" isInvalid={errors.charge}>
              <Flex alignItems="center">
                <Box width="200px" color="font.100" textAlign="right" marginRight="10px">
                  *活動负责人
                </Box>
                <Select
                  w="360px"
                  placeholder="请选择促銷活動负责人"
                  {...register('charge', {
                    required: '请填写促銷活動负责人',
                  })}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Flex>
              <FormErrorMessage paddingLeft="180px">{errors.name && errors.name.message}</FormErrorMessage>
            </FormControl>
            <FormControl marginTop="30px">
              <Flex alignItems="center">
                <Box width="200px" color="font.100" textAlign="right" marginRight="10px">
                  發送的管道
                </Box>
                <Select
                  w="360px"
                  placeholder="请填写發送的管道"
                  {...register('channel', {
                    required: '请填写發送的管道',
                  })}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Flex>
              <Text color="font.100" fontSize="12px" paddingLeft="210px" paddingTop="10px">
                用於您促銷活動的數據分析。
              </Text>
            </FormControl>
            <FormControl marginTop="30px">
              <Flex alignItems="center">
                <Box width="200px" color="font.100" textAlign="right" marginRight="10px">
                  定義预算碼
                </Box>
                <Input
                  w="360px"
                  placeholder="例如：Customer care"
                  {...register('code', {
                    required: '请填写定義预算碼',
                  })}
                />
              </Flex>
            </FormControl>
          </form>
        </Box>
      </Box>
      <FootStep current={1} previous={handlePrevious} next={handleNext} />
    </>
  );
};

export default StepInfo;
