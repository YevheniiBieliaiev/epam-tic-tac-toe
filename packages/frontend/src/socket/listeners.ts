import { store, addToast } from '@store';

export function connectError(error: Error): void {
  const dispatch = store.dispatch;

  dispatch(
    addToast({
      level: 'error',
      description: error.message,
    }),
  );
}
