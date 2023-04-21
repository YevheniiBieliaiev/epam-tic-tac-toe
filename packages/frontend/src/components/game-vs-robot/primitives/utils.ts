import { WINNING_VARIANTS } from '@tic-tac-toe/shared';
import { store, setWinner, setBotScore, setTurn } from '@store';
import type { CheckWinProps } from './types';

export const checkWin = ({ buttons }: CheckWinProps) => {
  let winPositionIndex = 0;
  let winner = '';
  let draw = false;
  const areAllFilled = buttons.every((symb) => symb);

  while (winPositionIndex < WINNING_VARIANTS.length && !winner) {
    const boardPositionToCheck = WINNING_VARIANTS[winPositionIndex];
    const boardValusToCheck = boardPositionToCheck.map(
      (index) => buttons[index],
    );

    const checkingValue = boardValusToCheck[0];
    const isFinished = boardValusToCheck.every(
      (value) => value === checkingValue && checkingValue,
    );

    winner = isFinished ? checkingValue : null;
    winPositionIndex++;
  }

  if (winner) {
    store.dispatch(setWinner(winner === 'X' ? 'X' : 'O'));

    const isUserWon = store.getState().botGame.userSymbol === winner;
    store.dispatch(setBotScore(isUserWon ? 'won' : 'robotWon'));

    const turn = store.getState().botGame.userSymbol === 'X';
    store.dispatch(setTurn({ turn }));
  }

  draw = !winner && areAllFilled ? true : false;

  if (draw) {
    store.dispatch(setWinner('draw'));
    store.dispatch(setBotScore('draw'));

    const turn = store.getState().botGame.userSymbol === 'X';
    store.dispatch(setTurn({ turn }));
  }
};
