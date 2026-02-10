import { getCategoryName } from '@/types/category';

import { type CountryCode } from '@/data/countryCode';

import ReportBar from './ReportBar';

interface ReportBarRowProps {
  categoryIndex: number;
  me: number;
  other: number;
  maxLabel: number;
  countryCode: CountryCode;
}

const ReportBarRow = ({ categoryIndex, me, other, maxLabel, countryCode = 'US' }: ReportBarRowProps) => {
  return (
    <div className="flex items-center gap-4 h-10">
      <span className="label1-normal-medium text-label-neutral flex w-12 justify-end">
        {getCategoryName(categoryIndex)}
      </span>

      <div className="flex w-full flex-col justify-between">
        <ReportBar
          value={me}
          variant="me"
          countryCode={countryCode}
          maxValue={maxLabel}
        />
        <ReportBar
          value={other}
          variant="other"
          countryCode={countryCode}
          maxValue={maxLabel}
        />
      </div>
    </div>
  );
};

export default ReportBarRow;
