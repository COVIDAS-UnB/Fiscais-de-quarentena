const File = require('../models/File');
const Connection = require('../models/Connection');
const { request } = require('express');

module.exports = {
    async index(request, response, next) {
        let files = null;
        try {
            files = await File.findAll();
        } catch (err) {
            next(err);
        }
        return response.json({ files });
    },

    async getFile(request, response, next) {
        let fileId = request.params['file_id'];

        let file = null;
        try {
            file = await File.findByPk(fileId);
        } catch (err) {
            next(err);
        }

        if (file) {
            return response.json(file);
        } else {
            return response.status(404).send({ message: 'Not Found' });
        }
    },

    async store(request, response, next) {
        const { filename, url, mimeType, publicAvailable, type, connectionId } = request.body;

        let file = null;
        try {
            let connection = await Connection.findByPk(connectionId);
            if (!connection) {
                return response.status(404).send({ message: 'Connection not Found' });
            }

            file = await File.create({
                filename,
                url,
                mimeType,
                publicAvailable,
                type,
            });
            file.setConnection(connection);

        } catch (err) {
            next(err);
        }

        return response.json({ file });
    },

    async update(request, response, next) {
        let fileId = request.params['file_id'];

        const { filename, url, mimeType, publicAvailable, type } = request.body;

        let updatedLines = null;
        try {
            updatedLines = await File.update({
                filename,
                url,
                mimeType,
                publicAvailable,
                type,
            }, { where: { id: fileId } });
        } catch (err) {
            next(err);
        }

        if (updatedLines > 0) {
            return response.status(200).json({ message: 'file data updated' });
        } else {
            return response.status(404).json({ message: 'file not found' });
        }
    },

    async delete(request, response, next) {
        let fileId = request.params['file_id'];

        let destroyed = null;
        try {
            destroyed = await File.destroy({
                where: { id: fileId },
            });
        } catch (err) {
            next(err);
        }


        if (destroyed) {
            return response.status(200).send({ message: 'deleted' });
        } else {
            return response.status(404).send({ message: 'file not found' });
        }
    },
};