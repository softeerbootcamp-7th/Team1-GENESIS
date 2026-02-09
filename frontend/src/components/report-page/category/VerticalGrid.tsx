interface VerticalGridProps {
  steps: number;
  maxValue?: number;
}

const VerticalGrid = ({ steps, maxValue = 150 }: VerticalGridProps) => {
  const stepValues = Array.from({ length: steps }, (_, i) => (maxValue / (steps - 1)) * i);

  return (
    <div className="pointer-events-none absolute inset-0 left-14.75 flex h-full flex-col gap-4">
      <div className="relative flex flex-1">
        {stepValues.map((_, i) => (
          <div
            key={i}
            className="border-line-normal-normal relative flex-1 border-l border-dashed"
          />
        ))}
      </div>
      <div className="flex">
        {stepValues.map((value, i) => (
          <div
            key={i}
            className="relative flex-1 text-center text-xs text-label-assistive"
          >
            <span className="block -translate-x-1/2 transform">
              {Math.round(value).toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalGrid;
