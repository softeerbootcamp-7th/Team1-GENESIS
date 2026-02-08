import { useMemo } from 'react';

import {
  EXPENSE_CHART_COLORS,
  type ExpenseChartMode,
} from '@/components/common/chart/chartType';
import ExpenseChartSkeleton from '@/components/common/chart/expense/ExpenseChartSkeleton';
import ExpenseChartView from '@/components/common/chart/expense/ExpenseChartView';
import {
  mockDataForCurrency,
  mockDataForMethod,
} from '@/components/common/chart/expense/mock';
import ChartContainer from '@/components/common/chart/layout/ChartContainer';
import ChartContent from '@/components/common/chart/layout/ChartContent';
import ChartHeader from '@/components/common/chart/layout/ChartHeader';

import { getCountryInfo } from '@/lib/country';

interface ExpenseChartProps {
  mode?: ExpenseChartMode;
  isLoading?: boolean;
}

const ExpenseChart = ({
  mode = 'method',
  isLoading = false,
}: ExpenseChartProps) => {
  // 렌더링용 데이터. API 연동 시 변경 필요
  const chartData = useMemo(() => {
    if (mode === 'method') {
      return mockDataForMethod
        .filter((item) => item.percent > 0)
        .map((item, idx) => {
          const color = EXPENSE_CHART_COLORS[idx % EXPENSE_CHART_COLORS.length];

          return {
            id: item.label,
            label: item.label,
            percent: item.percent,
            color,
            subLabel: undefined,
          };
        });
    }

    return mockDataForCurrency
      .filter((item) => item.percent > 0)
      .map((item, idx) => {
        const color = EXPENSE_CHART_COLORS[idx % EXPENSE_CHART_COLORS.length];

        const countryInfo = getCountryInfo(item.countryCode);
        const label = countryInfo?.currencyNameKor || '';
        const subLabel = countryInfo
          ? `${countryInfo.currencySign} ${countryInfo.currencyName}`
          : item.countryCode;

        return {
          id: item.countryCode,
          label,
          percent: item.percent,
          color,
          subLabel,
        };
      });
  }, [mode]);
  return (
    <ChartContainer className="w-67">
      <ChartHeader
        title={(mode === 'method' ? '결제수단' : '통화') + '별 지출'}
      />
      <ChartContent
        isLoading={isLoading}
        skeleton={<ExpenseChartSkeleton />}
        className="p-5"
      >
        <ExpenseChartView data={chartData} />
      </ChartContent>
    </ChartContainer>
  );
};

export default ExpenseChart;
