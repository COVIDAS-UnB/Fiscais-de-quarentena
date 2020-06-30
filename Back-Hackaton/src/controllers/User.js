
const User = require('../models/User');
const Interest = require('../models/Interest');
const Sequelize = require('sequelize');


module.exports = {
    async index(request, response, next) {

        let users = null;
        try {
            users = await User.findAll({
                include: {
                    association: 'adopted',
                    attributes: ['id', 'name'],
                    through: {
                        attributes: []
                    }
                }
                // attributes: ['id', 'name', 'phone', 'username', 'birthdate'],
                // offset: 0,
                // limit: 10
            });
        } catch (err) {
            next(err);
        }
        return response.json({ users });
    },

    async getUser(request, response, next) {
        let user_id = request.params.user_id;

        let user = null;
        try {
            user = await User.findByPk(user_id, {
                include: [{ association: 'adopted' }, { association: 'interests' }]
            });
        } catch (err) {
            next(err);
        }

        if (user) {
            return response.json(user);
        } else {
            return response.status(404).send({ message: 'Not found' })
        }

    },

    async store(request, response, next) {
        const { name, email, password, birthdate, phone, photoUrl } = request.body
        
        const interests = await Interest.findAll({ order: Sequelize.literal('random()'), limit: 5 });

        let user = null;

        try {
            user = await User.create({
                name,
                email,
                password,
                birthdate,
                phone,
                photoUrl,
                created_at: new Date(),
                updated_at: new Date()
            });
        } catch (err) {
            next(err);
        }

        user.setInterests(interests);

        return response.json({ user })
    },

    async update(request, response, next) {
        let user_id = request.params.user_id;
        const { name, email, password, birthdate, phone, photoUrl } = request.body;

        let updatedLines = null;
        try {
            updatedLines = await User.update({
                name,
                email,
                password,
                birthdate,
                phone,
                photoUrl,
                updated_at: new Date()
            }, { where: { id: user_id } });
        } catch (err) {
            next(err);
        }

        if (updatedLines > 0) {
            return response.status(200).json({ message: 'user data updated' });
        } else {
            return response.status(404).json({ message: 'user not found' });
        }
    },

    async delete(request, response, next) {
        let user_id = request.params.user_id;
        let destroyed = null;

        try {
            destroyed = await User.destroy({
                where: { id: user_id }
            });
        } catch (err) {
            next(err);
        }

        if (destroyed) {
            return response.status(200).send({ message: 'deleted' });
        } else {
            return response.status(404).send({ message: 'user not found' });
        }
    },

    

    async match(request, response, next){
        let {interestIds} = request.body;

        let interestId = interestIds[Math.floor(Math.random() * interestIds.length)];

        let user =  await User.findAll({
            include: {
                association: 'interests',
                attributes: ['id'],
                order: Sequelize.literal('random()'),
                where : {id : interestId},
                through: {
                    attributes: []
                }
            }
        })

        return response.status(200).json(user);

       
    }
}