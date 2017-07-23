const   words = require('./wordsData'),
        translate  = require('google-translate-api'),
        parser = require('json-parser'),
        http = require('http');


module.exports={

    allwords(){
        return words.find();
    },

    allEngWords(req,res){
        var englishWords=[];
        words.find({},{"idWord":0},
        (err,words) => {
            for (let i = 0; i < words.length; i++){
                englishWords.push(words[i].english);
            }
            res.json(englishWords);
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
                        res.json(words[i].randomWords);
                    }
                }
            });
    },

    playPoint(req,res){
        words.find({},{"idWord":0},
            (err,words) => {
                let result='false';
                for (let i = 0; i < words.length; i++){
                    if (words[i].english==req.params.wordId){
                        if (words[i].hebrew==req.params.wordSelect){
                            result='true';
                        }
                    }
                }
                res.json(result);

            });
    },

    getGoogleTranslate(req,response){
        var fromLang = req.params.from;
        var toLang = req.params.to;
        var text = req.params.text;
        translate(text, {from: fromLang, to: toLang}).then(res => {
        console.log(res.text);
        response.json(res.text);
        }).catch(err => {
        console.error(err);
        });
    },

    checkLetter(req,res){
        let checkL='false';
        words.find({},{"idWord":0},
            (err,words) => {
                for (let i = 0; i < words.length; i++){
                    if (words[i].english==req.params.wordId){
                        for (let j=0;j<words[i].english.length;j++){
                            if (words[i].english[j]==req.params.letter){
                                checkL='true';
                            }
                        }
                    
                    }
                }
            res.json(checkL);
            });
    },

    insertWordDataBase(req,response){
        let englishInsert=req.params.english,
            hebrewInsert= req.params.hebrew,
            newWord = new words({
            english: englishInsert,
            hebrew: hebrewInsert,
            idWord: req.params.idWord,
            randomWords: [req.params.word1,req.params.word2,req.params.word3,req.params.word4]
            }),
            answerUser='data saved';

        translate(hebrewInsert, {from: 'iw', to: 'en'}).then(resp => {
        console.log(resp.text);

        if(resp.text==englishInsert){

           newWord.save(
                (err) => {
                    if (err){
                        console.log('errorrrr');
                        answerUser='error';                        
                    }

                   else
                       console.log('saved');
                });
        }

        else{
            answerUser='wrong data';
        }

        response.json(answerUser);

        }).catch(err => {
        console.error(err);
        });
    }


};