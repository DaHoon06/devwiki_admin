import React from 'react';
import { useAppDispatch } from '@hooks/useRedux';
import { setModalOpen } from '@store/slices/modalSlice';

export type Element = React.MutableRefObject<HTMLDivElement>;

export default function useModalHook(ele: Element) {
  const dispatch = useAppDispatch();

  const onRequestClose = () => {
    dispatch(
      setModalOpen({
        type: '',
        modalType: 'fade',
        isOpen: false,
      })
    );
  };

  const outerClickEvent = (e: React.MouseEvent) => {
    const { target } = e;
    if (ele && ele.current) {
      const elements = ele.current.contains(target as Node);
      if (!elements) onRequestClose();
    }
  };

  return { onRequestClose, outerClickEvent };
}
