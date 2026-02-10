import ReportCategory from '@/components/analytics-page/category/ReportCategory';

import mockData from '../components/analytics-page/mock.json';

const LoginPage = () => {
  const data = mockData.compareByCategory;

  return <ReportCategory data={data} />;
};

export default LoginPage;
