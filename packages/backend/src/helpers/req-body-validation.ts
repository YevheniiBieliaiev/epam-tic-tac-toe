import {
  createAccountSchema,
  updateEmailSchema,
  updateNicknameSchema,
  updatePasswordSchema,
} from '@validation';
import { HttpError, HttpStatusCode } from '@tic-tac-toe/shared';

export const validateAccountData = ({
  nickname,
  email,
  password,
}: {
  nickname: string;
  email: string;
  password: string;
}): void => {
  const data = {
    nickname,
    email,
    password,
  };

  const { error } = createAccountSchema.validate(data);

  if (error) {
    throw new HttpError({
      status: HttpStatusCode.BAD_REQUEST,
      message: error.message,
    });
  }
};

export const validateEmail = ({ email }: { email: string }): void => {
  const { error } = updateEmailSchema.validate({ email });

  if (error) {
    throw new HttpError({
      status: HttpStatusCode.BAD_REQUEST,
      message: error.message,
    });
  }
};

export const validateNickname = ({ nickname }: { nickname: string }): void => {
  const { error } = updateNicknameSchema.validate({ nickname });

  if (error) {
    throw new HttpError({
      status: HttpStatusCode.BAD_REQUEST,
      message: error.message,
    });
  }
};

export const validatePassword = ({ password }: { password: string }): void => {
  const { error } = updatePasswordSchema.validate({ password });

  if (error) {
    throw new HttpError({
      status: HttpStatusCode.BAD_REQUEST,
      message: error.message,
    });
  }
};
