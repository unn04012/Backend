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
const agent = request.agent(appConfig.app);
// test('login user', (done) => {
//         agent
//             .post('/auth/login')
//             .send({
//                 email : 'test@test.com',
//                 password : '1234',
//             })
//             .end(done);
// });
// describe('POST /join', () => {
//     test('create user ', (done) => {
//         request(appConfig.app)
//             .post('/auth/join')
//             .send({
//                 email : 'test@test.com',
//                 nick : 'test',
//                 password : '1234'
//             })
//             .expect('Location', '/')
//             .expect(302, done)
//     });
    
//     test('create Domain', (done) => {
//         agent
//             .post('/domain')
//             .send({
//                 host : 'localhost:4000',
//                 type : 'free',
//             })
//             .expect('Location', '/')
//             .expect(302, done);
//     })
// })

describe('POST /create', () => {        
    test('create token if domain registerd', async() => {
        const result = await request(appConfig.app)
            .post('/token/create')
            .send({
                clientSecret : '47d330c5-b8a7-47a0-b87f-774ed54d0f03'            
            });

            expect(result.headers['content-type']).toMatch('/json');
            expect(result.body.code).toBe(200);                    
    })
})

// afterAll(async () => {
//     await model.db.sequelize({force : true})
// })