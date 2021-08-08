import request from 'supertest';
import modelIndex from '../models';
import appConfig from '../appconfig';

import User from '../models/user';
import Domain from '../models/domain';

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



describe('GET /', () => { 
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
    test('find user and domains if logined', (done) => {
        request(appConfig.app)
        .get('/')        
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200, done)
    });    
                    
})

describe('POST /domain', () => {
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
    test('create domain if logined', (done) => {        
        agent
            .post('/domain')
            .send({
                host : 'localhost:5000',
                type : 'free',                
            })            
            .expect(302, done);
    });    
})

afterAll(async () => {
    await model.db.sequelize.sync({force : true});
});

