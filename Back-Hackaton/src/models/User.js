// const { Sequelize } = require('sequelize');
// const sequelize = new Sequelize('postgres://teste:teste@hackathonpostgres:5432/teste');
const { Model, DataTypes } = require('sequelize');
const Connection = require('./Connection')


class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      birthdate: DataTypes.STRING,
      phone: DataTypes.STRING,
      photoUrl: DataTypes.STRING,
    }, {
      sequelize,
    })
  }

  static associate = function (models) {
    this.belongsToMany(models.User, { through: 'connections', as: 'adopter', foreignKey: 'adopter_id' });
    this.belongsToMany(models.User, { through: 'connections', as: 'adopted', foreignKey: 'adopted_id' });
    this.belongsToMany(models.Interest, {
      through: 'interests_users',
      as: 'interests',
      foreignKey: 'userId',
    });
  }
}


module.exports = User;
