const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const url = require('url');

const {verifyToken} = require('./middlewares');
const {Domain, User} = require('../models');
const { urlencoded } = require('express');

const router = express.Router();
router.use(async(req, res, next) => {        
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
});
    

router.post('/token', async(req, res) => { // token 발급
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
});

router.get('/test', verifyToken, (req,res) => {
    res.json(req.decoded);
});

router.get('/user', verifyToken, async (req, res) => {
    try{
        const user = await User.findOne({where : {id : req.decoded.id}});
        res.json({user : user, token : req.decoded});
    }catch(error){
        console.error(error);
        return res.status(500).json({
            code : 500,
            message : '서버 에러',
        });
    }    
})

module.exports = router;