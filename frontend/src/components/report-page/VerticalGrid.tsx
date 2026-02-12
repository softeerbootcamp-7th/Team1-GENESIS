import { clsx } from 'clsx';

interface VerticalGridProps {
  steps?: number;
  labels: (number | string)[];
  positions?: number[]; // Custom positions in percentage (0-100)
  className?: string;
}

const VerticalGrid = ({
  steps,
  labels,
  positions,
  className,
}: VerticalGridProps) => {
  // Use custom positions if provided, otherwise use equal steps
  const gridPositions =
    positions ||
    (steps !== undefined
      ? Array.from({ length: steps + 1 }, (_, i) => (i / steps) * 100)
      : []);

  if (gridPositions.length === 0) return null;

  return (
    <div
      className={clsx(
        'pointer-events-none absolute inset-0 flex h-full flex-col gap-4 pr-5',
        className,
      )}
    >
      <div className="relative flex-1">
        {gridPositions.map((position, i) => (
          <div
            key={i}
            className="border-line-normal-normal absolute top-0 h-full border-l border-dashed"
            style={{
              left: `${position}%`,
            }}
          />
        ))}
      </div>
      <div className="relative">
        {labels.map((label, i) => (
          <div
            key={i}
            className="text-label-assistive absolute text-xs"
            style={{
              left: `${gridPositions[i]}%`,
              transform: 'translateX(-50%)',
            }}
          >
            {typeof label === 'number'
              ? Math.round(label).toLocaleString()
              : label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalGrid;
