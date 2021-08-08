import express from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import url from 'url';
import { verifyToken } from './middlewares';
import { urlencoded } from 'express';
import Domain from '../models/domain';
import User from '../models/user';


export default class Token{
    router = express.Router();
    path = '/token';

    constructor(){
        this.router.use(this.allowServer);
        this.router.post('/create', this.createToken);
        this.router.get('/test', verifyToken, this.test);        
    }    

    createToken = async(req, res) => {                
        const {clientSecret} = req.body;        
        try{
            const domain = await Domain.findOne({
                where : {clientSecret},
                include : {
                    model : User,
                    attribute : ['nick', 'id'],
                },
            });                       
            if(!domain) {                
                return res.json({
                    code : 401,
                    message : '등록되지 않은 도메인입니다. 먼저 도메인을 등록하세요',
                });
            }
            const token = jwt.sign({
                id : domain.User.id,
                nick : domain.User.nick,
            }, process.env.JWT_SECRET, {
                expiresIn : '1m',
                issuer: 'nodebird',
            });
            return res.json({
                code : 200,
                message : '토큰이 발급되었습니다.',
                token,
            });
        }catch(error){
            console.error(error);
            return res.status(500).json({
                code : 500,
                message : '서버 에러',
            });
        }    
    }

    test = (req, res) =>{
        res.json(req.decoded);
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
