import clsx from 'clsx';

import { TOTAL_ANIMATION_DURATION } from '@/components/common/chart/chartType';
import CurrencyAmountDisplay from '@/components/common/currency/CurrencyAmountDisplay';

import { type CountryCode } from '@/data/countryCode';

interface ReportBarProps {
  value: number;
  variant: 'me' | 'other';
  countryCode: CountryCode;
}

const VARIANT_STYLES = {
  me: {
    bgColor: 'bg-primary-normal',
    textStyle: 'text-primary-normal body2-normal-bold',
    size: 'md',
  },
  other: {
    bgColor: 'bg-cool-neutral-95',
    textStyle: 'text-cool-neutral-80',
    size: 'xs',
  },
} as const;

const ReportBar = ({ value, variant, countryCode }: ReportBarProps) => {
  const styles = VARIANT_STYLES[variant];

  return (
    <div className="flex items-center gap-2">
      <div
        className={clsx(
          'animate-expand-width h-3 w-57.75 origin-left rounded-r-xs',
          styles.bgColor,
        )}
        style={{ animationDuration: `${TOTAL_ANIMATION_DURATION}s` }}
      />
      <CurrencyAmountDisplay
        amount={value}
        countryCode={countryCode}
        size={styles.size}
        className={styles.textStyle}
      />
    </div>
  );
};

export default ReportBar;
