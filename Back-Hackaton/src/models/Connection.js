const { Model, DataTypes } = require('sequelize');

class Connection extends Model {
  static init(sequelize) {
    super.init({
      accepted: DataTypes.BOOLEAN
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.User, { as: 'adopter', onDelete: 'CASCADE' });
    this.belongsTo(models.User, { as: 'adopted', onDelete: 'CASCADE' });
    this.hasMany(models.File, { as: 'files', foreignKey: 'connection_id' });
  }
}

module.exports = Connection;
