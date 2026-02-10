import ReportBar from './ReportBar';

interface ReportBarRowProps {
  category: string;
  me: number;
  other: number;
  maxLabel: number;
}

const ReportBarRow = ({ category, me, other, maxLabel }: ReportBarRowProps) => {
  return (
    <div className="flex items-center gap-4">
      <span className="label1-normal-medium text-label-neutral flex w-12 justify-end">
        {category}
      </span>

      <div className="flex h-10 w-full flex-col justify-between">
        <ReportBar
          value={me}
          variant="me"
          countryCode="US"
          maxValue={maxLabel}
        />
        <ReportBar
          value={other}
          variant="other"
          countryCode="US"
          maxValue={maxLabel}
        />
      </div>
    </div>
  );
};

export default ReportBarRow;
