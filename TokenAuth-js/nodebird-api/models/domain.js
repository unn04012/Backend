import Sequelize from 'sequelize';

export default class Domain extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            host: {
                type : Sequelize.STRING(80),
                allowNull : false,
            },
            type : {
                type : Sequelize.ENUM('free', 'premium'),
                allowNull : false,
            },
            clientSecret : {
                type : Sequelize.UUID,
                allowNull : false,
            },
        },{
            sequelize,
            timestaps : true,
            paranoid : true,
            modelName : 'Domain',
            tableName : 'domains',
        })
    }

    static associate(db){
        db.Domain.belongsTo(db.User);
    }
}