import { AnimatePresence } from 'framer-motion';
import React, { ReactElement } from 'react';
import { Button } from '@components/common/Button';
import * as S from '@components/common/modal/style';
import * as F from '@components/common/modal/slide/BottomSlideModal.style';
import { ModalProps } from '@components/common/modal/ModalHandler';
import useModalHook from '@hooks/useModalHook';

export const BottomSlideModal = (props: ModalProps): ReactElement => {
  const { isOpen, children, ele } = props;
  const { onRequestClose, outerClickEvent } = useModalHook(ele);

  return (
    <AnimatePresence>
      {isOpen && (
        <S.ModalLayout
          key={'bottom-modal-key'}
          onClick={outerClickEvent}
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          <F.ModalContainer
            initial={{ opacity: 1, y: 700 }}
            transition={{ ease: [0.17, 0.67, 0.83, 1] }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 700,
            }}
          >
            <F.ModalBody ref={ele}>
              <S.ModalCloseButtonWrapper>
                <Button
                  aria-label={'modal-close-button'}
                  variant={'icon'}
                  onClick={onRequestClose}
                >
                  x
                </Button>
              </S.ModalCloseButtonWrapper>
              <S.ModalContentsBox>{children}</S.ModalContentsBox>
            </F.ModalBody>
          </F.ModalContainer>
        </S.ModalLayout>
      )}
    </AnimatePresence>
  );
};
