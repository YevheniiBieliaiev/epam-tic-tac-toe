import { store, addToast, opponentData } from '@store';
import type { Opponent } from '@interfaces';

const dispatch = store.dispatch;

export function connectError(error: Error): void {
  dispatch(
    addToast({
      level: 'error',
      description: error.message,
    }),
  );
}

export function getOpponentData(opponent: Opponent): void {
  dispatch(opponentData(opponent));
}
