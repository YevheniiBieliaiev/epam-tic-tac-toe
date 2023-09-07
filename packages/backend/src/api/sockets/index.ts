import type { Server } from 'socket.io';
import type { InitServices } from '@services';
import type { ISocketUser } from '@interfaces';
import { authSockets } from './auth';
import { gameSockets } from './game';

/**
 * key - socket id
 */
export const users = new Map<string, ISocketUser>();

export const socketsHandler = ({
  io,
  services,
}: {
  io: Server;
  services: InitServices;
}): void => {
  io.on('connection', async (socket) => {
    console.log('user connected');

    const socketId = socket.id;

    const user = await services.authService.findSocketUser({
      userId: socket.data.userId,
    });

    const userDTO: ISocketUser = {
      ...user,
    };

    users.set(socketId, userDTO);

    authSockets({ socket, services });
    gameSockets({ io, socket, services });
  });
};
