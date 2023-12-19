import {
  combineReducers,
  configureStore,
  ThunkAction,
  Action,
  AnyAction,
  CombinedState,
  Reducer,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { UtilitySlice, UtilityStore } from '@store/slices/utilitySlces';
import { ModalSlice, ModalStore } from '@store/slices/modalSlice';

export interface RootState {
  utilityStore: UtilityStore;
  modalStore: ModalStore;
}

const RootReducer = (
  state: RootState,
  action: AnyAction
): CombinedState<RootState> => {
  const combineReducer = combineReducers({
    [UtilitySlice.name]: UtilitySlice.reducer,
    [ModalSlice.name]: ModalSlice.reducer,
  });
  return combineReducer(state, action);
};

const makeStore = () =>
  configureStore({
    reducer: RootReducer as Reducer<CombinedState<RootState>, AnyAction>,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  });

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
