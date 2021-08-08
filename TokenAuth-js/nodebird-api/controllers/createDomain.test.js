jest.mock('../models/domain');
jest.mock('../models/user');
import Domain from '../models/domain';
import User from '../models/user';
import {createDomain, FindUser} from "./createDomain";
import {v4 as uuidv4} from 'uuid';
describe('createDomain', (() => {
    const res = {
        redirect : jest.fn(),
    };
    const req = {
        user : {id : 2},
        body : {host : 'test2@test2.com', type : 'free'},
    }    
    const next = jest.fn();

    test('create a domain', async () => {            
        await createDomain(req, res, next);
        expect(res.redirect).toBeCalledWith('/');
    });

    test('fail to create a domain', async() => {
        const err = 'test error';
        Domain.create.mockReturnValue(Promise.reject(err));
        await createDomain(req, res, next);        
        expect(next).toBeCalledWith(err);
    });
}));

describe('find user', () => {
    const req = {
        user : {id : 1}
    };
    const res = {
        render : jest.fn()
    };
    const next = jest.fn();
    test('find user if registered', async () => {        
        const user = true;
        User.findOne.mockReturnValue(Promise.resolve(true));    
        await FindUser(req, res, next);

        expect(res.render).toBeCalledWith('login', {user, domains : user && user.Domains});
    });

    test('throw error if not registered', async () => {
        const error = 'no registerd user'
        User.findOne.mockReturnValue(Promise.reject(error));    
        await FindUser(req, res, next);

        expect(next).toBeCalledWith(error);
    });
    
})