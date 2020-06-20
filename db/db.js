const Console = require('console');
const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/airbnbdesc';

mongoose.connect(mongoUri);
const { connection } = mongoose;
connection.on('error', Console.error.bind(console, 'connection error:'));
connection.once('open', () => Console.log('connected to mongodb'));

module.exports = connection;
