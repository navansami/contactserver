const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const dbOptions = {}
const dbURI = process.env.MONGO_URI
    .replace("<user>", process.env.MONGO_USER)
    .replace("<password>", process.env.MONGO_PWD)
    .replace("<database>", process.env.MONGO_DB)

const connection = async () => {
    mongoose
        .connect(dbURI, dbOptions)
        .then(data => console.log(`Connection Established - database: ${process.env.MONGO_DB}`))
        .catch(err => console.log(err))
}

module.exports = connection