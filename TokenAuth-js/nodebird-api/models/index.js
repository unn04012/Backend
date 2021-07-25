import Sequelize from 'sequelize';
import config from '../config/config';

const env = process.env.NODE_ENV || 'development';



export default class sequelize {
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

  run(){
    console.log(typeof this.db.User);
    console.log(typeof this.db.Domain);
    return this.db;
  }
} 


// const db = {};
// const sequelize = new Sequelize(
//   config[env].database, config[env].username, config[env].password, config[env],
// );

// db.sequelize = sequelize;
// db.User = User;
// db.Domain = Domain;

// User.init(sequelize);
// Domain.init(sequelize);

// User.associate(db);
// Domain.associate(db);
// console.log(db.User);
// console.log(typeof db.User);
// console.log(db);

// module.exports = db;