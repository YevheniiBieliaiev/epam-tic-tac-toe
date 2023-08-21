import type { Socket } from 'socket.io';
import type { ExtendedError } from 'socket.io/dist/namespace';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';
import { HttpError, HttpStatusCode } from '@tic-tac-toe/shared';
import type { InitServices } from '@services';
import type { IJWTUserDTO } from '@interfaces';
import { ErrorMessages } from '@enums';
import type { TCookiesKeys } from '@types';
import { getEnv } from '@helpers';

interface SocketAuth {
  socket: Socket;
  next: (err?: ExtendedError) => void;
  services: InitServices;
}

export const socketAuth = async ({
  socket,
  next,
  services,
}: SocketAuth): Promise<void> => {
  const { refTokETTT } = <TCookiesKeys>(
    cookie.parse(socket.handshake.headers.cookie.toString())
  );

  try {
    const { id: userId } = <IJWTUserDTO>(
      jwt.verify(refTokETTT, getEnv('JWT_SECRET_REFRESH_TOKEN'))
    );

    const { authService } = services;

    const user = await authService.findUserById({ userId });
    if (!user.id) {
      return next(
        new HttpError({
          status: HttpStatusCode.UNAUTHORIZED,
          message: ErrorMessages.UNAUTHORIZED_SESSION,
        }),
      );
    }

    await authService.updateOnlineStatus({ userId, status: true });

    socket.data.userId = userId;
  } catch (e) {
    return next(
      new HttpError({
        status: HttpStatusCode.UNAUTHORIZED,
        message: ErrorMessages.UNAUTHORIZED_SESSION,
      }),
    );
  }

  return next();
};
