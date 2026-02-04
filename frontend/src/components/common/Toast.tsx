import { Icons } from '@/assets';

interface ToastProps {
  type: 'success' | 'error';
  message: string;
}

const ICON_MAP = {
  success: Icons.CheckmarkCircle,
  error: Icons.AlertCircle,
} as const;

const Toast = ({ type, message = '텍스트' }: ToastProps) => {
  const Icon = ICON_MAP[type];

  return (
    <div className="bg-inverse-background/50 bg-backdrop-blur-32 flex w-105 gap-3 rounded-xl px-4 py-2.75">
      <Icon className="h-5.5 w-5.5" />
      <span className="body2-normal-bold text-inverse-label">{message}</span>
    </div>
  );
};

export default Toast;
