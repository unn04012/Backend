import express from 'express';
import User from '../schemas/user';

export default class Index{
    public path = '/';
    public router = express.Router();

    constructor(){
        this.router.get('/', this.index);
    }
    public index = async (req : express.Request, res : express.Response, next : any) => {
        try{            
            const users = await User.find({});
            res.render('mongoose', {users});
        }catch(err){
            console.error(err);
            next(err);
        }
    }
}