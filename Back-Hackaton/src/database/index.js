const Sequelize = require('sequelize');
const dbSettings = require('../config/settings');

const User = require('../models/User')
const Connection = require('../models/Connection');
const File = require('../models/File');
const Interest = require('../models/Interest');

const connection = new Sequelize(dbSettings);

User.init(connection);
Connection.init(connection);
File.init(connection);
Interest.init(connection);

User.associate(connection.models);
Connection.associate(connection.models);
File.associate(connection.models);
Interest.associate(connection.models);

module.exports = connection;