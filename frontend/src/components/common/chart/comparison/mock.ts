import type { CurrencyType } from '@/types/currency';

import type { CountryCode } from '@/data/countryCode';
import { countryCode } from '@/data/countryCode';

type ComparisonItem = {
  currency: CurrencyType;
  value: number;
};

type ComparisonData = {
  average: ComparisonItem;
  me: ComparisonItem;
};

export type ComparisonStatisticsResponse = {
  month: number;
  baseCountryCode: CountryCode;
  localCountryCode: CountryCode;
  base: ComparisonData;
  local: ComparisonData;
};

export const mockData: ComparisonStatisticsResponse = {
  month: 12,
  baseCountryCode: countryCode[0] as CountryCode, // 'KR'
  localCountryCode: countryCode[12] as CountryCode, // 'US'
  base: {
    average: {
      currency: 'BASE',
      value: 2311465,
    },
    me: {
      currency: 'BASE',
      value: 2002876,
    },
  },
  local: {
    average: {
      currency: 'LOCAL',
      value: 2234,
    },
    me: {
      currency: 'LOCAL',
      value: 2000,
    },
  },
};
