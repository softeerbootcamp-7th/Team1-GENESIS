import { createFileRoute } from '@tanstack/react-router';

import CurrencyConverter from '@/components/common/side-panel/CurrencyConverter';

export const Route = createFileRoute('/_app/home')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-4">
      <CurrencyConverter />
    </div>
  );
}
