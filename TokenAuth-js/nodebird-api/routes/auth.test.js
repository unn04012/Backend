import request from 'supertest';
import modelIndex from '../models';
import appConfig from '../appconfig';

import User from '../models/user';
import Domain from '../models/domain';
import sequelize from 'sequelize';

const models = [
    {name : 'User',   value : User},
    {name : 'Domain', value : Domain},
 ];
  
const model = new modelIndex(models);

beforeAll(async () => {
    await model.db.sequelize.sync();
});

describe('POST /join', () => {    
    test('create account if not logind', (done) => {
        request(appConfig.app)
            .post('/auth/join')
            .send({
                email : 'test@test.com',
                nick : 'test',
                password : '1234'
            })
            .expect('Location', '/')
            .expect(302, done)
    });    
});

describe('POST /join', () => {
    const agent = request.agent(appConfig.app);
    beforeEach((done) => {
        agent
            .post('/auth/login')
            .send({
                email : 'test@test.com',
                password : '1234',                
            })
            .end(done)
    });

    test('redirect "/" if login already', (done) => {
        const message = encodeURIComponent('로그인한 상태입니다.');
        agent  
            .post('/auth/join')
            .send({
                email : 'test@test.com',
                nick : 'test',
                password : '1234',
            })
            .expect('Location', `/?error=${message}`)
            .expect(302, done);
    });
});

describe('POST /login', () => {
    test('가입되지 않은 회원',  (done) => {
        const message = encodeURIComponent('가입되지 않은 회원입니다.');
        request(appConfig.app)
            .post('/auth/login')
            .send({
                email : 'test2@test.com',
                password : 'test',
            })
            .expect('Location', `/?loginError=${message}`)
            .expect(302, done);
    });

    test('비밀번호 틀림',   (done) => {
        const message = encodeURIComponent('비밀번호가 일치하지 않습니다.');
        request(appConfig.app)
            .post('/auth/login')
            .send({
                email : 'test@test.com',
                password : 'wrong',
            })
            .expect('Location', `/?loginError=${message}`)
            .expect(302, done);
    });        
});

describe('GET /logout', () => {
    test('로그인되어 있지 않으면 403', (done) => {
        request(appConfig.app)
            .get('/auth/logout')
            .expect(403, done);
    });

    const agent = request.agent(appConfig.app);
    beforeEach((done) => {
        agent
            .post('/auth/login')
            .send({
                email : 'test@test.com',
                password : '1234'
            })
            .end(done);
    });

    test('로그아웃 수행', (done) => {
       request(appConfig.app)
       agent
        .get('/auth/logout')
        .expect('Location', '/')
        .expect(302, done);
    });
});


afterAll(async() => {
    await model.db.sequelize.sync({force : true});
});