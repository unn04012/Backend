/**
 * const v1 = require('./routes/v1');
const passportConfig = require('./passport');
 */

import express from 'express';
import path from 'path';
import cookieParser  from 'cookie-parser';
import morgan from 'morgan';
import session from 'express-session';
import nunjucks from 'nunjucks';
import dotenv from 'dotenv';
import passport from 'passport';

import Auth from './routes/Auth'; 
import Index from './routes/Index';
import App from './app';
import {sequelize} from './models';
dotenv.config();
const app = express();


const routes = [
    new Auth(),
    new Index(),
]


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
    passport.initialize(),
    passport.session(), 
]



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


new App(appConfig).listen();