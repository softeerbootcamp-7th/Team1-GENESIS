import Button from '@/components/common/Button';
import { mockData } from '@/components/common/chart/budget/mock';
import ChartContainer from '@/components/common/chart/layout/ChartContainer';
import ChartContent from '@/components/common/chart/layout/ChartContent';
import ChartHeader from '@/components/common/chart/layout/ChartHeader';

import BudgetChartView from './BudgetChartView';

const BudgetChart = () => {
  const { totalBudget, usedBudget } = mockData;

  return (
    <ChartContainer>
      <ChartHeader title="남은 예산">
        <Button size="xxs">설정</Button>
      </ChartHeader>
      <ChartContent className="w-full p-5">
        <BudgetChartView totalBudget={totalBudget} usedBudget={usedBudget} />
      </ChartContent>
    </ChartContainer>
  );
};

export default BudgetChart;
