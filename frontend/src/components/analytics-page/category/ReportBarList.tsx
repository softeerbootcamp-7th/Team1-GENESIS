import { type CountryCode } from '@/data/countryCode';

import ReportBarRow from './ReportBarRow';
import VerticalGrid from './VerticalGrid';

interface ReportBarListProps {
  maxLabel: number;
  items: {
    categoryIndex: number;
    me: number;
    other: number;
  }[];
  countryCode: CountryCode;
}
const ReportBarList = ({ items, maxLabel, countryCode }: ReportBarListProps) => {
  return (
    <div className="relative h-125.25 w-full">
      <VerticalGrid steps={6} maxLabel={maxLabel} />
      <div className="relative z-10 flex flex-col gap-4.5">
        {items.map((item) => (
          <ReportBarRow
            key={item.categoryIndex}
            {...item}
            maxLabel={maxLabel}
            countryCode={countryCode}
          />
        ))}
      </div>
    </div>
  );
};

export default ReportBarList;
