import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { IToast } from '@interfaces';
import { addToast } from './actions';

interface ToastList {
  toastList: IToast[];
}

const initialState: ToastList = {
  toastList: [],
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    deleteToast(state, action: PayloadAction<{ toastId: string }>) {
      state.toastList = state.toastList.filter(
        (toast) => toast.id !== action.payload.toastId,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToast, (state, { payload }) => {
      state.toastList = [payload, ...state.toastList];
    });
  },
});

export const toastReducer = toastSlice.reducer;

export const { deleteToast } = toastSlice.actions;
