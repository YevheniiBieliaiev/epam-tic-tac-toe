import type { Socket } from 'socket.io-client';
import { socket } from './initial';
import { connectError } from './listeners';

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

  public connectError(): void {
    this.socket.on('connect_error', connectError);
  }

  public opponentTurn(mountType: MountType): void {
    switch (mountType) {
      case 'listening':
        this.socket.on('opponent_turn', () => {
          console.log('turn');
        });
        break;

      case 'unmounted':
        this.socket.off('opponent_turn', () => {
          console.log('turn');
        });
        break;
    }
  }
}

export const socketEvents = new SocketEvents({ socket });
