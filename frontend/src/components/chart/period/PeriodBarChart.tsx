import { useId } from 'react';
import { motion } from 'framer-motion';

import {
  type PeriodData,
  TOTAL_ANIMATION_DURATION,
} from '@/components/chart/chartType';

import { cn } from '@/lib/utils';

interface PeriodBarChartProps {
  data: PeriodData[];
  className?: string;
  barColor?: string;
  bgColor?: string;
  animate?: boolean;
}

const BAR_WIDTH = 15;
const CHART_HEIGHT = 145;
const PADDING_TOP = 16;
const DRAW_HEIGHT = CHART_HEIGHT - PADDING_TOP;
const RADIUS = 0;

/**
 * 기간별 지출 차트 — 세로 막대 차트
 * 각 막대 뒤에 배경 바가 깔려 있고, 그 위에 실제 지출 비율 막대가 올라옴
 */
const PeriodBarChart = ({
  data,
  className,
  barColor = 'var(--color-primary-normal)',
  bgColor = 'var(--color-fill-strong)',
  animate = true,
}: PeriodBarChartProps) => {
  const clipId = useId();
  const maxValue = Math.max(1, ...data.map((d) => d.value));

  return (
    <div className={cn('flex w-full flex-col gap-2', className)}>
      {/* 차트 영역 */}
      <div className="flex w-full items-end justify-between">
        {data.map((item, idx) => {
          const ratio = item.value / maxValue;
          const barHeight = Math.round(ratio * DRAW_HEIGHT);

          return (
            <div
              key={item.label}
              className="flex flex-1 flex-col items-center gap-2.5"
            >
              {/* 막대 */}
              <div
                className="relative flex items-end justify-center"
                style={{ width: BAR_WIDTH, height: CHART_HEIGHT }}
              >
                {/* 배경 바 (항상 full height) */}
                <svg
                  width={BAR_WIDTH}
                  height={CHART_HEIGHT}
                  className="absolute inset-0"
                >
                  <rect
                    x={0}
                    y={0}
                    width={BAR_WIDTH}
                    height={CHART_HEIGHT}
                    rx={RADIUS}
                    ry={RADIUS}
                    fill={bgColor}
                  />
                </svg>

                {/* 실제 값 바 */}
                {barHeight > 0 && (
                  <svg
                    width={BAR_WIDTH}
                    height={CHART_HEIGHT}
                    className="absolute inset-0"
                  >
                    <defs>
                      <clipPath id={`${clipId}-${idx}`}>
                        <motion.rect
                          x={0}
                          width={BAR_WIDTH}
                          initial={
                            animate
                              ? { y: CHART_HEIGHT, height: 0 }
                              : { y: 0, height: CHART_HEIGHT }
                          }
                          animate={{ y: 0, height: CHART_HEIGHT }}
                          transition={
                            animate
                              ? {
                                  duration: TOTAL_ANIMATION_DURATION,
                                  ease: 'easeOut',
                                }
                              : { duration: 0 }
                          }
                        />
                      </clipPath>
                    </defs>
                    <g clipPath={`url(#${clipId}-${idx})`}>
                      <rect
                        x={0}
                        y={CHART_HEIGHT - barHeight}
                        width={BAR_WIDTH}
                        height={barHeight}
                        rx={RADIUS}
                        ry={RADIUS}
                        fill={barColor}
                      />
                    </g>
                  </svg>
                )}
              </div>

              {/* 라벨 */}
              <span className="figure-caption1-medium text-label-alternative text-center whitespace-nowrap">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PeriodBarChart;
