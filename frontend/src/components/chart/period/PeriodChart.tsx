import { useState } from 'react';

import {
  CURRENCY_OPTIONS,
  PERIOD_ID,
  PERIOD_OPTIONS,
} from '@/components/chart/chartType';
import ChartContainer from '@/components/chart/layout/ChartContainer';
import ChartContent from '@/components/chart/layout/ChartContent';
import ChartHeader from '@/components/chart/layout/ChartHeader';
import HorizontalBarChart from '@/components/chart/period/HorizontalBarChart';
import {
  MOCK_DAILY_DATA,
  MOCK_MONTHLY_DATA,
  MOCK_WEEKLY_DATA,
} from '@/components/chart/period/mock';
import PeriodBarChart from '@/components/chart/period/PeriodBarChart';
import PeriodLineChart from '@/components/chart/period/PeriodLineChart';
import DropDown from '@/components/common/dropdown/Dropdown';

import { useAccountBookStore } from '@/stores/useAccountBookStore';

const PeriodChart = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(
    CURRENCY_OPTIONS[0].id,
  );
  const [selectedPeriod, setSelectedPeriod] = useState(PERIOD_OPTIONS[0].id);
  const localCountryCode = useAccountBookStore(
    (state) => state.accountBook?.localCountryCode,
  );
  const baseCountryCode = useAccountBookStore(
    (state) => state.accountBook?.baseCountryCode,
  );

  const isBaseCurrency = selectedCurrency === CURRENCY_OPTIONS[0].id;
  const currentCountryCode = isBaseCurrency
    ? baseCountryCode
    : localCountryCode;

  const renderChart = () => {
    switch (selectedPeriod) {
      case PERIOD_ID.MONTHLY:
        return <PeriodLineChart data={MOCK_MONTHLY_DATA} />;
      case PERIOD_ID.WEEKLY:
        return (
          <HorizontalBarChart
            data={MOCK_WEEKLY_DATA}
            countryCode={currentCountryCode ?? 'KR'}
          />
        );
      case PERIOD_ID.DAILY:
        return <PeriodBarChart data={MOCK_DAILY_DATA} />;
      default:
        return <PeriodLineChart data={MOCK_MONTHLY_DATA} />;
    }
  };

  const PADDING_BY_PERIOD: Record<number, string> = {
    [PERIOD_ID.MONTHLY]: 'pt-6 pl-4 pr-5 pb-4',
    [PERIOD_ID.WEEKLY]: 'pt-[30px] px-4 pb-4',
    [PERIOD_ID.DAILY]: 'pt-9 px-5 pb-5',
  };

  return (
    <ChartContainer>
      <ChartHeader title="기간별 지출">
        {selectedPeriod === PERIOD_ID.WEEKLY && (
          <DropDown
            selected={selectedCurrency}
            onSelect={setSelectedCurrency}
            options={CURRENCY_OPTIONS}
            size="xs"
          />
        )}
        <DropDown
          selected={selectedPeriod}
          onSelect={setSelectedPeriod}
          options={PERIOD_OPTIONS}
          size="xs"
        />
      </ChartHeader>
      <ChartContent className={PADDING_BY_PERIOD[selectedPeriod]}>
        {renderChart()}
      </ChartContent>
    </ChartContainer>
  );
};

export default PeriodChart;
