import { type ReactNode } from 'react';

import { ReportContext } from '@/components/report-page/ReportContext';

import type { CurrencyType } from '@/types/currency';

interface ReportProviderProps {
  currencyType: CurrencyType;
  onCurrencyTypeChange: (currencyType: CurrencyType) => void;
  children: ReactNode;
}

const ReportProvider = ({
  currencyType,
  onCurrencyTypeChange,
  children,
}: ReportProviderProps) => {
  return (
    <ReportContext.Provider value={{ currencyType, onCurrencyTypeChange }}>
      {children}
    </ReportContext.Provider>
  );
};

export default ReportProvider;
