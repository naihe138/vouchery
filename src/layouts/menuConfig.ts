import { CalendarIcon, EditIcon, MoonIcon, PlusSquareIcon, SettingsIcon, SunIcon, TimeIcon } from '@chakra-ui/icons';
import { ComponentWithAs, IconProps } from '@chakra-ui/react';
import { uuid } from '~/utils';

export type TMenuItem = {
  icon: ComponentWithAs<'svg', IconProps>;
  title: string;
  url: string;
  children?: TMenuChildren;
  isSelect: boolean;
  isOpen: boolean;
  key: string;
};
export type TMenuChildren = TMenuItem[];

export type TMenuConfig = Array<TMenuItem>;

export const menuConfig: TMenuConfig = [
  {
    icon: CalendarIcon,
    title: '数组总览',
    isSelect: true,
    isOpen: false,
    key: uuid(),
    url: '/',
  },
  {
    icon: EditIcon,
    title: '我的促销',
    isSelect: false,
    isOpen: false,
    key: uuid(),
    url: '',
    children: [
      {
        icon: MoonIcon,
        isSelect: false,
        isOpen: false,
        title: '促销活动',
        key: uuid(),
        url: '',
      },
      {
        icon: TimeIcon,
        title: '优惠代码',
        isSelect: false,
        isOpen: false,
        key: uuid(),
        url: '',
      },
    ],
  },
  {
    icon: SunIcon,
    title: '优惠代码兑换',
    isSelect: false,
    isOpen: false,
    key: uuid(),
    url: '',
  },
  {
    icon: PlusSquareIcon,
    title: '会员管理',
    isSelect: false,
    isOpen: false,
    key: uuid(),
    url: '',
  },
  {
    icon: SettingsIcon,
    title: '产品项目',
    isSelect: false,
    isOpen: false,
    key: uuid(),
    url: '',
  },
];
