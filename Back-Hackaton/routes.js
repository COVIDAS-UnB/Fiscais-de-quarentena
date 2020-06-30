const express = require('express')
const UserController = require('./src/controllers/User.js')
const AdoptionController = require('./src/controllers/Adoption.js')
const AuthController = require('./src/controllers/Auth.js')
const FileController = require('./src/controllers/File');
const InterestController = require('./src/controllers/Interest');
const routes = express.Router()

// User routes
routes.get('/users', UserController.index);
routes.get('/users/:user_id', AuthController.verifyJWT, UserController.getUser);
routes.post('/users', UserController.store);
routes.put('/users/:user_id', UserController.update);
routes.delete('/users/:user_id', UserController.delete);

routes.get('/adoptions', AuthController.verifyJWT,  AdoptionController.getAdoptions);
routes.post('/adoptions/', AuthController.verifyJWT,  AdoptionController.setAdoptions);
routes.delete('/adoptions/:user_id', AdoptionController.deleteAdoptions);

routes.post('/auth/login', AuthController.login);


routes.post('/match', UserController.match);
// Other routes



routes.get('/files', FileController.index);
routes.get('/files/:file_id', FileController.getFile);
routes.post('/files', FileController.store);
routes.put('/files/:file_id', FileController.update);
routes.delete('/files/:file_id', FileController.delete);

routes.get('/interests', InterestController.index);
routes.get('/interests/:interest_id', InterestController.get);
routes.post('/interests', InterestController.store);
routes.put('/interests/:interest_id', InterestController.update);
routes.delete('/interests/:interest_id', InterestController.delete);

module.exports = routes