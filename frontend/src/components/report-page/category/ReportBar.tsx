import clsx from 'clsx';

import { TOTAL_ANIMATION_DURATION } from '@/components/common/chart/chartType';

interface ReportBarProps {
  value: number;
  variant: 'me' | 'other';
}

const ReportBar = ({ value, variant }: ReportBarProps) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className={clsx(
          'h-3 w-57.75 rounded-r-xs animate-expand-width origin-left',
          variant === 'me' ? 'bg-primary-normal' : 'bg-cool-neutral-95',
        )}
        style={{ animationDuration: `${TOTAL_ANIMATION_DURATION}s` }}
      />
      <span className="caption1-medium text-label-neutral">
        {value.toLocaleString()}
      </span>
    </div>
  );
};

export default ReportBar;
