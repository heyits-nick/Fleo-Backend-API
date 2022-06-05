const mongoose = require('mongoose');
const configs = require('../configs.json');

const server = configs.mongoDbServer;   
const dbUsername = configs.mongoDbUsername;
const dbPassword = configs.mongoDbPassword;

// "mongodb://localhost:27017/trf"
class Database {
  constructor() {
    this._connect()
  }

_connect() {
     mongoose.connect(`mongodb+srv://${dbUsername}:${dbPassword}@cluster0.wsmtx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority` , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
         console.log('Database connection successful')
       })
       .catch((err) => {
         console.error('Database connection error')
         console.error(err)
       })
  }
}

module.exports = new Database()