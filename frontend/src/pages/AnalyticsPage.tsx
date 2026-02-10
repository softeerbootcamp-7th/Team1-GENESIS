import CategoryProvider from '@/components/analytics-page/category/CategoryProvider';
import ReportCategory from '@/components/analytics-page/category/ReportCategory';

import { type CurrencyType } from '@/types/currency';

import { type CountryCode } from '@/data/countryCode';

import mockData from '../components/analytics-page/mock.json';

const AnalyticsPage = () => {
  const countryCode = mockData.countryCode as CountryCode;
  const categoryData = mockData.compareByCategory;
  const currencyType = 'LOCAL' as CurrencyType;

  return (
    <div className="flex p-3">
      <CategoryProvider value={{ countryCode, currencyType }}>
        <ReportCategory data={categoryData} />
      </CategoryProvider>
    </div>
  );
};

export default AnalyticsPage;
