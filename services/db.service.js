const mongoose = require('mongoose')
const uri = "mongodb+srv://ibeneficios-api-dev:O7ltW2iQsrkhFHxg@tagmedev.5vyc4.azure.mongodb.net/tagmedev?retryWrites=true&w=majority";

exports.connect = async () => {
    console.info(`Database connecting...`)

    const conn = await mongoose.createConnection(
        uri,
        { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'tagmedev' }
    )

    console.info(`Connected to private database!`)

    return conn;
}