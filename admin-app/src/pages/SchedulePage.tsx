import { ReactElement } from 'react';
import { Calendar } from '@components/schedules/calendar/Calendar';
import { CardUi } from '@components/ui/card/Card';
import { setModalOpen, State } from '@store/slices/modalSlice';
import { useAppDispatch } from '@hooks/useRedux';

export const SchedulePage = (): ReactElement => {
  const dispatch = useAppDispatch();

  const addSchedule = (date?: Date) => {
    const modalState: State = {
      type: 'addSchedule',
      modalType: 'default',
      isOpen: true,
    };
    dispatch(setModalOpen(modalState));
  };
  return (
    <CardUi label={'일정 관리'}>
      <Calendar
        isPrevMonth={new Date().getDate() - 1}
        isNextMonth={new Date().getDate() + 1}
        onClickEvent={addSchedule}
        getSelectedDate={addSchedule}
      />
    </CardUi>
  );
};
