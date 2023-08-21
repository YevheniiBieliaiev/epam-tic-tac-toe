import type { ISocketUserData } from '../user';

export interface ISocketUser extends ISocketUserData {
  inGame: boolean;
}
