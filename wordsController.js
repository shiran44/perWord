const words = require('./wordsData');
var consts   = require('./consts'),
    mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(consts.MLAB_KEY);
const conn   = mongoose.connection;

conn.on('error',
(err) => {
console.log(`connection error: ${err}`);
});

mongoose.connection.on('open',
    () => console.log('Connected'));

module.exports={

    allwords(){
        return words.find();
    }

};