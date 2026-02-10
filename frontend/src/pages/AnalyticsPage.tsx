import ReportCategory from '@/components/analytics-page/category/ReportCategory';

import mockData from '../components/analytics-page/mock.json';

const AnalyticsPage = () => {
  const categoryData = mockData.compareByCategory;

  return (
    <div className="flex p-3">
      <ReportCategory data={categoryData} />
    </div>
  );
};

export default AnalyticsPage;
