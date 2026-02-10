import clsx from 'clsx';
import { X } from 'lucide-react';

import { CATEGORY_STYLE, type CategoryType } from '@/types/category';

interface TagProps {
  type: CategoryType | string;
  onRemove?: () => void;
}

const Tag = ({ type, onRemove }: TagProps) => {
  const { bg, text } = CATEGORY_STYLE[type as CategoryType] || {
    bg: 'bg-label-alternative/10',
    text: 'text-label-alternative',
  };

  return (
    <div
      className={clsx('inline-flex items-center rounded-md px-1.5 py-0.75', bg)}
    >
      <span className={clsx('caption2-bold', text)}>{type}</span>
      {onRemove && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // 클릭 시 인풋 포커스 로직과 겹치지 않도록 방지
            onRemove?.();
          }}
          onMouseDown={(e) => e.preventDefault()} // DataTableFilter의 toggleOption에서 focus()를 다시 호출할 필요가 없어짐.
          className={clsx('cursor-pointer rounded-full p-0.5', text)}
        >
          <X size={12} strokeWidth={3} />
        </button>
      )}
    </div>
  );
};

export default Tag;
