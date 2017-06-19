const   express    = require('express'),
        app        = express(),
        wordsList  = require('./wordsController'),
        port       = process.env.PORT || 3000;

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

app.get('/includes/controller.js', (req, res) => {
   res.sendFile(`${__dirname}/includes/controller.js`);
}); 

app.get('/trivia.html', (req, res) => {
   res.sendFile(`${__dirname}/trivia.html`);
 });

app.get('/getStartTranslate', wordsList.getWord);

app.get('/getWordTranslate/:wordId', wordsList.wordHebrew);

app.get('/getAllData',
   (req,res)=>{
      wordsList.allwords().then(docs => res.json(docs));
});

app.get('/getPlay/:wordId', wordsList.playPoint);

app.get('/getWordTrivia/:wordId', wordsList.trivia);


app.listen(port,
    () => {
        console.log(`listening on port ${port}`);
    });