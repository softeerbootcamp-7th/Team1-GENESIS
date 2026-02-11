import { type ReactNode, useMemo } from 'react';

import type { CurrencyType } from '@/types/currency';

import type { CountryCode } from '@/data/countryCode';

import { CategoryContext } from './CategoryContext';

interface CategoryProviderProps {
  countryCode: CountryCode;
  currencyType: CurrencyType;
  children: ReactNode;
}

const CategoryProvider = ({
  countryCode,
  currencyType,
  children,
}: CategoryProviderProps) => {
  const value = useMemo(
    () => ({
      countryCode,
      currencyType,
    }),
    [countryCode, currencyType],
  );

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
