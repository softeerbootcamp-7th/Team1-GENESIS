import { createFileRoute, Outlet } from '@tanstack/react-router';

import Header from '@/components/common/Header';
import Menu from '@/components/common/menu/Menu';
import { Skeleton } from '@/components/ui/skeleton';

export const Route = createFileRoute('/_app')({
  pendingComponent: () => <Skeleton className="h-64" />,
  component: AppLayout,
});

function AppLayout() {
  return (
    <div className="flex h-dvh overflow-hidden">
      <Menu />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 overflow-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
