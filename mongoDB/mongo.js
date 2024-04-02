const mongoose = require('mongoose')
try {
    mongoose.connect(process.env.DBCONNECT)
    console.log('Conectado!')
} catch (error) {
    console.log(error)
}
