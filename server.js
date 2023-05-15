const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')

const { user, product } = require('./models')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

require('./routes')(app);






app.listen(port, () => {
    console.log(`App listening at port http://localhost:${port}`)
})