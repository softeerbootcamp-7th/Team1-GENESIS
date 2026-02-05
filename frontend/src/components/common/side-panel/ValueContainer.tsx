import type React from 'react';

export interface ValueItemProps {
  label: string;
  value: React.ReactNode;
  onClick?: () => void;
}

interface ValueContainerProps {
  items: ValueItemProps[];
  onItemClick?: (label: string) => void;
}

const ValueItem = ({ label, value, onClick }: ValueItemProps) => {
  return (
    <div className="flex h-8 items-center">
      <p className="label1-normal-bold text-label-alternative w-25">{label}</p>
      <p 
        className="label1-normal-medium text-label-normal w-63 px-1 cursor-pointer hover:opacity-70"
        onClick={onClick}
      >
        {value}
      </p>
    </div>
  );
};

const ValueContainer = ({ items, onItemClick }: ValueContainerProps) => {
  return (
    <div className="relative flex flex-col gap-2">
      {items.map(({ label, value }) => (
        <ValueItem 
          key={label} 
          label={label} 
          value={value}
          onClick={() => onItemClick?.(label)}
        />
      ))}
    </div>
  );
};

export default ValueContainer;
