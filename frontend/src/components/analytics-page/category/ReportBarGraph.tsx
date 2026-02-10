import { type CountryCode } from '@/data/countryCode';

import ReportBarList from './ReportBarList';

interface ReportBarLegendProps {
  color: string;
  label: string;
}

const ReportBarLegend = ({ color, label }: ReportBarLegendProps) => {
  return (
    <div className="flex items-center gap-1.5">
      <div className={`bg-${color} h-2.5 w-2.5`} />
      <span className="label1-normal-regular text-label-alternative">
        {label}
      </span>
    </div>
  );
};

interface ReportBarGraphProps {
  maxLabel: number;
  items: {
    categoryIndex: number;
    mySpentAmount: string;
    averageSpentAmount: string;
  }[];
  countryCode: CountryCode;
}

const transformCategoryData = (
  items: ReportBarGraphProps['items'],
) => {
  return items.map((item) => ({
    categoryIndex: item.categoryIndex,
    me: Number(item.mySpentAmount),
    other: Number(item.averageSpentAmount),
  }));
};

const ReportBarGraph = ({ maxLabel, items, countryCode }: ReportBarGraphProps) => {
  const data = transformCategoryData(items);

  return (
    <div className="flex w-145.5 flex-col gap-3.5">
      <div className="flex justify-end gap-4">
        <ReportBarLegend label="나" color="primary-normal" />
        <ReportBarLegend label="다른 학생" color="cool-neutral-95" />
      </div>
      <ReportBarList items={data} maxLabel={maxLabel} countryCode={countryCode} />
    </div>
  );
};

export default ReportBarGraph;
