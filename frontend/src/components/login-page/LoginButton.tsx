import { Link } from '@tanstack/react-router';
import { clsx } from 'clsx';

interface LoginButtonProps {
  text: string;
  bgColor: string;
  textColor: string;
  Icon: React.ComponentType<{ className: string }>;
  to: string;
}

const LoginButton = ({
  text,
  bgColor,
  textColor,
  Icon,
  to,
}: LoginButtonProps) => (
  <Link to={to} className="mx-auto block w-81.25">
    <div
      className={clsx(
        'flex items-center justify-center gap-3.5 rounded-lg py-[11.5px]',
        bgColor,
        textColor,
      )}
    >
      <Icon className="h-4.5 w-4.5" />
      <span className="text-[15px] font-semibold">{text}</span>
    </div>
  </Link>
);

export default LoginButton;
