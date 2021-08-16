import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import WebSocket from './socket';

import Index from './routes/Index';

import App from './app';

import { Server } from "socket.io";
import connect from './schemas';





dotenv.config();
connect();
 

/**
 * DEFINE ROUTES
 * @OBJECT
 */
const routes = [    
    new Index(),    
];

/**
 * DEFINE MIDDLEWARES
 */

const middlewares = [   
    morgan('dev'),
    express.static(path.join(__dirname, 'public')),
    express.json(),
    express.urlencoded({extended: false}),        
    cookieParser(process.env.COOKIE_SECRET),
    session({
      resave: false,
      saveUninitialized: false,
      secret: process.env.COOKIE_SECRET,
      cookie: {
          httpOnly: true,
          secure: false,
      }
    }),   
];

/**
 * DEFINE SETTINGS FOR express().set
 */

const settings = [
  {key : 'port', value : process.env.PORT || 3000},
  {key : 'view engine', value : 'html'},
]

const appConfig = {
    routes : routes,
    middlewares : middlewares,
    settings : settings,    
};

// CREATE SERVER
const server = new App(appConfig).socketListen();
WebSocket(server)
// const io = new Server(server); // socket.io 패키지를 불러와서 익스프레스 서버와 연결한다.
// io.on('connection', (socket) => {
//     console.log('a user connected');
// });
// WebSocket(server);

