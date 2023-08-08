const mongoose = require('mongoose');
const dotenv= require('dotenv');
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '../.env') });
const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
    console.log('connection successful');
}).catch((err) => {
    console.log(`connection error: ${err.message}`);
}) ;

//const { MongoClient } = require('mongodb')

// let dbConnection

// module.exports = {
//   connectToDb: (cb) => {
//     MongoClient.connect(DB)
//       .then(client => {
//         dbConnection = client.db()
//         console.log('Connection established');
//         return cb()
//       })
//       .catch(err => {
//         console.log(err)
//         return cb(err)
//       })
//   },
//   getDb: () => dbConnection
// }
    