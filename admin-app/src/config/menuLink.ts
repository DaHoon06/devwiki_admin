import { MenuListsProps } from '@components/menu/item/MenuLists';

export const menuLists: MenuListsProps[] = [
  {
    label: '몰랑',
    baseLink: 'mollrang',
    child: [
      {
        id: '1',
        label: '퀴즈 관리',
        to: 'quiz',
      },
    ],
  },
  {
    label: '일정관리',
    baseLink: 'schedule',
    child: [
      {
        id: '1',
        label: '캘린더',
        to: '',
      },
    ],
  },
];
