import type { ICandidate } from '@tic-tac-toe/shared';

export class SignUpDTO implements ICandidate {
  readonly nickname: string;

  readonly email: string;

  readonly password: string;

  constructor({ nickname, email, password }: ICandidate) {
    this.nickname = nickname;
    this.email = email;
    this.password = password;
  }
}
