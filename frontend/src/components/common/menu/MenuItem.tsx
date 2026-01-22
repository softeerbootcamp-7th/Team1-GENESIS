import clsx from 'clsx';

interface MenuItemProps {
  logo: React.ReactNode;
  label: string;
  onClick: () => void;
  active?: boolean;
}

const MenuItem = ({ logo, label, onClick, active }: MenuItemProps) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'flex w-8 cursor-pointer flex-col items-center gap-0.5',
        active
          ? 'text-label-neutral'
          : 'text-label-alternative'
      )}
    >
      <div className={clsx('flex h-7 w-7 px-1 items-center justify-center', active ? 'bg-fill-strong rounded-sm' : ''  )}>
        {logo}
      </div>
      <div className="text-center caption1-medium">{label}</div>
    </div>
  );
};

export default MenuItem;
