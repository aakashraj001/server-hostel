import React, { useState } from 'react';
import { addDays, format, isWithinInterval, startOfMonth, endOfMonth, addMonths, subMonths, startOfWeek, endOfWeek } from 'date-fns';
import '../assets/styles/calender.css';

interface Range {
  startDate: Date;
  endDate: Date;
}

const Calender: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedRange, setSelectedRange] = useState<Range>({
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
  });
  const [isSelecting, setIsSelecting] = useState(false);

  const renderHeader = () => {
    const monthName = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();
    return (
      <div className="calendar-header">
        <button onClick={prevMonth}>Prev</button>
        <div>{`${monthName} ${year}`}</div>
        <button onClick={nextMonth}>Next</button>
      </div>
    );
  };

  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const handleDateClick = (date: Date) => {
    if (!isSelecting) {
      setSelectedRange({ startDate: date, endDate: date });
      setIsSelecting(true);
    } else {
      setSelectedRange(prev => ({
        startDate: prev.startDate,
        endDate: date,
      }));
      setIsSelecting(false);
    }
  };

  const renderDaysOfWeek = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
      <div className="calendar-days">
        {daysOfWeek.map(day => (
          <div key={day} className="calendar-day">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderDates = () => {
    const dates = [];
    const startOfCurrentMonth = startOfMonth(currentDate);
    const endOfCurrentMonth = endOfMonth(currentDate);
    const startDate = startOfWeek(startOfCurrentMonth);
    const endDate = endOfWeek(endOfCurrentMonth);

    let date = startDate;
    while (date <= endDate) {
      const formattedDate = format(date, 'd');
      const isSelected = isWithinInterval(date, {
        start: selectedRange.startDate,
        end: selectedRange.endDate,
      });

      dates.push(
        <div key={date.toString()} className={`calendar-date ${isSelected ? 'selected' : ''}`} onClick={() => handleDateClick(date)}>
          {formattedDate}
        </div>,
      );
      date = addDays(date, 1);
    }

    return <div className="calendar-dates">{dates}</div>;
  };

  return (
    <div className="calendar">
      {renderHeader()}
      {renderDaysOfWeek()}
      {renderDates()}
    </div>
  );
};

export default Calender;
