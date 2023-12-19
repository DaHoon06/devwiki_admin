import React from 'react';
import { useAppDispatch } from '@hooks/useRedux';
import { setSideBarIsOpen } from '@store/slices/utilitySlces';

export type Element = React.MutableRefObject<HTMLDivElement>;

export default function useMenuHook(ele: Element) {
  const dispatch = useAppDispatch();

  const onRequestClose = () => {
    dispatch(setSideBarIsOpen(false));
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
