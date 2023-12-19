import { useAppSelector } from '@hooks/useRedux';
import { ModalHandler } from '@components/common/modal/ModalHandler';
import { AddSchedule } from '@components/schedules/AddSchedule';

export const ModalContainer = () => {
  const type = useAppSelector((state) => state.modalStore.modal.type);

  return (
    <ModalHandler>
      {type === 'addSchedule' && (
        <AddSchedule>
          <div>스케줄 등록 먼저</div>
        </AddSchedule>
      )}
    </ModalHandler>
  );
};
