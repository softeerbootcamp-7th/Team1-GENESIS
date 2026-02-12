import ComparisonLineChart from '@/components/report-page/myself/ComparisonLineChart';
import ReportLegend from '@/components/report-page/ReportLegend';

interface ReportLineGraphProps {
  thisMonthItem: { date: string; cumulatedAmount: string }[];
  prevMonthItem: { date: string; cumulatedAmount: string }[];
}
const ReportLineGraph = ({
  thisMonthItem,
  prevMonthItem,
}: ReportLineGraphProps) => {
  const maxDays = Math.max(thisMonthItem.length, prevMonthItem.length);
  const thisMonthLastDay = thisMonthItem.length;

  // 라벨 위치 계산 (비율 기반)
  const labelPositions = [
    { day: 1, position: 0 },
    {
      day: thisMonthLastDay,
      position: ((thisMonthLastDay - 1) / (maxDays - 1)) * 100,
    },
    { day: maxDays, position: 100 },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end gap-4">
        <ReportLegend label="1월" color="me" variant="line" />
        <ReportLegend label="2월" color="other" variant="line" />
      </div>
      <div className="relative">
        {/* Vertical grid lines */}
        <div className="pointer-events-none absolute inset-0 flex h-42.5 flex-col gap-4">
          <div className="relative flex-1">
            {labelPositions.map((label, i) => (
              <div
                key={i}
                className="border-line-normal-normal absolute top-0 h-full border-l border-dashed"
                style={{
                  left: `${label.position}%`,
                }}
              />
            ))}
          </div>
          <div className="relative">
            {labelPositions.map((label, i) => (
              <div
                key={i}
                className="text-label-assistive absolute text-xs"
                style={{
                  left: `${label.position}%`,
                  transform: 'translateX(-50%)',
                }}
              >
                {label.day}
              </div>
            ))}
          </div>
        </div>
        <div className="relative z-10 pt-1">
          <ComparisonLineChart
            thisMonth={thisMonthItem}
            prevMonth={prevMonthItem}
          />
        </div>
      </div>
    </div>
  );
};

export default ReportLineGraph;
