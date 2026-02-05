import { createFileRoute } from '@tanstack/react-router';

import SidePanel from '@/components/common/side-panel/SidePanel';

export const Route = createFileRoute('/_app/home')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <SidePanel />
    </div>
  );
}
