import type { Levels } from '@types';
import type { ModeResult } from '@interfaces';
import type { ModeProps, CombineModes, TurnProps } from './types';

class GameBot {
  private _easyMode({ buttons, botSymbol }: ModeProps): ModeResult {
    const btns = [...buttons];

    const indexes: number[] = btns.reduce((acc, elem, idx) => {
      if (!elem) {
        acc.push(idx);
      }

      return acc;
    }, []);

    const randomIdx = Math.floor(Math.random() * indexes.length);

    btns.splice(indexes[randomIdx], 1, botSymbol);

    return {
      buttons: btns,
      userTurn: true,
    };
  }

  private _mediumMode({ buttons, botSymbol }: ModeProps): ModeResult {
    console.log('medium mode');
    console.log(buttons);
    console.log(botSymbol);

    return {
      buttons,
      userTurn: true,
    };
  }

  private _hardMode({ buttons, botSymbol }: ModeProps): ModeResult {
    console.log('hard mode');
    console.log(buttons);
    console.log(botSymbol);

    return {
      buttons,
      userTurn: true,
    };
  }

  private _combineModes(): CombineModes {
    return {
      easy: this._easyMode,
      medium: this._mediumMode,
      hard: this._hardMode,
    };
  }

  private getMode(level: Levels) {
    return this._combineModes()[level];
  }

  public botTurn({ buttons, level, botSymbol }: TurnProps) {
    return this.getMode(level)({ buttons, botSymbol });
  }
}

export const gameBot = new GameBot();
