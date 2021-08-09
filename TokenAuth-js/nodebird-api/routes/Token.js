import express from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import url from 'url';
import { verifyToken } from './middlewares';
import {createToken, test} from '../controllers/token';
import { urlencoded } from 'express';
import Domain from '../models/domain';
import User from '../models/user';


export default class Token{
    router = express.Router();
    path = '/token';

    constructor(){
        // this.router.use(this.allowServer);
        this.router.post('/create', createToken);
        this.router.get('/test', verifyToken, test);        
    }    
    
    allowServer = async (req, res, next) => {
        const domain = await Domain.findOne({
            where : {host : new URL(req.get('origin')).host}
        });    
        if(domain){
            cors({
                origin : req.get('origin'),
                credentials : true,
            })(req,res,next);
        }else{
            next();
        }
    }    
    
}
