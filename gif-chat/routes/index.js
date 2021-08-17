import express from 'express';

import Room from '../schemas/room';
import Chat from '../schemas/chat';

export default class Index{
    path = '/';        
    router = express.Router();
    constructor(){        
        this.router.get('/', this.index);        
    }
    index = async(req, res, next) => {
        try{
            const rooms = await Room.find({});
            res.render('main', {rooms, title : 'GIF 채팅방'});
        }catch(err){
            console.error(err);
            next(err);
        }
    }    
}
