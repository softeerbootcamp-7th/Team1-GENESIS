interface ChartItem {
  date: string;
  cumulatedAmount: string;
}

interface ComparisonLineChartProps {
  thisMonth: ChartItem[];
  prevMonth: ChartItem[];
  maxValue: number;
  width?: number;
  height?: number;
}

const buildLinePath = (
  data: ChartItem[],
  width: number,
  height: number,
  maxValue: number,
  maxDay: number,
) => {
  const stepX = width / (maxDay - 1);

  return data
    .map((item, index) => {
      const x = stepX * index;
      const value = Number(item.cumulatedAmount);
      const y = height - (value / maxValue) * height;

      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    })
    .join(' ');
};

const ComparisonLineChart = ({
  thisMonth,
  prevMonth,
  maxValue,
  width = 360,
  height = 140,
}: ComparisonLineChartProps) => {
  const maxDay = Math.max(thisMonth.length, prevMonth.length);

  const thisPath = buildLinePath(thisMonth, width, height, maxValue, maxDay);
  const prevPath = buildLinePath(prevMonth, width, height, maxValue, maxDay);

  const thisMonthWidth = (thisMonth.length / maxDay) * width;

  return (
    <svg width={width} height={height}>
      <defs>
        <clipPath id="thisMonthClip">
          <rect x="0" y="0" width={thisMonthWidth} height={height} />
        </clipPath>
      </defs>
      <path
        d={thisPath}
        fill="none"
        stroke="#44A3B6"
        strokeWidth={2.5}
        strokeDasharray="1000"
        className="animate-draw-path"
        clipPath="url(#thisMonthClip)"
      />
      <path d={prevPath} fill="none" stroke="#C2C4C8" strokeWidth={2.5} />
    </svg>
  );
};

export default ComparisonLineChart;
