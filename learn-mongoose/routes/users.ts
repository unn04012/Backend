import express from 'express';
import User from '../schemas/user';
import Comment from '../schemas/comment';

export default class Users{
    public path = '/users';
    public router = express.Router();

    constructor(){
        this.router.get('/', this.showUser);
        this.router.post('/', this.createUser);
        this.router.get('/:id/comments', this.getComments);        
    }

    public showUser = async (req : express.Request, res : express.Response, next : any) => {
        try{
            console.log('hello world');
            const users = await User.find({});
            res.json(users);
        }catch(err){
            console.error(err);
            next(err);
        }
    }

    public createUser = async(req : express.Request, res : express.Response, next : any) => {        
        const {name, age, married} = req.body;        
        try{
            console.log(req.body);
            console.log('hello world');
            const user = await User.create({
                name : name,
                age : age,
                married : married,
            });
            console.log(user);
            res.status(201).json(user);
        }catch(err){
            console.error(err);
            next(err);
        }
    }

    public getComments = async (req : express.Request, res : express.Response, next : any) => {
        try{
            const comments = await Comment.find({commenter : req.params.id}).populate('commenter');
            console.log(comments);
            res.json(comments);
        }catch(err){
            console.error(err);
            next(err);
        }
    }
    
}