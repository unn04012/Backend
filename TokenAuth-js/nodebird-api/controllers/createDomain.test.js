jest.mock('../models/domain');
import Domain from '../models/domain';
import {createDomain} from "./createDomain";
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