import type { PropsWithChildren, ReactNode } from 'react';
import clsx from 'clsx';

interface ChartContentProps extends PropsWithChildren {
  className?: string;
  isLoading?: boolean;
  skeleton?: ReactNode;
}

const ChartContent = ({
  children,
  className,
  isLoading = false,
  skeleton,
}: ChartContentProps) => {
  return (
    <div
      className={clsx(
        'rounded-modal-8 bg-background-alternative flex justify-between px-8 py-4',
        className,
      )}
    >
      {/* 로딩 중이고 스켈레톤이 전달되었다면 스켈레톤 렌더링, 아니면 본문 렌더링 */}
      {isLoading && skeleton ? skeleton : children}
    </div>
  );
};

export default ChartContent;
