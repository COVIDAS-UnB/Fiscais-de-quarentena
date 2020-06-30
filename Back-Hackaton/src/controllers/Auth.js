var jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = {

    async login(request, response, next) {
        const { email, password } = request.body;

        let user = null;
        try {
            user = await User.findOne({
                where: { email, password }
            });
        } catch (err) {
            next(err);
        }

        if (!user) {
            response.status(404).json({ message: 'user not found' });
        }

        if (request.body.email === user.email && request.body.password === user.password) {
            //auth ok
            const id = user.id; 
            var token = jwt.sign({ id }, process.env.SECRET, {
                expiresIn: 30000 // expires in 5min
            });
            return response.json({ auth: true, token: token });
        }

        response.status(500).json({ message: 'Login inválido!' });


    },
    async verifyJWT(request, response, next) {
        var token = request.headers['x-access-token'];
        if (!token) return response.status(401).json({ auth: false, message: 'No token provided.' });
        
        jwt.verify(token, process.env.SECRET, async function(err, decoded) {
          if (err) return response.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
          
          // se tudo estiver ok, salva no request para uso posterior

          request.user = await User.findByPk(decoded.id);
          request.user = request.user.dataValues;   
          request.userId = decoded.id;
          next();
        });
    }
}