interface Props {
  isPrevMonth?: number;
  isNextMonth?: number;
  onClickEvent?: () => void;
  getSelectedDate?: (date: Date) => void;
}

export type CalendarProps = Props;
