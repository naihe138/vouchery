import { AddIcon, ArrowBackIcon, ChevronLeftIcon, EmailIcon, PlusSquareIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button, ComponentWithAs, Flex, IconProps, Text } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useRoutes, useSearchParams } from 'react-router-dom';
import ActivityHeader from '../components/ActivityHeader';
import { GiftIcon, MemberIcon, TagIcon } from '~/config/icon';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './index.scss';
import moment from 'moment';
moment.locale('zh-cn');
type TIcon = ComponentWithAs<'svg', IconProps>;
type TCreateIcons = {
  icon: TIcon;
  title: string;
};
const createIcons: Record<string, TCreateIcons> = {
  tags: {
    icon: TagIcon,
    title: '折价券',
  },
  coupon: {
    icon: AddIcon,
    title: '贈品券',
  },
  gift: {
    icon: GiftIcon,
    title: '禮品卡',
  },
  member: {
    icon: MemberIcon,
    title: '会员礼',
  },
};

const Activity: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [showButton, setShowButton] = useState(false);
  const [Icon, setIcon] = useState<TIcon | null>(null);
  const [title, setTitle] = useState<string>('');
  useEffect(() => {
    setShowButton(location.pathname !== '/active');
    const type = searchParams.get('type');
    if (type && createIcons[type]) {
      setIcon(createIcons[type].icon);
      setTitle(createIcons[type].title);
    }
  }, [location]);
  return (
    <>
      <Flex bg={'white'} height="90px" alignItems={'center'} justifyContent="space-between" padding="0 30px 0 20px">
        <Flex color={'blue.900'} alignItems={'center'}>
          <ArrowBackIcon
            boxSize={6}
            color="gray.400"
            onClick={() => {
              navigate(-1);
            }}
          />
          <PlusSquareIcon boxSize={6} marginLeft="10px" />
          <Text fontSize="xl" fontWeight={'bold'} marginLeft="4px">
            建立新的活动
          </Text>
          {showButton && Icon ? (
            <Button leftIcon={<Icon />} colorScheme="blue" variant="solid" size="sm" marginLeft="3">
              {title}
            </Button>
          ) : null}
        </Flex>
        {showButton ? (
          <Box>
            <Button variant="outline" colorScheme="teal" marginRight="10px">
              取消建立
            </Button>
            <Button colorScheme="teal" color={'white'} variant="solid">
              存储草稿
            </Button>
          </Box>
        ) : null}
      </Flex>
      <Box>
        <Outlet />
        <Box h="120px"></Box>
      </Box>
    </>
  );
};

export default Activity;
