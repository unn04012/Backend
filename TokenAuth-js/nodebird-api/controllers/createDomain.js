import Domain from '../models/domain';
import {v4 as uuidv4} from 'uuid';

const createDomain = async (req, res, next) => {
    try{
        await Domain.create({
            UserId : req.user.id,
            host : req.body.host,
            type : req.body.type,
            clientSecret : uuidv4(),
        });
        res.redirect('/');
    }catch(err){
        console.error(err);
        next(err);
    }
}

export default createDomain;