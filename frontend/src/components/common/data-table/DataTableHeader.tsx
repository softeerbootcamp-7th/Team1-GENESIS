import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

export function DataTableHeader({
  children,
  className,
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={cn('caption1-medium flex items-center', className)}>
      {children}
    </div>
  );
}
