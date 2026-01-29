import { createFileRoute } from '@tanstack/react-router';

import { Skeleton } from '@/components/ui/skeleton';

import { redirectIfAuthenticated } from '@/lib/auth';

export const Route = createFileRoute('/')({
  beforeLoad: async () => {
    const user = await redirectIfAuthenticated();
    return { user };
  },
  pendingComponent: () => <Skeleton className="h-64" />,
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Unipocket</div>;
}
