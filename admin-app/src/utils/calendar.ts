/**
 * @param {Date} toDay
 * @param {Date | null} compareDay
 * @description 선택한 날짜와 오늘의 날짜가 같은지 확인
 */
export const isSameDay = (toDay: Date, compareDay?: Date | null): boolean => {
  return (
    toDay.getFullYear() === compareDay?.getFullYear() &&
    toDay.getMonth() === compareDay?.getMonth() &&
    toDay.getDate() === compareDay?.getDate()
  );
};

/**
 * @param {Date} currentMonth
 * @description 캘린더에 보여질 날짜 구하기
 */
export const getFullDays = (currentMonth: Date): Date[] => {
  const curMonthStartDate = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();
  const curMonthEndDate = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  );
  const prevMonthEndDate = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    0
  );
  const nextMonthStartDate = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    1
  );
  const days: Date[] = Array.from({ length: curMonthStartDate }, (_, i) => {
    return new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1,
      prevMonthEndDate.getDate() - i
    );
  }).reverse();

  days.push(
    ...Array.from(
      { length: curMonthEndDate.getDate() },
      (_, i) =>
        new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i + 1)
    )
  );

  const remainingDays = 7 - (days.length % 7);
  if (remainingDays < 7) {
    days.push(
      ...Array.from(
        { length: remainingDays },
        (_, i) =>
          new Date(
            nextMonthStartDate.getFullYear(),
            nextMonthStartDate.getMonth(),
            i + 1
          )
      )
    );
  }
  return days;
};
