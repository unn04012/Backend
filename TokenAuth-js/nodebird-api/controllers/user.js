import User from '../models/user';
import Domain from '../models/Domain';

const FindUser = async(req, res, next) => {
    try{              
        const user = await User.findOne({
            where : {id : req.user && req.user.id || null},
            include : {model : Domain},
        });            
        res.render('login', {
            user,
            domains : user && user.Domains,
        });
    }catch(err){
        console.error(err);
        next(err);
    }
}

export default FindUser;