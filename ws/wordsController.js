const words = require('./wordsData');

var mongoose = require('mongoose');

var point=0;


mongoose.connection.on('open',
    () => console.log('Connected'));

module.exports={

    allwords(){
        return words.find();
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
                        res.json(words[i].randomWords);
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