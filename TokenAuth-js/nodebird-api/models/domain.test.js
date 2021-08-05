import Sequelize from 'sequelize';
import config from '../config/config';
import Domain  from './domain';

const sequelize = new Sequelize(
    config['test'].database, config['test'].username,config['test'].password, config['test'],
);

describe('Domain model', () => {
    test('call static init method ', () => {
        expect(Domain.init(sequelize)).toBe(Domain);
    });

    test('call static associeate method', () => {
        const db = {
            Domain : {belongsTo : jest.fn()},
            User  : {},
        };
        Domain.associate(db);
        expect(db.Domain.belongsTo).toHaveBeenCalledWith(db.User);
    });
})