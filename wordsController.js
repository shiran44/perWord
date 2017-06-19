const words = require('./wordsData');
var triviaWords=[];

var consts   = require('./consts'),
    mongoose = require('mongoose');

var point=0;

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
    },

    getWord(req,res){
        words.find({},{"idWord":0},
            (err,words) => {
                for (let i = 0; i < words.length; i++){
                    res.json(words[i].hebrew);
                }
            });

    },

    wordHebrew(req, res){
        words.find({},{"idWord":0},
            (err,words) => {
                for (let i = 0; i < words.length; i++){
                    if (words[i].english==req.params.wordId){
                        res.json(words[i].hebrew);
                    }
                }

            });
    },

    trivia(req,res){
        words.find({},{"idWord":0},
            (err,words) => {
                for (let i = 0; i < words.length; i++){
                    if (words[i].english==req.params.wordId){
                        res.json('${words[i].ramdomWords}');
                    }
                }

            });
    },

    playPoint(req,res){
                words.find({},{"idWord":0},
            (err,words) => {
                for (let i = 0; i < words.length; i++){
                    if (words[i].hebrew==req.params.wordId){
                        point++;
                        res.json('success','${point}');
                    }
                    else res.json('wrong');
                }

            });
    }

};