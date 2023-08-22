
const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const path = require('path')
const cors = require('cors')
const port = process.env.SERVER_PORT 


const clientPath = path.join(__dirname, './Frontend/dist')
// const port = 3000
app.use('/', express.static(clientPath))

app.use(express.json())
app.use(cors())
app.use('/api', require('./api/mailer/router'))
app.use('/api', require('./api/orders/router'))
app.use('/api', require('./api/users/router'))
app.use('/api', require('./api/Products/router'))
app.use('/api', require('./api/brands/router'))
app.use('/api', require('./api/Category/router'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './Frontend/dist/index.html'))

})

// mongoose.connect(process.env.MONGO_URI).then(()=>
// console.log("DB Connected"))
// .catch((Error) => console.log("Something went wrong"))




app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
