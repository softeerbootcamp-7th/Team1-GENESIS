import { checkDateEqual } from '@/lib/date.utils';

type CalendarDayProps = {
  day: number;
  fullDate: Date;
  today: Date;
  isCurrentMonth: boolean;
  startDate: Date | null;
  endDate: Date | null;
  onDateClick: (date: Date) => void;
};

export const CalendarDay = ({
  day,
  fullDate,
  today,
  isCurrentMonth,
  startDate,
  endDate,
  onDateClick,
}: CalendarDayProps) => {
  const dayOfWeek = fullDate.getDay(); // 0: 일요일, 6: 토요일
  const isCheckIn = checkDateEqual(fullDate, startDate);
  const isCheckOut = checkDateEqual(fullDate, endDate);
  const isToday = checkDateEqual(fullDate, today);

  let isInRange = false;
  if (startDate && endDate) {
    const time = fullDate.getTime();
    if (time > startDate.getTime() && time < endDate.getTime()) {
      isInRange = true;
    }
  }

  const getRangeBackgroundClass = () => {
    const classes: string[] = [];

    if ((isCheckIn && endDate) || isInRange || isCheckOut) {
      classes.push('bg-primary-normal/8');
    } else if (isToday) {
      classes.push('bg-primary-normal/8 rounded-full');
    } else {
      return '';
    }

    if (isCheckIn && endDate) classes.push('rounded-l-full left-[2.4px]');
    if (isCheckOut) classes.push('rounded-r-full right-[2.4px]');
    if (dayOfWeek === 0 && !isCheckIn) classes.push('rounded-l-[0px]');
    if (dayOfWeek === 6 && !isCheckOut) classes.push('rounded-r-[0px]');

    return classes.join(' ');
  };

  const getSelectedCircleClass = () => {
    if (isCheckIn || isCheckOut) {
      return 'bg-primary-normal text-inverse-label rounded-full';
    }
    return '';
  };

  const dayColor =
    isInRange || isToday
      ? 'text-primary-normal'
      : isCurrentMonth
        ? 'text-label-normal'
        : 'text-label-disable';

  return (
    <button
      onClick={() => onDateClick(fullDate)}
      className={`figure-body2-15-semibold relative h-9 w-13 cursor-pointer p-[2.4px] text-center ${dayColor}`}
    >
      <div
        className={`absolute inset-y-[2.4px] right-0 left-0 ${getRangeBackgroundClass()}`}
      />
      <span
        className={`relative z-10 flex h-full w-full items-center justify-center ${getSelectedCircleClass()}`}
      >
        {day}
      </span>
    </button>
  );
};
