import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import './ActivityMap.css';

// Veri tipini tanımlayın
interface IValue {
  date: Date;
  count: number;
}

function MyHeatmap() {
  const randomValues: IValue[] = getRange(200).map(index => {
    return {
      date: shiftDate(new Date(), -index),
      count: getRandomInt(0, 5),
    };
  });

  return (
    <CalendarHeatmap
      startDate={shiftDate(new Date(), -150)}
      endDate={new Date()}
      values={randomValues}
      classForValue={(value: IValue | null) => {
        if (!value || !value.count) {
          return 'color-empty';
        }
        return `color-scale-${value.count}`;
      }}
    />
  );
}

// Yardımcı fonksiyonlar
function getRange(count: number): number[] {
  return Array.from({ length: count }, (_, i) => i);
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shiftDate(date: Date, numDays: number): Date {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

export default MyHeatmap;
