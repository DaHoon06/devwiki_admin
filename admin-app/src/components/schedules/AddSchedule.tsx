import * as S from './AddSchedule.style';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

export const AddSchedule = (props: Props) => {
  const { children } = props;
  return (
    <S.AddScheduleModalLayout>
      <div>TEST</div>
      <div>TEST2</div>
      {children}
    </S.AddScheduleModalLayout>
  );
};
