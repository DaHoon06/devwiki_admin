import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export namespace Modal {
  const MODAL_TYPE = {
    FADE: 'fade',
    BOTTOM_SLIDE: 'bottom-slide',
  };
  type ModalType = (typeof MODAL_TYPE)[keyof typeof MODAL_TYPE];

  export interface State {
    type: string;
    modalType: ModalType;
    isOpen: boolean;
  }

  export interface SliceState {
    modal: State;
  }
}

const initialState: ModalStore = {
  modal: {
    type: '',
    modalType: 'fade',
    isOpen: false,
  },
};

export const ModalSlice = createSlice({
  name: 'modalStore',
  initialState,
  reducers: {
    setModalOpen(state: ModalStore, action: PayloadAction<State>) {
      state.modal = action.payload;
    },
  },
});

export type ModalStore = Modal.SliceState;
export type State = Modal.State;

export const { setModalOpen } = ModalSlice.actions;
