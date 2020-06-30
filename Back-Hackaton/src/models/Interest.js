const { Model, DataTypes } = require('sequelize');

class Interest extends Model {
    static init(sequelize) {
        super.init({
            shortName: DataTypes.STRING,
            longName: DataTypes.STRING,
        }, {
            sequelize,
        });
    }

    static associate(models) {
        this.belongsToMany(models.User, {
            through: 'interests_users',
            as: 'users',
            foreignKey: 'interestId',
        });
    }
}

module.exports = Interest;