import Sequelize from 'sequelize';
import config from '../config/config';
import User from './user';
import Domain from './domain';

const env = process.env.NODE_ENV || 'development';



class Index {
  db = {};  
  sequelize = new Sequelize(
    config[env].database, config[env].username, config[env].password, config[env],
  );

  constructor(models){            
    this.db.sequelize = this.sequelize;        
    this.migration(models);    
  };

  migration(models){
    this.createModel(models);
    this.init(models);
    this.associate(models);
  }

  createModel(models){
    models.forEach(model => {
      this.db[model.name] = model.value;
    })
  }

  init(models){
    models.forEach(model => {      
      model.value.init(this.sequelize);      
    });
  }
  associate(models){
    models.forEach(model => {
      model.value.associate(this.db);
    })
  } 
} 

/**
 * DEFINE MODELS
 * @OBJECT
 * name : modelName;
 * value : modelObject
 */

const models = [
  {name : 'User',   value : User},
  {name : 'Domain', value : Domain},
];

const sequelize = new Index(models);

export default sequelize.db;
