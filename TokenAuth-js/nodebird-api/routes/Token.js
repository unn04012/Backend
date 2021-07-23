import express from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import url from 'url';
import { verifyToken } from './middlewares';
import { Domain, User } from '../models';
import { urlencoded } from 'express';


export default class Token{
    router = express.Router();
    path = '/token';

    constructor(){
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
                return res.status(401).json({
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
    
}
