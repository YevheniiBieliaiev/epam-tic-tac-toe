import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'store/reducers';

const loading = (state: RootState) => state.profile.loading;
const profileLoader = (state: RootState) => state.profile.profileLoader;
const email = (state: RootState) => state.profile.email;
const passwordUpdatedAt = (state: RootState) => state.profile.passwordUpdatedAt;
const isActive = (state: RootState) => state.profile.isActive;

const isVerifiedEmail = createSelector(isActive, (isActive) => isActive);

export const profileLoading = createSelector(
  profileLoader,
  (profileLoader) => profileLoader,
);
export const loader = createSelector(loading, (loading) => loading);
export const userEmail = createSelector(email, (email) => email);
export const passwordUpdDate = createSelector(
  passwordUpdatedAt,
  (passwordUpdatedAt) => passwordUpdatedAt,
);
export const profileEmail = createSelector(
  [isVerifiedEmail, userEmail, loader],
  (isActive, email, loading) => ({ isActive, email, loading }),
);
