import { io } from 'socket.io-client';

const URL = process.env.REACT_APP_WEBSOCKETS_API_URL;

export const socket = io(URL, {
  autoConnect: false,
  withCredentials: true,
  secure: true,
});
