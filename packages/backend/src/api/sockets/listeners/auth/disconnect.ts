import type { Socket } from 'socket.io';
import type { InitServices } from '@services';

import { users } from '@sockets';

export function socketDisconnect({
  socket,
  services,
}: {
  socket: Socket;
  services: InitServices;
}): void {
  const { authService } = services;
  const userId = socket.data.userId;

  socket.on('disconnect', async () => {
    await authService.updateOnlineStatus({ userId, status: false });

    users.delete(socket.id);
  });
}
