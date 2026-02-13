import VerticalBarChart from '@/components/chart/charts/VerticalBarChart';
import type { ExpenseChartUiItem } from '@/components/chart/chartType';
import ExpenseLegendItem from '@/components/chart/expense/ExpenseLegendItem';

interface ExpenseChartViewProps {
  data: ExpenseChartUiItem[];
}
const ExpenseChartView = ({ data }: ExpenseChartViewProps) => {
  return (
    <>
      <VerticalBarChart data={data} />
      <div className="flex flex-col items-start justify-center gap-2.5">
        {data.map((item) => (
          <ExpenseLegendItem
            key={item.id}
            label={item.label}
            currencySignAndName={item.subLabel}
            percent={item.percent}
            color={item.color}
          />
        ))}
      </div>
    </>
  );
};

export default ExpenseChartView;
