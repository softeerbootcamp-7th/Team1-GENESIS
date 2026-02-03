import { useState } from 'react';
import { clsx } from 'clsx';

import Icon from '@/components/common/Icon';

const WEEK_DAYS = ['일', '월', '화', '수', '목', '금', '토'];

const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

export default function DateTimePicker() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const firstDay = new Date(year, month, 1);
  const startWeekDay = firstDay.getDay();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();

  const dates: Date[] = [];

  for (let i = startWeekDay - 1; i >= 0; i--) {
    dates.push(new Date(year, month - 1, prevMonthDays - i));
  }

  for (let i = 1; i <= daysInMonth; i++) {
    dates.push(new Date(year, month, i));
  }

  while (dates.length % 7 !== 0) {
    dates.push(new Date(year, month + 1, dates.length));
  }

  const selectedDateTime =
    selectedDate &&
    new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate(),
      hour,
      minute,
    );

  console.log('Selected DateTime:', selectedDateTime?.toISOString());

  return (
    <div className="rounded-modal-10 border-line-normal-normal bg-background-normal w-65 space-y-4 border p-4">
      <div className="flex items-center justify-between">
        <Icon
          iconName="ChevronBack"
          color="text-label-normal"
          width={20}
          height={20}
          onClick={() => setCurrentMonth(new Date(year, month - 1))}
        />
        <p className="text-label-normal headline2-bold">
          {year}년 {month + 1}월
        </p>
        <Icon
          iconName="ChevronForward"
          color="text-label-normal"
          width={20}
          height={20}
          onClick={() => setCurrentMonth(new Date(year, month + 1))}
        />
      </div>

      <div className="label2-medium text-label-neutral grid grid-cols-7 text-center">
        {WEEK_DAYS.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-2">
        {dates.map((date, idx) => {
          const isCurrentMonth = date.getMonth() === month;
          const isSelected = selectedDate && isSameDay(date, selectedDate);

          return (
            <button
              key={idx}
              onClick={() => setSelectedDate(date)}
              className={clsx(
                'figure-body2-14-semibold mx-auto flex h-7 w-8 items-center justify-center rounded-full',
                !isCurrentMonth && 'text-label-disable opacity-16',
                !isSelected &&
                  'hover:bg-inverse-label hover:text-primary-normal',
                isSelected && 'bg-primary-normal text-inverse-label',
              )}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-3">
        <select
          value={hour}
          onChange={(e) => setHour(Number(e.target.value))}
          className="rounded-lg border px-3 py-2"
        >
          {Array.from({ length: 24 }).map((_, i) => (
            <option key={i} value={i}>
              {i.toString().padStart(2, '0')}
            </option>
          ))}
        </select>

        <span className="text-gray-400">:</span>

        <select
          value={minute}
          onChange={(e) => setMinute(Number(e.target.value))}
          className="rounded-lg border px-3 py-2"
        >
          {Array.from({ length: 60 }).map((_, i) => (
            <option key={i} value={i}>
              {i.toString().padStart(2, '0')}
            </option>
          ))}
        </select>
      </div>

      {selectedDateTime && (
        <p className="label2-medium text-center text-gray-600">
          선택됨: {selectedDateTime.toLocaleString('ko-KR')}
        </p>
      )}
    </div>
  );
}
