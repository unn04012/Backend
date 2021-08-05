import Sequelize from 'sequelize';
import User from './user';
import config from '../config/config';
import { describe } from 'yargs';
import { expect, jest, test } from '@jest/globals';

const config = config['test'];
const sequelize = new Sequelize(
    config.database, config.username,config.password, config,
);

describe('Domain model', () => {
    test('call static init method ', () => {
        expect(Domain.init(sequelize).toBe(Domain));
    });

    test('call static associeate method', () => {
        const db = {
            Domain : {belongsTo : jest.fn()}
        };
    })
})