const Interest = require('../models/Interest');
const { request } = require('express');

module.exports = {
    async index(request, response, next) {
        let interests = null;
        try {
            interests = await Interest.findAll();
        } catch (err) {
            next(err);
        }

        return response.json({ interests });
    },

    async get(request, response, next) {
        let interestId = request.params['interest_id'];

        let interest = null;
        try {
            interest = await Interest.findByPk(interestId);
        } catch (err) {
            next(err);
        }

        if (interest) {
            return response.json(interest);
        } else {
            return response.status(404).send({ message: 'Not Found' });
        }
    },

    async store(request, response, next) {
        const { shortName, longName } = request.body;

        let interest = null;
        try {
            interest = await Interest.create({
                shortName,
                longName,
            });
        } catch (err) {
            next(err);
        }

        return response.json({ interest });
    },

    async update(request, response, next) {
        let interestId = request.params['interest_id'];

        const { shortName, longName } = request.body;

        let updatedLines = null;
        try {
            updatedLines = await Interest.update({
                shortName,
                longName,
                updatedAt: new Date()
            }, { where: { id: interestId } });
        } catch (err) {
            next(err);
        }

        if (updatedLines > 0) {
            return response.status(200).json({ message: 'interest data updated' });
        } else {
            return response.status(404).json({ message: 'interest not found' });
        }
    },

    async delete(request, response, next) {
        let interestId = request.params['interest_id'];

        let destroyed = null;
        try {
            destroyed = await Interest.destroy({
                where: { id: interestId },
            });
        } catch (err) {
            next(err);
        }

        if (destroyed) {
            return response.status(200).send({ message: 'deleted' });
        } else {
            return response.status(404).send({ message: 'file not found' });
        }
    }
};