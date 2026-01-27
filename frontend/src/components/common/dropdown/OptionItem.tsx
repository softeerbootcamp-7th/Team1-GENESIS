interface OptionItemProps {
  label: string;
  isSelected: boolean;
  onSelect: (value: string) => void;
}

const OptionItem = ({ label, isSelected, onSelect }: OptionItemProps) => {
  return (
    <li>
      <button
        type="button"
        onClick={() => onSelect(label)}
        className={[
          'flex w-full items-center px-3 py-2 text-sm text-left transition-colors',
          isSelected
            ? 'bg-primary-normal/10 text-primary-normal'
            : 'hover:bg-fill-alternative text-label-neutral',
        ].join(' ')}
      >
        {label}
      </button>
    </li>
  );
};

export default OptionItem;
