import express from 'express';
import {v4 as uuidv4} from 'uuid';
import sequelize from '../models';
import User from '../models/user';
import Domain from '../models/domain';
import {isLoggedIn} from './middlewares';
import {FindUser, createDomain} from '../controllers/createDomain';
// import createDomain from '../controllers/createDomain';

export default class Index{
    path = '/';        
    router = express.Router();
    constructor(){        
        this.router.get('/', FindUser);
        this.router.post('/domain', isLoggedIn , createDomain);
    }
    
}
