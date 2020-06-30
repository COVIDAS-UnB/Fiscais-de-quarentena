const { Model, DataTypes } = require('sequelize');

class File extends Model {
    static init(sequelize) {
        super.init({
            filename: DataTypes.STRING,
            url: DataTypes.STRING,
            mimeType: DataTypes.STRING,
            publicAvailable: DataTypes.BOOLEAN,
            type: DataTypes.STRING,
        }, {
            sequelize,
        });
    }

    static associate(models) {
        this.belongsTo(models.Connection, { as: "connection" });
    }
}

module.exports = File;