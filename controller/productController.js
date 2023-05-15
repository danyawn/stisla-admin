const product = require('../models').product

module.exports = {
    create(req, res) {
        return product
            .create({
                name: req.body.name,
                brand: req.body.brand,
                isDeleted: 0,
                photo: req.body.photo
            }).then((res) => {
                res.status(201).send(res)
            }).catch((err) => {
                res.status(400).send(err)
            });
    },
    read(req, res) {
        return product
            .findAll({
                order: ['createdAt', 'DESC']
            })
            .then((res) => {
                res.status(201).send(res)
            }).catch((err) => {
                res.status(400).send(err)
            });
    },
    readByBrand(req, res) {

    },
    update(req, res) {
        const id = req.params.id
        const { name, brand, photo } = req.body
        return product
            .update({
                name,
                brand,
                photo
            }, {
                where: {
                    id
                }
            })
            .then((res) => {
                res.status(201).send({
                    message: `Update product ${name} succsed!`
                })
            }).catch((err) => {
                res.status(400).send(err)
            });
    },
    delete(req, res) {
        return product
            .findById(req.params.id)
            .then((res) => {
                if (!res) {
                    return res.status(400).send({
                        message: "Product not Found!"
                    })
                }
                return res
                    .destroy()
                    .then((res) => {
                        res.status(204).send({
                            message: "Product had been deleted!"
                        })
                    }).catch((err) => {
                        res.status(400).send(err)
                    });
            }).catch((err) => {

            });
    },
}