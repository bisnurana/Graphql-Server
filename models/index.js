import Sequelize from 'sequelize';

const sequelize = new Sequelize('graphqltest_db', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});
const db = {
  User: sequelize.import('./user'),
};


/* Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize; */

module.exports = db;
