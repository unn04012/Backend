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
import ColorHash from 'color-hash';    





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

const sessionMiddleware = session({
  resave : false,
  saveUninitialized : false,
  secret : process.env.COOKIE_SECRET,
  cookie : {
    httpOnly: true,
    secure : false,
  }
})
const sessionColor = (req, res, next) => {
  if(!req.session.color){       
    const colorHash = new ColorHash();
    req.session.color = colorHash.hex(req.sessionID);
  }
  next();
};

const middlewares = [   
    morgan('dev'),
    express.static(path.join(__dirname, 'public')),
    express.json(),
    express.urlencoded({extended: false}),        
    cookieParser(process.env.COOKIE_SECRET),
    // session({
    //   resave: false,
    //   saveUninitialized: false,
    //   secret: process.env.COOKIE_SECRET,
    //   cookie: {
    //       httpOnly: true,
    //       secure: false,
    //   }
    // }),   
    sessionMiddleware,
    sessionColor,
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
const appClass = new App(appConfig);
const server = appClass.socketListen();
WebSocket(server, appClass.app, sessionMiddleware)
// const io = new Server(server); // socket.io 패키지를 불러와서 익스프레스 서버와 연결한다.
// io.on('connection', (socket) => {
//     console.log('a user connected');
// });
// WebSocket(server);

