/**
 * const v1 = require('./routes/v1');
const passportConfig = require('./passport');
 */

import express from 'express';
import path from 'path';
import morgan from 'morgan';
import dotenv from 'dotenv';

import IndexRouter from './routes';
import UsersRouter from './routes/users';
import CommentsRouter from './routes/comments';

import App from './app';


dotenv.config();

/**
 * DEFINE MODELS
 * @OBJECT
 * name : modelName;
 * value : modelObject
 */

//  const models = [
//     {name : 'User',   value : User},
//     {name : 'Domain', value : Domain},
//  ];
  
// const model = new modelIndex(models);
  



//  model.db.sequelize.sync({ force: false })
//       .then(() => {
//         console.log('데이터베이스 연결 성공');
//       })
//       .catch((err) => {
//         console.error(err);
//  });

/**
 * DEFINE ROUTES
 * @OBJECT
 */
const routes = [    
    new IndexRouter(),    
    new UsersRouter(),
    new CommentsRouter(),
];

/**
 * DEFINE MIDDLEWARES
 */

const middlewares = [
    morgan('dev'),
    express.static(path.join(__dirname, 'public')),
    express.json(),
    express.urlencoded({extended: false}),        
]

/**
 * DEFINE SETTINGS FOR express().set
 */

const settings = [
  {key : 'port', value : process.env.PORT || 8002},
  {key : 'view engine', value : 'html'},
]

const appConfig = {
    routes : routes,
    middlewares : middlewares,
    settings : settings,
    port : process.env.PORT || 3000,
};

// CREATE SERVER
new App(appConfig).listen();