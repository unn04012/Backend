const express = require('express');
const axios = require('axios');

const router = express.Router();
const URL = 'http://localhost:3000/token';

const request = async(req, api) => {
    try{
        if(!req.session.jwt){
            const tokenResult = await axios.post(`${URL}/create`,{
                clientSecret : process.env.CLIENT_SECRET,
            });
            req.session.jwt = tokenResult.data.token;
        }
        return await axios.get(`${URL}${api}`, {
            headers : {authorization : req.session.jwt},
        });
    }catch(error){
        if(error.response.status === 419){ // 토큰 재발급
            delete req.session.jwt;            
            return request(req, api);
        }
        return error.response;
    }
}

router.get('/', (req, res) => {
    res.render('main', {key : process.env.CLIENT_SECRET});
});

router.get('/test', async(req, res, next) => {
    try{        
        if(!req.session.jwt){            
            const tokenResult = await axios.post('http://localhost:3000/token/create', {
                clientSecret : process.env.CLIENT_SECRET,
            });                
            if(tokenResult.data && tokenResult.data.code === 200){
                req.session.jwt = tokenResult.data.token; // 세션에 토큰 저장                
            }else{                                
                res.json(tokenResult.data); // 발급 실패 사유 응답
            }
        }        
        const result = await axios.get('http://localhost:3000/token/test',{
            headers : {authorization : req.session.jwt},
        });        
        return res.json(result.data);
    }catch(error){                    
        if(error.response.status === 419){
            return res.json(error.response.data);
        }
        return next(error);
    }
});

router.get('/user', async(req, res) => {
    try{
        const result = await request(req, '/user');
        res.json(result.data);
    }catch(error){
        console.error(error);
        next(error);        
    }
} )

module.exports = router;