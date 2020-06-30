
const User = require('../models/User');
const Connection = require('../models/Connection');

module.exports = {
    async index(request, response) {
    },

    async setAdoptions(request, response, next) {
        const {  adopted_id } = request.body
        let adopter_id = request.userId;
        
        try {
            let adopter = await User.findByPk(adopter_id);
            let adopted = await User.findByPk(adopted_id);

            let result = await adopter.addAdopter(adopted);
        } catch (err) {
            next(err);
        }


        return response.status(200).send({ message: 'adoption set' });
    },

    async getAdoptions(request, response, next) {
        // const user_id = request.params.user_id;
        let user_id = request.userId;
        // TODO verify best way to do the query

        // Way 1
        // let user = await User.findByPk(user_id,{
        //     include: {
        //         association: 'adopted',
        //         attributes: ['id', 'name'],
        //         through: {
        //             attributes: ['id'],
        //             as : 'adoption'

        //         }  
        //     },
        //     attributes: ['id', 'name']
        // });

        // // Way 3
        // let connections = await Connection.findAll({
        //     where : {adopter_id : user_id}
        // })

        // Way 2
        let adoptions = null;
        try {
            let user = await User.findByPk(user_id);
            adoptions = await user.getAdopter();
        } catch (err) {
            next(err);
        }

        return response.status(200).json({ adoptions });
    },

    async deleteAdoptions(request, response, next) {
        let adopter_id = request.params.user_id;

        let destroyed = null;
        try {
            destroyed = Connection.destroy({
                where: { adopter_id }
            });
        } catch (err) {
            next(err);
        }

        if (destroyed) {
            return response.status(200).send({ message: 'deleted' });
        } else {
            return response.status(404).send({ message: 'user not found' });
        }

    }
}