import { isLoggedIn, isNotLoggedIn, verifyToken } from "./middlewares";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
jest.mock('jsonwebtoken');

dotenv.config();
// descritbe : 테스트를 그룹화해주는 역할
describe('isLoggedIn', () => {
    // 함수를 모킹할 때는 jest.fn() 메서드를 사용
    // 함수의 반환값을 지정하고 싶다면 jest.fn(() => value) 을 사용한다.
    const res = {
        status : jest.fn(() => res), 
        send : jest.fn(),
    };

    const next = jest.fn();
    test('로그인되어 있으면 isLoggedIn이 next를 호출해야 함', () => {
        const req = {
            isAuthenticated : jest.fn(() => true),
        };
        isLoggedIn(req, res, next);
        // toBeCalledTimes() : 정확하게 몇번 호출되었는지
        expect(next).toBeCalledTimes(1); 
    });
    test('로그인되어 있지 않으면 isLoggedIn이 에러를 응답해야 함', () => {
        const req = {
            isAuthenticated : jest.fn(() => false),
        };
        isLoggedIn(req, res, next);
        // toBeCalledWith(인수) : 특정 인수와 함께 호출되었는지를 체크하는 메서드
        expect(res.status).toBeCalledWith(403);
        expect(res.send).toBeCalledWith('로그인 필요');
    });
});

describe('isNotLoggedIn', () => {    
    const res = {
        redirect : jest.fn(),
    }
    const next = jest.fn();
    test('로그인되어 있으면 isLoggedIn이 에러를 호출해야 함', () => {
        const req = {
            isAuthenticated : jest.fn(() => true),
        };
        isNotLoggedIn(req, res, next);
        const message = encodeURIComponent('로그인한 상태입니다.');
        expect(res.redirect).toBeCalledWith(`/?error=${message}`);
    });
    test('로그인되어 있지 않으면 isLoggedIn이 next를 응답해야 함', () => {
        const req = {
            isAuthenticated : jest.fn(() => false),
        };
        isNotLoggedIn(req, res, next);
        expect(next).toBeCalledTimes(1);
    })
});

describe('verifyToken', () => {
    const res = {
        status : jest.fn(() => res),
        json : jest.fn(),
    };
    const next = jest.fn();
    const expiredToken = jwt.sign({
        id : '1',
        nick : 'mun',
    }, process.env.JWT_SECRET, {
        expiresIn : '1m',
        issuer: 'unn04012',
    });
    test('success for jwt.verfiy method', () => {
        const token = jwt.sign({
            id : '1',
            nick : 'mun',
        }, process.env.JWT_SECRET, {
            expiresIn : '1m',
            issuer: 'unn04012',
        });
        const req = {
            headers : {
                authorization : token
            }
        };
        verifyToken(req, res, next);
        expect(next).toBeCalledTimes(1);
    });

    test('expired for jwt.verify method', () => {
        const req = {
            headers : {
                authorization : expiredToken,
            }
        };                        
        const error = {name : 'TokenExpiredError'};
        jwt.verify.mockImplementation(() => {
            throw error;
        });
        verifyToken(req, res, next);        
        expect(res.status).toBeCalledWith(419);        
        expect(res.json).toBeCalledWith({
            code : 419,
            message : '토큰이 만료되었습니다.',            
        })        
    });

    test('invalid jwt token', () => {                
        const req = {
            headers : {
                authorization : expiredToken,
            }
        };                        
        const error = {name : 'TokenInvalid'};
        jwt.verify.mockImplementation(() => {
            throw error;
        });
        verifyToken(req, res, next);        
        expect(res.status).toBeCalledWith(401);        
        expect(res.json).toBeCalledWith({            
                code : 401,
                message : '유효하지 않은 토큰입니다',            
        })
    })
})