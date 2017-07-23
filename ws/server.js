const   express    = require('express'),
        app        = express(),
        wordsList  = require('./wordsController'),
        request    = require('request'),
        port       = process.env.PORT || 3000;

app.set('port',port);
app.use('/', express.static('./public'));
app.use(
    (req,res,next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });


app.get('/', (req, res) => {
   res.sendFile(`${__dirname}/index.html`);
 });

app.get('/includes/style.css', (req, res) => {
   res.sendFile(`${__dirname}/includes/style.css`);
}); 

app.get('/images/words.png', (req, res) => {
   res.sendFile(`${__dirname}/images/words.png`);
}); 

app.get('/images/perWord.png', (req, res) => {
   res.sendFile(`${__dirname}/images/perWord.png`);
}); 

app.get('/getAllData',
   (req,res)=>{
      wordsList.allwords().then(docs => res.json(docs));
});

app.get('/getTranslate/:from/:to/:text', wordsList.getGoogleTranslate);

app.get('/insertNewWord/:english/:hebrew/:idWord/:word1/:word2/:word3/:word4', wordsList.insertWordDataBase);

app.get('/getWordTranslate/:wordId', wordsList.wordHebrew);

app.get('/getAllEnglishWords', wordsList.allEngWords);

app.get('/getWordTrivia/:wordId', wordsList.trivia);

app.get('/getPlay/:wordId/:wordSelect', wordsList.playPoint);

app.get('/writingLetter/:wordId/:letter', wordsList.checkLetter);


app.listen(port,
    () => {
        console.log(`listening on port ${port}`);
    });