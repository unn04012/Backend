jest.mock('../models/domain');
import { domain } from 'process';
import Domain from '../models/domain';
import User from '../models/user';
import { createToken } from './token';

describe('create Token', () => {    
    const req = {
        body : 'clientSecret',
    };
    test('create token if domain registerd', async () => {        
        const res = {            
            json : jest.fn(),            
        };
        const token = {
            User : {
                id : 1,
                nick : 'test',
            }
        };
        Domain.findOne.mockReturnValue(Promise.resolve(token));
        await createToken(req, res);
        expect(res.json).toBeCalledTimes(1);           
    });

    test('not create token unless domain registered ', async () => {
        const res = {            
            json : jest.fn(),      
        };
        Domain.findOne.mockReturnValue(null);
        await createToken(req, res);
        expect(res.json).toBeCalledWith({
            code : 401,
            message : '등록되지 않은 도메인입니다. 먼저 도메인을 등록하세요',
        })
    });
    test('occur db error with status 500', async () => {
        const res = {
            status : jest.fn(() => res),
            json : jest.fn()
        };
        Domain.findOne.mockReturnValue(Promise.reject(new Error('error')));
        await createToken(req, res);
        expect(res.status).toBeCalledWith(500);
        expect(res.json).toBeCalledWith({
            code : 500,
            message : '서버 에러',
        })
    })
})