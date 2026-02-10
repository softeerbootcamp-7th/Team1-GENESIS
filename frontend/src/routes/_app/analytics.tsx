import { createFileRoute } from '@tanstack/react-router';

import ReportCategory from '@/components/analytics-page/category/ReportCategory';

export const Route = createFileRoute('/_app/analytics')({
  component: RouteComponent,
});

function RouteComponent() {
  return <><ReportCategory /></>;
}
