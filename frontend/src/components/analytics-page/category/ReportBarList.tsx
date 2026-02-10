import ReportBarRow from './ReportBarRow';
import VerticalGrid from './VerticalGrid';

interface ReportBarListProps {
  maxLabel: number;
  data: {
    category: string;
    me: number;
    other: number;
  }[];
}
const ReportBarList = ({ data, maxLabel }: ReportBarListProps) => {
  return (
    <div className="relative h-125.25 w-full">
      <VerticalGrid steps={6} maxValue={maxLabel} />
      <div className="relative z-10 flex flex-col gap-4.5">
        {data.map((item) => (
          <ReportBarRow
            key={item.category}
            {...item}
            maxLabel={maxLabel}
          />
        ))}
      </div>
    </div>
  );
};

export default ReportBarList;
