import { Button, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import FootStepItem from './FootStepItem';
type IFootStep = {
  current: number;
  previous: () => void;
  next: () => void;
};
const FootStep: FC<IFootStep> = ({ current, previous, next }) => {
  return (
    <Flex
      alignItems={'center'}
      bg="white"
      height="120px"
      position="fixed"
      bottom={0}
      width={window.innerWidth - 240 + 'px'}
      padding="0 40px"
      boxShadow="1px -3px 5px #CBD5E0"
    >
      <Button variant="outline" colorScheme="teal" marginRight="10px" onClick={previous}>
        上一步
      </Button>
      <Flex flex={1} margin="0 20px">
        <FootStepItem order={1} title="促销活动资讯" active={current === 1} />
        <FootStepItem order={2} title="时间设定" hasLine active={current === 2} />
        <FootStepItem order={3} title="活动内容" hasLine active={current === 3} />
        <FootStepItem order={4} title="代码生成" hasLine active={current === 4} />
      </Flex>
      <Button colorScheme="yellow" color={'white'} variant="solid" onClick={next}>
        下一步
      </Button>
    </Flex>
  );
};

export default FootStep;
