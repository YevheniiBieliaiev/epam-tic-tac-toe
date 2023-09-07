import type { Server, Socket } from 'socket.io';
import { v4 as uuidv4 } from 'uuid';
import { EventsName } from '@tic-tac-toe/shared';
import type { InitServices } from '@services';
import type { Room } from '@interfaces';
import { getRandomIntInclusive } from '@helpers';

import { users } from './index';

const randomOrder: Room[] = [];

export const gameSockets = ({
  io,
  socket,
  services,
}: {
  io: Server;
  socket: Socket;
  services: InitServices;
}): void => {
  console.log(services);
  socket.on(EventsName.RANDOM_OPPONENT, () => {
    const freeRooms = randomOrder.filter(
      (room) =>
        room.status === EventsName.RANDOM_OPPONENT && room.opponents.length < 2,
    );

    if (!freeRooms.length) {
      const roomName = uuidv4();

      const newRoom: Room = {
        roomName,
        status: 'random_opponent',
        board: Array(9).fill(''),
        opponents: [
          {
            socketId: socket.id,
            symbol: getRandomIntInclusive(0, 1) ? 'X' : 'O',
          },
        ],
      };

      randomOrder.push(newRoom);

      socket.join(roomName);
    } else {
      const idx = Math.floor(Math.random() * freeRooms.length);
      const chosenRoom = freeRooms[idx];

      const opponentSymbol = chosenRoom.opponents[0].symbol;

      chosenRoom.opponents.push({
        socketId: socket.id,
        symbol: opponentSymbol === 'X' ? 'O' : 'X',
      });

      socket.join(chosenRoom.roomName);

      io.to(chosenRoom.opponents[0].socketId).emit(
        EventsName.OPPONENT_JOINED,
        users.get(socket.id),
      );

      io.to(socket.id).emit(
        EventsName.OPPONENT_JOINED,
        users.get(chosenRoom.opponents[0].socketId),
      );
    }
  });
};

/*
    3. emits Event 'cast_lots' and broadcasts user data to opponent
    4. sets user Game Symbolo X or O

    5. start the game
    6. emit info about user turn

    9. waiting for opponent - timer for 60 sec then del room and refind free room or recreate
    10. steps from 3, 4, 5, 6

    FINISH => who won?
    1. if leave +1 point to won of opponent, +1 to lose of leaver
    2. if lose +1 point to won of opponent, +1 to lose of loser
    3. auto saving of result in DB;

    WHAT if they want play again together
    1. Emit question
    2. And depends of result restart with 3, 4, 5, 6 steps from room joining
    3. Or delete user from room

    REFIND => steps from 1-10
    */
