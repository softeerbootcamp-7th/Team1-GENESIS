import type { CategoryStatisticsResponse } from './CategoryChart';

export const dummyData: CategoryStatisticsResponse = {
  totalAmount: 10031000,
  currency: 'KRW',
  items: [
    {
      categoryName: '거주',
      amount: 450000,
      percent: 35,
    },
    {
      categoryName: '식비',
      amount: 250000,
      percent: 20,
    },
    {
      categoryName: '쇼핑',
      amount: 100000,
      percent: 12,
    },
    {
      categoryName: '학교',
      amount: 50000,
      percent: 10,
    },
    {
      categoryName: '생활',
      amount: 100000,
      percent: 10,
    },
    {
      categoryName: '통신비',
      amount: 30000,
      percent: 8,
    },
    {
      categoryName: '미분류',
      amount: 20000,
      percent: 5,
    },
  ],
};
