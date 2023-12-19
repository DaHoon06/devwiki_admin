import { ReactElement, useState } from 'react';
import * as S from './Calendar.style';
import { Typography } from '@components/common/Typography';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';
import { getFullDays, isSameDay } from '@utils/calendar';
import { CalendarProps } from '@type/calendar';
import classNames from 'classnames';

export const Calendar = (props: CalendarProps): ReactElement => {
  const { isNextMonth, isPrevMonth, onClickEvent, getSelectedDate } = props;
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const prevCalendar = () => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() - 1,
        currentMonth.getDate()
      )
    );
  };

  const nextCalendar = () => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + 1,
        currentMonth.getDate()
      )
    );
  };

  const getDays = (calendarDays: Date[]) => {
    return calendarDays.map((day: Date, i: number) => {
      if (day.getMonth() < currentMonth.getMonth()) {
        return (
          <td key={i} className="prev_month">
            <S.DayWrapper>{isPrevMonth ? day.getDate() : ''}</S.DayWrapper>
          </td>
        );
      }
      if (day.getMonth() > currentMonth.getMonth()) {
        return (
          <td key={i} className="next_month">
            <S.DayWrapper>{isNextMonth ? day.getDate() : ''}</S.DayWrapper>
          </td>
        );
      }
      if (day < today) {
        return (
          <td
            key={i}
            className={`${isSameDay(day, selectedDay) && 'selected_day'}`}
            onClick={() => onClickDay(day)}
          >
            <S.DayWrapper>
              <Typography as={'span'} $weight={'bold'} $color={'textPrimary'}>
                {day.getDate()}
              </Typography>
            </S.DayWrapper>
          </td>
        );
      }
      return (
        <td
          key={i}
          className={classNames(
            `${isSameDay(day, selectedDay) && 'selected_day'}`,
            `${isSameDay(today, day) && 'today'}`
          )}
          onClick={() => onClickDay(day)}
        >
          <S.DayWrapper>
            <Typography as={'span'} $weight={'bold'} $color={'textPrimary'}>
              {day.getDate()}
            </Typography>
          </S.DayWrapper>
        </td>
      );
    });
  };

  const divideWeek = (calendarTags: JSX.Element[]) => {
    return calendarTags.reduce(
      (acc: JSX.Element[][], day: JSX.Element, i: number) => {
        if (i % 7 === 0) acc.push([day]);
        else acc[acc.length - 1].push(day);
        return acc;
      },
      []
    );
  };

  const calendarFullDays = getFullDays(currentMonth);
  const calendarDays = getDays(calendarFullDays);
  const calendarRows = divideWeek(calendarDays);
  const onClickDay = (day: Date) => {
    if (isSameDay(day, selectedDay)) {
      setSelectedDay(null);
    } else {
      setSelectedDay(day);
    }

    if (getSelectedDate) getSelectedDate(day);
    if (onClickEvent) onClickEvent();
  };
  return (
    <S.CalendarLayout className="calendar">
      <S.CalendarLabelContainer>
        <button aria-label={'previous-month-button'} onClick={prevCalendar}>
          <GrFormPreviousLink size={30} color={'#545454'} />
        </button>
        <Typography $color={'textPrimary'} $weight={'bold'} $variant={'h2'}>
          {currentMonth.getFullYear()}년 {currentMonth.getMonth() + 1}월
        </Typography>
        <button aria-label={'next-month-button'} onClick={nextCalendar}>
          <GrFormNextLink size={30} color={'#545454'} />
        </button>
      </S.CalendarLabelContainer>

      <S.CalendarTable>
        <thead>
          <tr>
            {daysOfWeek.map((day, i) => (
              <th key={i}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendarRows.map((row: JSX.Element[], i: number) => (
            <tr key={i}>{row}</tr>
          ))}
        </tbody>
      </S.CalendarTable>
    </S.CalendarLayout>
  );
};
