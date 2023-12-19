import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface UtilityStore {
  sideMenuIsOpen: boolean;
}

const initialState: UtilityStore = {
  sideMenuIsOpen: false,
};

export const UtilitySlice = createSlice({
  name: 'utilityStore',
  initialState,
  reducers: {
    setSideBarIsOpen(state: UtilityStore, action: PayloadAction<boolean>) {
      state.sideMenuIsOpen = action.payload;
    },
  },
});

export const { setSideBarIsOpen } = UtilitySlice.actions;
