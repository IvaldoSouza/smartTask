// const mongoose = require('mongoose');

// const MONGO_DB_URL = 'mongodb+srv://usuario:<usuario>@cluster0.gmwel.mongodb.net/annotations?retryWrites=true&w=majority';

// const OPTIONS = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// const connection = mongoose.connect(MONGO_DB_URL, OPTIONS);


// module.exports = connection;


const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://localhost:27017/SmartTask';
const DB_NAME = 'SmartTask';

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db = null;

const connection = () => (db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
      db = conn.db(DB_NAME);
      return db;
    }));

module.exports = connection;