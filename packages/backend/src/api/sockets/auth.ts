import type { Socket } from 'socket.io';
import type { InitServices } from '@services';
import { socketDisconnect } from './listeners/auth';

export function authSockets({
  socket,
  services,
}: {
  socket: Socket;
  services: InitServices;
}): void {
  socketDisconnect({ socket, services });
}
