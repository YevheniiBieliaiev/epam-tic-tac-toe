import express, { urlencoded, json } from 'express';
import { Server } from 'socket.io';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { prismaClient } from '@data';
import { getEnv } from '@helpers';
import { initRepositories } from '@repositories';
import { initServices } from '@services';
import { initRoutes } from '@routes';
import { socketsHandler } from '@sockets';
import { errorHandler, loggerHandler, socketAuth } from '@middlewares';
import { envError } from '@validation';

const app = express();
const port = getEnv('PORT');

const socketPort = +getEnv('SOCKETS_PORT');

const repositories = initRepositories({ prismaClient });
const services = initServices({ repositories });
const routes = initRoutes({ services });

//to check db connection (dev mode) - use http://localhost:${port}/health

app
  .use(cors())
  .use(cookieParser())
  .use(loggerHandler)
  .use(json())
  .use(urlencoded({ extended: true }))
  .use(routes)
  .use(errorHandler)
  .on('close', () => prismaClient.$disconnect())
  .listen(port, () => {
    envError
      ? (console.log(`ENV error: ${envError.details[0].message}`),
        process.exit(1))
      : console.log(`Server is running on port ${port}`);
  });

const io = new Server(socketPort, {
  cors: {
    origin: true,
    credentials: true,
  },
  cookie: true,
});

io.use((socket, next) => {
  socketAuth({ socket, next, services });
});

socketsHandler({ io, services });
