interface VerticalGridProps {
  steps?: number;
  maxValue?: number;
}

const VerticalGrid = ({ steps = 5, maxValue = 150 }: VerticalGridProps) => {
  const stepValue = maxValue / steps+1;

  return (
    <div className="pointer-events-none absolute inset-0 left-14.75 flex h-full flex-col gap-4">
      <div className="relative flex flex-1">
        {Array.from({ length: steps + 1 }).map((_, i) => (
          <div
            key={i}
            className="border-line-normal-normal relative flex-1 border-l border-dashed"
          />
        ))}
      </div>
      <div className="flex">
        {Array.from({ length: steps + 1 }).map((_, i) => (
          <div
            key={i}
            className="relative flex-1 text-center text-xs text-label-assistive"
          >
            <span className="block -translate-x-1/2 transform">
              {Math.round(stepValue * i).toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalGrid;
