import type { Socket } from 'socket.io-client';
import { EventsName } from '@tic-tac-toe/shared';
import { socket } from './initial';
import { connectError, getOpponentData } from './listeners';

type MountType = 'listening' | 'unmounted';

class SocketEvents {
  private socket: Socket;

  constructor({ socket }: { socket: Socket }) {
    this.socket = socket;
  }

  public connect(): void {
    this.socket.connect();
  }

  public disconnect(): void {
    this.socket.disconnect();
  }

  public onConnectError(): void {
    this.socket.on(EventsName.CONNECT_ERROR, connectError);
  }

  public emitRandomOpponent(): void {
    this.socket.emit(EventsName.RANDOM_OPPONENT);
  }

  public onGetOpponentData(mountType: MountType): void {
    switch (mountType) {
      case 'listening':
        this.socket.on(EventsName.OPPONENT_JOINED, getOpponentData);
        break;

      case 'unmounted':
        this.socket.off(EventsName.OPPONENT_JOINED, getOpponentData);
        break;
    }
  }
}

export const socketEvents = new SocketEvents({ socket });
