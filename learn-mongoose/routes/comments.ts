import express from 'express';
import Comment from '../schemas/comment';

export default class Comments{
    public path = '/comments';
    public router = express.Router();

    constructor(){
        this.router.post('/', this.createComment);
        this.router.route('/:id').patch(this.createComment).delete(this.deleteComment);
    }

    public createComment = async(req : express.Request, res : express.Response, next : any) => {
        try{            
            const comment = await Comment.create({
                commenter : req.body.id,
                comment : req.body.comment,
            });
            console.log(comment);
            const result = await Comment.populate(comment, {path : 'commenter'});
            res.status(201).json(result);
        }catch(err){
            console.error(err);
            next(err);
        }
    };

    public updateComment = async(req : express.Request, res : express.Response, next : any) => {
        try{            
            const result = await Comment.update({
                _id : req.params.id,                
            }, {                                
                comment : req.body.comment,
            });
            res.json(result);
        }catch(err){
            console.error(err);
            next(err);
        }
    };

    public deleteComment = async(req : express.Request, res : express.Response, next : any) => {
        try{
            const result = await Comment.remove({_id : req.params.id});
            res.json(result);
        }catch(err){
            console.error(err);
            next(err);
        }
    }

}