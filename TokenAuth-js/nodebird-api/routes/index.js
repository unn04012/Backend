import express from 'express';
import {v4 as uuidv4} from 'uuid';
import { User, Domain } from '../models';
import {isLoggedIn} from './middlewares';

export default class Index{
    path = '/';
    router = express.Router();
    constructor(){        
        this.router.get('/', this.index);
        this.router.post('/domain', isLoggedIn , this.createDomain);
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
/**
 * const router = express.Router();

router.get('/', async(req, res, next) => {
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
});

router.post('/domain', isLoggedIn, async (req, res, next) => {
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
});

module.exports = router;
 */
