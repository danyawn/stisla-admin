const user = require('../models').user

module.exports = {
    create(req, res) {
        return user
            .create({
                name: req.body.name,
                role: req.body.role
            }).then((res) => {
                res.status(201).send(res)
            }).catch((err) => {
                res.status(400).send(err)
            });
    },

    update(req, res) {
        return user
            .find({
                where: {
                    id: req.params.userId,
                }
            }).then((res) => {
                if (!res) {
                    return res.status(400).send({
                        message: "ID User not found!"
                    })
                }
                return res
                    .update({
                        name: req.body.name || res.name
                    }).then((update) => {
                        res.status(200).send(update)
                    }).catch((err) => {
                        res.status(400).send(err)
                    });
            }).catch((err) => {
                res.status(400).send(err)
            });
    },

    delete(req, res) {
        return user
            .find({
                where: {
                    id: req.params.userId
                }
            }).then((res) => {
                if (!res) {
                    return res.status(404).send({
                        message: 'User not Found!'
                    })
                }
                return user
                    .destroy()
                    .then((res) => {
                        res.status(200).send(res)
                    }).catch((err) => {
                        res.status(400).send(err)
                    });
            }).catch((err) => {
                res.status(400).send(err)
            });
    },
}