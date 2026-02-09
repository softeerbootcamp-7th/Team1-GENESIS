import CurrencyAmountDisplay from '@/components/common/currency/CurrencyAmountDisplay';
import CurrencyBadge from '@/components/common/currency/CurrencyBadge';

import countryData from '@/data/countryData.json';

import { mockData } from './mock';

interface ComparisonChartViewProps {
  selectedId: number;
}

import { type CurrencyType } from '@/types/currency';

const ComparisonChartView = ({ selectedId }: ComparisonChartViewProps) => {
  const selectedCurrency: CurrencyType = selectedId === 1 ? 'BASE' : 'LOCAL';
  const data = selectedCurrency === 'BASE' ? mockData.base : mockData.local;

  return (
    <>
      <p className="body1-normal-bold text-label-neutral">
        나랑 같은 국가의 교환학생보다 <br />
        <span className="text-primary-strong">{data.average - data.me}{countryData[data.countryCode].currencyUnitKor} </span>
        썼어요
      </p>
      <div className="flex h-26.5 flex-col gap-3">
        <span className="caption2-medium text-label-assistive">
          기준 : {mockData.month}월
        </span>
        <div className="flex h-8.5 gap-3.5">
          <div className="bg-cool-neutral-95 h-8 w-21.25 items-center rounded-xs" />
          <div className="flex flex-col gap-1.5">
            <span className="text-cool-neutral-80 caption2-medium">
              미국 교환학생 평균
            </span>
            <div className="flex items-center gap-1.75">
              {selectedCurrency === 'LOCAL' && (
                <CurrencyBadge
                  countryCode={data.countryCode}
                  className="text-cool-neutral-70"
                />
              )}
              <CurrencyAmountDisplay
                countryCode={data.countryCode}
                amount={data.average}
                size="sm"
                className="text-cool-neutral-70"
              />
            </div>
          </div>
        </div>
        <div className="flex h-8.5 gap-3.5">
          <div className="bg-primary-normal h-8 w-17 items-center rounded-xs" />
          <div className="flex flex-col gap-1.5">
            <span className="text-primary-normal caption2-medium">나</span>
            <div className="flex items-center gap-1.75">
              {selectedCurrency === 'LOCAL' && (
                <CurrencyBadge
                  countryCode={data.countryCode}
                  className="text-primary-normal"
                />
              )}
              <CurrencyAmountDisplay
                countryCode={data.countryCode}
                amount={data.me}
                size="sm"
                className="text-primary-normal"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComparisonChartView;
