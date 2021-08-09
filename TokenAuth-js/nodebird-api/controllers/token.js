import Domain from '../models/domain';
import User from '../models/user';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const createToken = async(req, res) => {                    
    dotenv.config();
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

const test = (req, res) =>{
    res.json(req.decoded);
}

export {createToken, test};