import type { CountryCode } from '@/data/countryCode';
import { countryCode } from '@/data/countryCode';

export type ExpenseStatisticsResponse = {
  currencySignAndName?: string;
  label: string;
  percent: number;
};

export const mockDataForMethod: {
  label: string;
  percent: number;
}[] = [
  {
    label: 'Chase Debit Card',
    percent: 35,
  },
  {
    label: '트레블월렛',
    percent: 25,
  },
  {
    label: '하나 비바X',
    percent: 25,
  },
  {
    label: '현금',
    percent: 10,
  },
  {
    label: '기타',
    percent: 5,
  },
];

export const mockDataForCurrency: {
  countryCode: CountryCode;
  percent: number;
}[] = [
  {
    countryCode: 'SA',
    percent: 35,
  },
  {
    countryCode: countryCode[5],
    percent: 25,
  },
  {
    countryCode: countryCode[10],
    percent: 25,
  },
  {
    countryCode: countryCode[15],
    percent: 15,
  },
];
