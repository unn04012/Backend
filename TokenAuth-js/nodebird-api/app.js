import express from 'express';
import nunjucks from 'nunjucks';
import {sequelize} from './models';
import passportConfig from './passport';

/**
 * const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const morgan = require('morgan');
const session = require('express-session');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');
dotenv.config();
const authRouter = require('./routes/Auth');
const indexRouter = require('./routes/Index');
const v1 = require('./routes/v1');
const { sequelize } = require('./models');
const passportConfig = require('./passport');
 */


export default class App{
  app = express();  
  port;
  constructor(appConfig){
    this.port = appConfig.port;        
    this.applySettings(appConfig.settings);
    passportConfig();
    nunjucks.configure('views', { // 폴더 경로
      express: this.app,
      watch: true,
    });
    sequelize.sync({ force: false })
      .then(() => {
        console.log('데이터베이스 연결 성공');
      })
      .catch((err) => {
        console.error(err);
    });
    this.applyRoutes(appConfig.routes);    
    this.applyMiddlewares(appConfig.middlewares);
    this.app.use(this.notFoundError)
    this.app.use(this.serverError);
  }

  applySettings(settings){
    settings.forEach(setting => {
      this.app.set(setting.key, setting.value);
    })
  }

  applyRoutes(routes){
    routes.forEach(route => {          
      this.app.use(route.path, route.router);
    })
  }

  applyMiddlewares(middlewares){
    middlewares.forEach(middleware => {      
      this.app.use(middleware);
    })
  }

  notFoundError = (req, res, next) => {
    const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
  }

  serverError = (err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
  }
  

  listen(){
    this.app.listen(this.port, () => {
      console.log(this.port, '번 포트에서 대기중');
    });
  }
}
/**
 * const app = express();
passportConfig();
app.set('port', process.env.PORT || 8002);
app.set('view engine', 'html');
nunjucks.configure('views', { // 폴더 경로
  express: app,
  watch: true,
});
sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
});

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);
app.use('/', indexRouter);
app.use('/v1', v1);

app.use((req, res, next) => {
  const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});

 */
