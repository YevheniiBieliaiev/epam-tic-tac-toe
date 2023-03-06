import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'store/reducers';

const toastList = (state: RootState) => state.toast.toastList;

export const toastStack = createSelector(toastList, (toastList) => toastList);
