const userController = require('../controller').userController
const productController = require('../controller').productController

module.exports = (app) => {
    app.get('/api', (req, res) => {
        res.status(200).send({
            message: 'Welcome to Product API'
        })
    })

    // user
    app.post('/api/user', userController.create)
    app.put('/api/:id', userController.update)
    app.delete('/api/:id', userController.delete)


    // products
    app.get('/api/product', productController.read)
    app.post('/api/product', productController.create)
    app.put('/api/product/:id', productController.update)
    app.delete('/api/product/:id', productController.delete)

}