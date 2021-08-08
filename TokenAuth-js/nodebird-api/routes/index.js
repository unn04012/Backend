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
    index = async(req, res, next) => {
        try{              
            const user = await User.findOne({
                where : {id : req.user && req.user.id || null},
                include : {model : Domain},
            });            
            res.render('login', {
                user,
                domains : user && user.Domains,
            });
        }catch(err){
            console.error(err);
            next(err);
        }
    }
    createDomain = async (req, res, next) => {
        try{
            await Domain.create({
                UserId : req.user.id,
                host : req.body.host,
                type : req.body.type,
                clientSecret : uuidv4(),
            });
            res.redirect('/');
        }catch(err){
            console.error(err);
            next(err);
        }
    }
}
