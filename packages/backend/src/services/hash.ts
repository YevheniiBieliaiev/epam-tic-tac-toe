import { pbkdf2Sync, randomBytes } from 'crypto';
import type { AuthRepository } from '@repositories';
import type { IUserHashes } from '@interfaces';

export class HashService {
  private _authRepository: AuthRepository;

  private _iterations = 92716;

  private _keylen = 128;

  private _digest = 'sha512';

  private _passwordSaltSize = 128;

  private _generateSalt(size: number): string {
    return randomBytes(size).toString('hex');
  }

  private _generatePasswordHash(password: string, salt: string): string {
    return pbkdf2Sync(
      password,
      salt,
      this._iterations,
      this._keylen,
      this._digest,
    ).toString('hex');
  }

  constructor({ authRepository }: { authRepository: AuthRepository }) {
    this._authRepository = authRepository;
  }

  public setPassword({ password }: { password: string }): IUserHashes {
    const salt = this._generateSalt(this._passwordSaltSize);
    const passwordHash = this._generatePasswordHash(password, salt);

    return {
      salt,
      passwordHash,
    };
  }

  public async checkPassword({
    userId,
    password,
  }: {
    userId: string;
    password: string;
  }): Promise<boolean> {
    const { salt, passwordHash } = await this._authRepository.getUserHashes({
      userId,
    });

    return passwordHash === this._generatePasswordHash(password, salt);
  }
}
