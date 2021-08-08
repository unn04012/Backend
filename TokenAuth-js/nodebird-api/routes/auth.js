import express from 'express';
import passport from 'passport';
import bcrypt from 'bcrypt';
import { isLoggedIn, isNotLoggedIn } from './middlewares';
import User  from '../models/user';

export default class Auth{
  path = '/auth';
  router=  express.Router();

  constructor(){
    this.router.post('/join', isNotLoggedIn, this.createUser);
    this.router.post('/login', isNotLoggedIn, this.login);
    this.router.get('/logout', isLoggedIn, this.logout);
  }
  createUser = async (req, res, next) => {
    const { email, nick, password } = req.body;    
    try {
      const exUser = await User.findOne({ where: { email } });      
      if (exUser) {
        return res.redirect('/join?error=exist');
      }
      const hash = await bcrypt.hash(password, 12);
      await User.create({
        email,
        nick,
        password,
      });
      return res.redirect('/');
    } catch (error) {
      console.error(error);
      return next(error);
    }
  }

  login = async (req, res, next) => {    
    passport.authenticate('local', (authError, user, info) => {      
      if (authError) {
        console.error(authError);
        return next(authError);
      }
      if (!user) {
        return res.redirect(`/?loginError=${info.message}`);
      }
      return req.login(user, (loginError) => {
        if (loginError) {
          console.error(loginError);
          return next(loginError);
        }
        return res.redirect('/');
      });
    })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
  }
  logout = (req, res) => {
    req.logout();
    req.session.destroy();
    res.redirect('/');
  }
}


