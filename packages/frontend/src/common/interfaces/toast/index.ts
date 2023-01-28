import type { TToastLevel } from '../../types';

export interface IToast {
  id: string;
  level: TToastLevel;
  description: string;
}

export interface IAddToast {
  level: TToastLevel;
  description: string;
}
