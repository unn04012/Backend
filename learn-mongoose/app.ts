import express from 'express';
import nunjucks from 'nunjucks';
import path from 'path';
import morgan from 'morgan';

import connect from './schemas';


export default class App{
  public app : express.Application = express();    
  public port;  
  constructor(appConfig : any){    
    nunjucks.configure('views', { // 폴더 경로
      express: this.app,
      watch: true,
    }); 
    connect();
    this.port = appConfig.port;        
    this.applySettings(appConfig.settings);
    this.applyMiddlewares(appConfig.middlewares);           
    this.applyRoutes(appConfig.routes);        
    this.app.use(this.notFoundError);
    this.app.use(this.serverError);
  }
  

  applySettings(settings : Array<any>){
    settings.forEach(setting => {
      this.app.set(setting.key, setting.value);
    })
  }

  applyRoutes(routes : Array<any>){
    routes.forEach(route => {          
      this.app.use(route.path, route.router);
    })
  }

  applyMiddlewares(middlewares : Array<any>){
    middlewares.forEach(middleware=> {      
      this.app.use(middleware);
    })
  }

  notFoundError = (req : express.Request, res : express.Response, next : any) => {
    const error : any =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
  }

  serverError = (err : any, req : any, res : any, next : any) => {
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